import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({ meta: [{ title: "الأسعار — فايندكس" }, { name: "description", content: "باقات اشتراك المحلات وحزم تعزيز البلاغات." }] }),
});

function Pricing() {
  const plans = [
    { name: "أساسي", price: "499", features: ["شارة موثّق", "تنبيهات منطقتك", "حتى 50 بلاغ شهرياً", "صفحة محل عامة"] },
    { name: "احترافي", price: "999", features: ["كل مزايا الأساسي", "تنبيهات على مستوى الجمهورية", "تحليلات متقدّمة", "بلاغات غير محدودة", "أولوية الدعم"], highlight: true },
    { name: "مؤسسات", price: "حسب الطلب", features: ["دعم مخصص", "API خاص", "حسابات فرعية", "إدارة فروع", "مدير حساب"] },
  ];
  const boosts = [
    { days: "3 أيام", price: "99" },
    { days: "7 أيام", price: "199" },
    { days: "14 يوم", price: "349" },
    { days: "30 يوم", price: "599" },
  ];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow="الأسعار" title="أسعار شفافة للجميع" subtitle="باقات اشتراك للمحلات + حزم تعزيز للبلاغات. ادفع مقابل ما تستخدمه فقط." />
      <section className="container mx-auto px-4 md:px-6 py-12">
        <h2 className="text-2xl font-extrabold mb-8 text-center">باقات اشتراك المحلات</h2>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((p) => (
            <Card key={p.name} className={`p-7 relative ${p.highlight ? "border-gold bg-gradient-to-b from-gold/10 to-card shadow-gold" : "border-border bg-card"}`}>
              {p.highlight && <Badge className="absolute -top-3 start-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground border-0">الأكثر شيوعاً</Badge>}
              <h3 className="font-bold text-xl mb-2">{p.name}</h3>
              <div className="mb-6"><span className="text-4xl font-extrabold gold-text-gradient">{p.price}</span><span className="text-muted-foreground text-sm me-1"> ج.م / شهرياً</span></div>
              <ul className="space-y-3 mb-7">
                {p.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" /><span>{f}</span></li>)}
              </ul>
              <Link to="/register"><Button className={`w-full ${p.highlight ? "bg-gradient-gold text-primary-foreground shadow-gold" : ""}`} variant={p.highlight ? "default" : "outline"}>اختر الباقة</Button></Link>
            </Card>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-6 py-12">
        <h2 className="text-2xl font-extrabold mb-8 text-center">حزم تعزيز البلاغات</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {boosts.map((b) => (
            <Card key={b.days} className="p-6 text-center bg-card border-border hover:border-gold/40 transition">
              <Sparkles className="h-7 w-7 text-gold mx-auto mb-3" />
              <div className="text-lg font-bold mb-1">{b.days}</div>
              <div className="text-2xl font-extrabold gold-text-gradient">{b.price} <span className="text-sm text-muted-foreground font-normal">ج.م</span></div>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
