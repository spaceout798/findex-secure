import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Crown, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/register")({
  component: Register,
});

function Register() {
  const { t } = useI18n();
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
            <TabsContent value="user" className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div><Label className="mb-2 block">{t("auth.firstName")}</Label><Input className="bg-background border-border h-11" /></div>
                <div><Label className="mb-2 block">{t("auth.lastName")}</Label><Input className="bg-background border-border h-11" /></div>
              </div>
              <div><Label className="mb-2 block">{t("auth.email")}</Label><Input type="email" className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.phone")}</Label><Input type="tel" placeholder="01xxxxxxxxx" className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.password")}</Label><Input type="password" className="bg-background border-border h-11" /></div>
              <Button className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-11" size="lg">{t("auth.create")}</Button>
            </TabsContent>
            <TabsContent value="shop" className="space-y-4">
              <div><Label className="mb-2 block">{t("auth.shopName")}</Label><Input className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.commercialReg")}</Label><Input className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.email")}</Label><Input type="email" className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.phone")}</Label><Input type="tel" className="bg-background border-border h-11" /></div>
              <div><Label className="mb-2 block">{t("auth.password")}</Label><Input type="password" className="bg-background border-border h-11" /></div>
              <Button className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-11" size="lg">{t("auth.registerShop")}</Button>
            </TabsContent>
          </Tabs>
          <p className="text-center text-sm text-muted-foreground mt-6">{t("auth.haveAccount")} <Link to="/login" className="text-gold font-semibold hover:underline">{t("auth.signIn")}</Link></p>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}
