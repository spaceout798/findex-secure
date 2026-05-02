import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({ component: Pricing });

function Pricing() {
  const { t, lang } = useI18n();
  const plans = [
    { name: t("price.basic"), price: "499", features: [t("price.basic.f1"), t("price.basic.f2"), t("price.basic.f3"), t("price.basic.f4")] },
    { name: t("price.pro"), price: "999", features: [t("price.pro.f1"), t("price.pro.f2"), t("price.pro.f3"), t("price.pro.f4"), t("price.pro.f5")], highlight: true },
    { name: t("price.enterprise"), price: t("price.custom"), features: [t("price.ent.f1"), t("price.ent.f2"), t("price.ent.f3"), t("price.ent.f4"), t("price.ent.f5")] },
  ];
  const boosts = lang === "ar" ? [
    { days: "3 أيام", price: "99" }, { days: "7 أيام", price: "199" }, { days: "14 يوم", price: "349" }, { days: "30 يوم", price: "599" },
  ] : [
    { days: "3 days", price: "99" }, { days: "7 days", price: "199" }, { days: "14 days", price: "349" }, { days: "30 days", price: "599" },
  ];
  const shopHeading = lang === "ar" ? "باقات اشتراك المحلات" : "Shop subscription plans";
  const boostHeading = lang === "ar" ? "حزم تعزيز البلاغات" : "Report boost packages";
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow={t("page.pricing.eyebrow")} title={t("page.pricing.title")} subtitle={t("page.pricing.subtitle")} />
      <section className="container mx-auto px-4 md:px-6 py-12">
        <h2 className="text-2xl font-extrabold mb-8 text-center">{shopHeading}</h2>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((p) => (
            <Card key={p.name} className={`p-7 relative ${p.highlight ? "border-gold bg-gradient-to-b from-gold/10 to-card shadow-gold" : "border-border bg-card"}`}>
              {p.highlight && <Badge className="absolute -top-3 start-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground border-0">{t("price.popular")}</Badge>}
              <h3 className="font-bold text-xl mb-2">{p.name}</h3>
              <div className="mb-6"><span className="text-4xl font-extrabold gold-text-gradient">{p.price}</span>{p.price !== t("price.custom") && <span className="text-muted-foreground text-sm ms-2">{t("price.currency")} / {t("price.month")}</span>}</div>
              <ul className="space-y-3 mb-7">
                {p.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" /><span>{f}</span></li>)}
              </ul>
              <Link to="/register"><Button className={`w-full ${p.highlight ? "bg-gradient-gold text-primary-foreground shadow-gold" : ""}`} variant={p.highlight ? "default" : "outline"}>{t("price.choose")}</Button></Link>
            </Card>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-6 py-12">
        <h2 className="text-2xl font-extrabold mb-8 text-center">{boostHeading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {boosts.map((b) => (
            <Card key={b.days} className="p-6 text-center bg-card border-border hover:border-gold/40 transition">
              <Sparkles className="h-7 w-7 text-gold mx-auto mb-3" />
              <div className="text-lg font-bold mb-1">{b.days}</div>
              <div className="text-2xl font-extrabold gold-text-gradient">{b.price} <span className="text-sm text-muted-foreground font-normal">{t("price.currency")}</span></div>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
