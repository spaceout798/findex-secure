import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({ meta: [{ title: "تسجيل الدخول — فايندكس" }] }),
});

function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md p-8 bg-card border-border shadow-elegant">
          <div className="text-center mb-8">
            <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-4"><Shield className="h-6 w-6 text-primary-foreground" /></div>
            <h1 className="text-2xl font-extrabold mb-1">مرحباً بعودتك</h1>
            <p className="text-sm text-muted-foreground">سجّل الدخول لحسابك في فايندكس</p>
          </div>
          <form className="space-y-4">
            <div><Label className="mb-2 block">البريد الإلكتروني</Label><Input type="email" placeholder="you@example.com" className="bg-background border-border h-11" /></div>
            <div><Label className="mb-2 block">كلمة المرور</Label><Input type="password" placeholder="••••••••" className="bg-background border-border h-11" /></div>
            <Button className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-11" size="lg">تسجيل الدخول</Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">ليس لديك حساب؟ <Link to="/register" className="text-gold font-semibold hover:underline">إنشاء حساب</Link></p>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}
