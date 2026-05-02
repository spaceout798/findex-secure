import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, BadgeCheck, Bell, BarChart3, FileText, Award, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/for-shops")({ component: ForShopsPage });

function ForShopsPage() {
  const { t, lang } = useI18n();
  const benefits = lang === "ar" ? [
    { icon: BadgeCheck, title: "شارة موثوق", desc: "اعتماد رسمي من فايندكس يظهر لكل عميل." },
    { icon: Award, title: "شهادة اعتماد", desc: "شهادة مطبوعة قابلة للعرض في معرضك." },
    { icon: Bell, title: "تنبيهات فورية", desc: "كن أول من يعلم بكل بلاغ في منطقتك." },
    { icon: BarChart3, title: "تحليلات احترافية", desc: "إحصائيات شاملة لأداء محلك على المنصة." },
    { icon: FileText, title: "بلاغ نيابة", desc: "أنشئ بلاغات نيابة عن عملائك بسهولة." },
    { icon: Crown, title: "ظهور مميز", desc: "اظهر في دليل المحلات الموثقة العام." },
  ] : [
    { icon: BadgeCheck, title: "Verified badge", desc: "Official Findex endorsement visible to every customer." },
    { icon: Award, title: "Certificate", desc: "Printable certificate to display in your showroom." },
    { icon: Bell, title: "Instant alerts", desc: "Be the first to know about every report in your area." },
    { icon: BarChart3, title: "Pro analytics", desc: "Comprehensive stats on your shop's platform performance." },
    { icon: FileText, title: "Report on behalf", desc: "Create reports on behalf of your customers easily." },
    { icon: Crown, title: "Featured visibility", desc: "Appear in the public Trusted Shops directory." },
  ];
  const onboarding = lang === "ar"
    ? ["أنشئ حساب محل", "أدخل بياناتك التجارية", "ارفع رخصة المزاولة", "اختر باقة الاشتراك", "ادفع الاشتراك", "مراجعة الإدارة", "احصل على الشارة والشهادة"]
    : ["Create a shop account", "Enter business details", "Upload business license", "Choose a subscription plan", "Pay the subscription", "Admin review", "Receive badge and certificate"];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow={t("page.forShops.eyebrow")}
        title={t("page.forShops.title")}
        subtitle={t("page.forShops.subtitle")}
        cta={<Link to="/register"><Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-12 px-8">{t("page.forShops.cta")}</Button></Link>}
      />
      <section className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-extrabold text-center mb-10">{t("page.forShops.benefits")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <Card key={b.title} className="p-6 bg-card border-border hover:border-gold/40 transition">
              <b.icon className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-card/40 border-y border-border py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-center mb-10">{t("page.forShops.steps")}</h2>
          <ol className="space-y-3">
            {onboarding.map((step, i) => (
              <li key={step} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center font-bold text-primary-foreground shadow-gold flex-shrink-0">{i + 1}</div>
                <span className="font-medium">{step}</span>
                <CheckCircle2 className="h-5 w-5 text-gold ms-auto" />
              </li>
            ))}
          </ol>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
