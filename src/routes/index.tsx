import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield, Search, Bell, CheckCircle2, Sparkles, Award,
  Crown, Gem, Store, Users, TrendingUp, Lock, BadgeCheck, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";
import { DirArrow } from "@/components/dir-arrow";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Stats />
      <HowItWorks />
      <ForShops />
      <ForUsers />
      <ShopsPreview />
      <BoostedPreview />
      <Safety />
      <PricingPreview />
      <FAQ />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,oklch(0.78_0.13_85_/_0.15),transparent_50%)]" />
      <div className="container relative mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 border-gold/40 bg-gold/10 text-gold gap-2 py-1.5 px-4">
            <Sparkles className="h-3.5 w-3.5" />
            {t("hero.badge")}
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] mb-6">
            {t("hero.title.1")}
            <br />
            <span className="gold-text-gradient">{t("hero.title.2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold text-base px-8 h-12 gap-2">
                <Search className="h-5 w-5" />
                {t("hero.cta.report")}
              </Button>
            </Link>
            <Link to="/for-shops">
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-gold/40 hover:bg-gold/10 gap-2">
                <Store className="h-5 w-5" />
                {t("hero.cta.shop")}
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> {t("hero.trust.verified")}</div>
            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-gold" /> {t("hero.trust.encrypted")}</div>
            <div className="flex items-center gap-2"><Bell className="h-4 w-4 text-gold" /> {t("hero.trust.alerts")}</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> {t("hero.trust.certified")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useI18n();
  const stats = [
    { value: "2,400+", label: t("stats.shops") },
    { value: "18,000+", label: t("stats.reports") },
    { value: "27", label: t("stats.governorates") },
    { value: "92%", label: t("stats.recovery") },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="container mx-auto px-4 md:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold gold-text-gradient">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t } = useI18n();
  const steps = [
    { icon: Search, title: t("how.s1.title"), desc: t("how.s1.desc") },
    { icon: BadgeCheck, title: t("how.s2.title"), desc: t("how.s2.desc") },
    { icon: Bell, title: t("how.s3.title"), desc: t("how.s3.desc") },
    { icon: CheckCircle2, title: t("how.s4.title"), desc: t("how.s4.desc") },
  ];
  return (
    <section className="container mx-auto px-4 md:px-6 py-20" id="how">
      <SectionHeader eyebrow={t("how.eyebrow")} title={t("how.title")} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {steps.map((s, i) => (
          <Card key={s.title} className="p-6 bg-card border-border hover:border-gold/40 transition-all hover:shadow-elegant relative group">
            <div className="absolute top-4 ltr:left-4 rtl:right-4 text-5xl font-extrabold text-gold/10 group-hover:text-gold/20 transition">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-4">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ForShops() {
  const { t } = useI18n();
  const features = [t("fs.f1"), t("fs.f2"), t("fs.f3"), t("fs.f4"), t("fs.f5"), t("fs.f6")];
  return (
    <section className="bg-card/40 border-y border-border py-20">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="bg-gold/15 text-gold border-gold/30 mb-4">{t("fs.eyebrow")}</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
            {t("fs.title.1")} <span className="gold-text-gradient">{t("fs.title.2")}</span> {t("fs.title.3")}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{t("fs.subtitle")}</p>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <div className="mt-0.5 h-6 w-6 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                </div>
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
          <Link to="/for-shops">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold gap-2">
              {t("fs.cta")}
              <DirArrow className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="relative">
          <Card className="p-8 bg-gradient-to-br from-card to-secondary border-gold/20 shadow-elegant">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-xs text-muted-foreground mb-1">{t("fs.card.badge")}</div>
                <div className="text-2xl font-extrabold gold-text-gradient">{t("fs.card.shop")}</div>
              </div>
              <Crown className="h-10 w-10 text-gold" />
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[{ l: t("fs.card.reports"), v: "1,284" }, { l: t("fs.card.matches"), v: "47" }, { l: t("fs.card.rating"), v: "4.9★" }].map((x) => (
                <div key={x.l} className="rounded-lg bg-background/60 border border-border p-3 text-center">
                  <div className="text-lg font-bold text-gold">{x.v}</div>
                  <div className="text-[10px] text-muted-foreground">{x.l}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 rounded-lg bg-success/10 border border-success/30 p-3">
                <Bell className="h-4 w-4 text-success flex-shrink-0" />
                <div className="text-sm">{t("fs.card.alert")}</div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gold/10 border border-gold/30 p-3">
                <Gem className="h-4 w-4 text-gold flex-shrink-0" />
                <div className="text-sm">{t("fs.card.match")}</div>
              </div>
            </div>
          </Card>
          <div className="absolute -top-4 -start-4 h-24 w-24 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-4 -end-4 h-32 w-32 rounded-full bg-gold/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function ForUsers() {
  const { t } = useI18n();
  const items = [
    { icon: Shield, title: t("fu.f1.title"), desc: t("fu.f1.desc") },
    { icon: Search, title: t("fu.f2.title"), desc: t("fu.f2.desc") },
    { icon: TrendingUp, title: t("fu.f3.title"), desc: t("fu.f3.desc") },
    { icon: Sparkles, title: t("fu.f4.title"), desc: t("fu.f4.desc") },
  ];
  return (
    <section className="container mx-auto px-4 md:px-6 py-20">
      <SectionHeader eyebrow={t("fu.eyebrow")} title={t("fu.title")} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {items.map((s) => (
          <Card key={s.title} className="p-6 bg-card border-border hover:border-gold/40 transition-all hover:-translate-y-1">
            <s.icon className="h-8 w-8 text-gold mb-4" />
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ShopsPreview() {
  const { t, lang } = useI18n();
  const shops = lang === "ar" ? [
    { name: "مجوهرات الزمرّد", city: "القاهرة - مدينة نصر", rating: 4.9, badges: ["موثّق ذهبي", "+10 سنوات"] },
    { name: "ذهب الياقوت", city: "الإسكندرية - سموحة", rating: 4.8, badges: ["موثّق", "اعتماد متقدّم"] },
    { name: "مجوهرات اللؤلؤ", city: "الجيزة - الدقي", rating: 4.9, badges: ["موثّق ذهبي"] },
  ] : [
    { name: "Emerald Jewelry", city: "Cairo — Nasr City", rating: 4.9, badges: ["Gold Verified", "10+ years"] },
    { name: "Yaqoot Gold", city: "Alexandria — Smouha", rating: 4.8, badges: ["Verified", "Advanced Tier"] },
    { name: "Pearl Jewelry", city: "Giza — Dokki", rating: 4.9, badges: ["Gold Verified"] },
  ];
  return (
    <section className="bg-card/40 border-y border-border py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-sm text-gold font-semibold mb-2 uppercase tracking-widest">{t("sp.eyebrow")}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold">{t("sp.title")}</h2>
          </div>
          <Link to="/shops">
            <Button variant="outline" className="border-gold/40 hover:bg-gold/10 gap-2">{t("sp.viewAll")} <DirArrow className="h-4 w-4" /></Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {shops.map((s) => (
            <Card key={s.name} className="p-6 bg-card border-border hover:border-gold/40 transition group">
              <div className="flex items-start justify-between mb-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Crown className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-1 text-gold text-sm">
                  <Star className="h-4 w-4 fill-current" />
                  {s.rating}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.city}</p>
              <div className="flex flex-wrap gap-2">
                {s.badges.map((b) => (
                  <Badge key={b} variant="outline" className="border-gold/30 text-gold bg-gold/5 text-xs gap-1">
                    <BadgeCheck className="h-3 w-3" /> {b}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoostedPreview() {
  const { t, lang } = useI18n();
  const reports = lang === "ar" ? [
    { title: "غويشة ذهب عيار 21 مفقودة", loc: "القاهرة - مصر الجديدة", date: "اليوم", boosted: true },
    { title: "خاتم ألماس مسروق من فيلا", loc: "الجيزة - الشيخ زايد", date: "أمس", boosted: true },
    { title: "سلسلة ذهب بنقش خاص", loc: "الإسكندرية - ميامي", date: "منذ 3 أيام", boosted: false },
  ] : [
    { title: "21K gold bracelet lost", loc: "Cairo — Heliopolis", date: "Today", boosted: true },
    { title: "Diamond ring stolen from villa", loc: "Giza — Sheikh Zayed", date: "Yesterday", boosted: true },
    { title: "Gold chain with custom engraving", loc: "Alexandria — Miami", date: "3 days ago", boosted: false },
  ];
  return (
    <section className="container mx-auto px-4 md:px-6 py-20">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <div className="text-sm text-gold font-semibold mb-2 uppercase tracking-widest">{t("bp.eyebrow")}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold">{t("bp.title")}</h2>
        </div>
        <Link to="/reports">
          <Button variant="outline" className="border-gold/40 hover:bg-gold/10 gap-2">{t("bp.viewAll")} <DirArrow className="h-4 w-4" /></Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {reports.map((r) => (
          <Card key={r.title} className="overflow-hidden bg-card border-border hover:border-gold/40 transition group">
            <div className="aspect-[16/10] bg-gradient-to-br from-secondary to-card relative flex items-center justify-center">
              <Gem className="h-16 w-16 text-gold/30" />
              {r.boosted && (
                <Badge className="absolute top-3 end-3 bg-gradient-gold text-primary-foreground border-0 shadow-gold gap-1">
                  <Sparkles className="h-3 w-3" /> {t("bp.boosted")}
                </Badge>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold mb-2 group-hover:text-gold transition">{r.title}</h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{r.loc}</span>
                <span>{r.date}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Safety() {
  const { t } = useI18n();
  const items = [
    { icon: Lock, title: t("safety.s1.title"), desc: t("safety.s1.desc") },
    { icon: BadgeCheck, title: t("safety.s2.title"), desc: t("safety.s2.desc") },
    { icon: Shield, title: t("safety.s3.title"), desc: t("safety.s3.desc") },
    { icon: Users, title: t("safety.s4.title"), desc: t("safety.s4.desc") },
  ];
  return (
    <section className="bg-navy-deep py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader eyebrow={t("safety.eyebrow")} title={t("safety.title")} centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {items.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                <s.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  const { t } = useI18n();
  const plans = [
    { name: t("price.basic"), price: "499", features: [t("price.basic.f1"), t("price.basic.f2"), t("price.basic.f3")] },
    { name: t("price.pro"), price: "999", features: [t("price.pro.f1"), t("price.pro.f2"), t("price.pro.f3"), t("price.pro.f4")], highlight: true },
    { name: t("price.enterprise"), price: t("price.custom"), features: [t("price.ent.f1"), t("price.ent.f2"), t("price.ent.f3"), t("price.ent.f4")] },
  ];
  return (
    <section className="container mx-auto px-4 md:px-6 py-20">
      <SectionHeader eyebrow={t("price.eyebrow")} title={t("price.title")} centered />
      <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
        {plans.map((p) => (
          <Card key={p.name} className={`p-7 relative ${p.highlight ? "border-gold bg-gradient-to-b from-gold/10 to-card shadow-gold" : "border-border bg-card"}`}>
            {p.highlight && (
              <Badge className="absolute -top-3 start-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground border-0">{t("price.popular")}</Badge>
            )}
            <h3 className="font-bold text-xl mb-2">{p.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold gold-text-gradient">{p.price}</span>
              {p.price !== t("price.custom") && <span className="text-muted-foreground text-sm ms-2">{t("price.currency")} / {t("price.month")}</span>}
            </div>
            <ul className="space-y-3 mb-7">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/pricing">
              <Button className={`w-full ${p.highlight ? "bg-gradient-gold text-primary-foreground shadow-gold" : ""}`} variant={p.highlight ? "default" : "outline"}>
                {t("price.choose")}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useI18n();
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];
  return (
    <section className="bg-card/40 border-y border-border py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <SectionHeader eyebrow={t("faq.eyebrow")} title={t("faq.title")} centered />
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl bg-card px-5 data-[state=open]:border-gold/40">
              <AccordionTrigger className="text-start hover:no-underline font-bold py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useI18n();
  return (
    <section className="container mx-auto px-4 md:px-6 py-20">
      <Card className="p-10 md:p-16 text-center bg-gradient-to-br from-card via-secondary to-card border-gold/30 shadow-elegant relative overflow-hidden">
        <div className="absolute top-0 start-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative">
          <Crown className="h-12 w-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            {t("cta.title.1")} <span className="gold-text-gradient">{t("cta.title.2")}</span> {t("cta.title.3")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-12 px-8">{t("cta.user")}</Button>
            </Link>
            <Link to="/for-shops">
              <Button size="lg" variant="outline" className="border-gold/40 hover:bg-gold/10 h-12 px-8">{t("cta.shop")}</Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
}

function SectionHeader({ eyebrow, title, centered }: { eyebrow: string; title: string; centered?: boolean }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <div className="text-sm text-gold font-semibold mb-2 uppercase tracking-widest">{eyebrow}</div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">{title}</h2>
    </div>
  );
}
