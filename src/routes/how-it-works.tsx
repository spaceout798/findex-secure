import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { FilePlus, BadgeCheck, Bell, Search, Handshake, Shield } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/how-it-works")({ component: HowItWorks });

function HowItWorks() {
  const { t, lang } = useI18n();
  const steps = lang === "ar" ? [
    { icon: FilePlus, title: "أنشئ بلاغك", desc: "أضف نوع البلاغ (فقد/سرقة/عثور)، وصف القطعة، الفئة، الوزن، الصور، والأدلة." },
    { icon: BadgeCheck, title: "تحقق هويتك", desc: "نطلب توثيق هوية بسيط لمنع البلاغات الكاذبة وحماية كل الأطراف." },
    { icon: Bell, title: "وصول للمحلات الموثقة", desc: "تنبيه فوري لكل محلات المجوهرات النشطة في منطقتك أو على مستوى مصر." },
    { icon: Search, title: "رصد التطابق", desc: "المحلات يمكنها وضع علامة تطابق محتمل عند رؤية قطعة مشابهة." },
    { icon: Shield, title: "مراجعة وتحقق", desc: "فريق الإشراف يراجع الأدلة ويتحقق من الملكية." },
    { icon: Handshake, title: "ربط آمن", desc: "عند التحقق، نربط الأطراف بأمان. فايندكس لا يتولى تسليم القطعة فعلياً." },
  ] : [
    { icon: FilePlus, title: "Create your report", desc: "Add the report type (lost/stolen/found), item description, category, weight, photos, and evidence." },
    { icon: BadgeCheck, title: "Verify your identity", desc: "We require simple identity verification to prevent false reports and protect all parties." },
    { icon: Bell, title: "Reach verified shops", desc: "Instant alerts to active jewelry shops in your area or across Egypt." },
    { icon: Search, title: "Match detection", desc: "Shops can flag a possible match when they see a similar item." },
    { icon: Shield, title: "Review & verify", desc: "Our moderation team reviews evidence and verifies ownership." },
    { icon: Handshake, title: "Safe connection", desc: "Once verified, we connect parties safely. Findex does not handle physical delivery." },
  ];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow={t("page.how.eyebrow")} title={t("page.how.title")} subtitle={t("page.how.subtitle")} />
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <Card key={s.title} className="p-7 bg-card border-border hover:border-gold/40 relative group">
              <div className="absolute top-4 ltr:left-4 rtl:right-4 text-6xl font-extrabold text-gold/10 group-hover:text-gold/20 transition">{String(i + 1).padStart(2, "0")}</div>
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
      <SiteFooter />
    </div>
  );
}
