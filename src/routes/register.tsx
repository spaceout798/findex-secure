import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Crown, User, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({
  component: Register,
});

function Register() {
  const { t } = useI18n();
  const navigate = useNavigate();

  // user form
  const [uFirst, setUFirst] = useState("");
  const [uLast, setULast] = useState("");
  const [uEmail, setUEmail] = useState("");
  const [uPhone, setUPhone] = useState("");
  const [uPwd, setUPwd] = useState("");

  // shop form
  const [sName, setSName] = useState("");
  const [sCR, setSCR] = useState("");
  const [sEmail, setSEmail] = useState("");
  const [sPhone, setSPhone] = useState("");
  const [sPwd, setSPwd] = useState("");

  const [loading, setLoading] = useState(false);

  const signUp = async (
    email: string,
    password: string,
    metadata: Record<string, unknown>,
    isShop: boolean,
    shopMeta?: { name: string; commercial_register: string; phone: string },
  ) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: metadata,
      },
    });
    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    if (isShop && data.user && shopMeta) {
      // Add shop_owner role + shop record
      await supabase.from("user_roles").insert({ user_id: data.user.id, role: "shop_owner" });
      await supabase.from("shops").insert({
        owner_id: data.user.id,
        name: shopMeta.name,
        commercial_register: shopMeta.commercial_register,
        phone: shopMeta.phone,
        email,
      });
    }
    setLoading(false);
    toast.success("Account created");
    navigate({ to: "/dashboard" });
  };

  const handleUser = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(uEmail, uPwd, { first_name: uFirst, last_name: uLast, phone: uPhone }, false);
  };

  const handleShop = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(sEmail, sPwd, { first_name: sName, phone: sPhone }, true, {
      name: sName,
      commercial_register: sCR,
      phone: sPhone,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border shadow-elegant">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-extrabold mb-1">{t("auth.register.title")}</h1>
            <p className="text-sm text-muted-foreground">{t("auth.register.subtitle")}</p>
          </div>
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-secondary">
              <TabsTrigger value="user" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold gap-2"><User className="h-4 w-4" /> {t("auth.user")}</TabsTrigger>
              <TabsTrigger value="shop" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold gap-2"><Crown className="h-4 w-4" /> {t("auth.shop")}</TabsTrigger>
            </TabsList>
            <TabsContent value="user">
              <form className="space-y-4" onSubmit={handleUser}>
              <div className="grid grid-cols-2 gap-3">
                <div><Label className="mb-2 block">{t("auth.firstName")}</Label><Input required value={uFirst} onChange={(e) => setUFirst(e.target.value)} className="bg-background border-border h-11" /></div>
                <div><Label className="mb-2 block">{t("auth.lastName")}</Label><Input required value={uLast} onChange={(e) => setULast(e.target.value)} className="bg-background border-border h-11" /></div>
              </div>
              <div><Label className="mb-2 block">{t("auth.email")}</Label><Input required type="email" value={uEmail} onChange={(e) => setUEmail(e.target.value)} className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.phone")}</Label><Input required type="tel" value={uPhone} onChange={(e) => setUPhone(e.target.value)} placeholder="01xxxxxxxxx" className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.password")}</Label><Input required type="password" minLength={6} value={uPwd} onChange={(e) => setUPwd(e.target.value)} className="bg-background border-border h-11" /></div>
              <Button type="submit" disabled={loading} className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-11" size="lg">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : t("auth.create")}
              </Button>
              </form>
            </TabsContent>
            <TabsContent value="shop">
              <form className="space-y-4" onSubmit={handleShop}>
              <div><Label className="mb-2 block">{t("auth.shopName")}</Label><Input required value={sName} onChange={(e) => setSName(e.target.value)} className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.commercialReg")}</Label><Input required value={sCR} onChange={(e) => setSCR(e.target.value)} className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.email")}</Label><Input required type="email" value={sEmail} onChange={(e) => setSEmail(e.target.value)} className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.phone")}</Label><Input required type="tel" value={sPhone} onChange={(e) => setSPhone(e.target.value)} className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.password")}</Label><Input required type="password" minLength={6} value={sPwd} onChange={(e) => setSPwd(e.target.value)} className="bg-background border-border h-11" /></div>
              <Button type="submit" disabled={loading} className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-11" size="lg">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : t("auth.registerShop")}
              </Button>
              </form>
            </TabsContent>
          </Tabs>
          <p className="text-center text-sm text-muted-foreground mt-6">{t("auth.haveAccount")} <Link to="/login" className="text-gold font-semibold hover:underline">{t("auth.signIn")}</Link></p>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}
