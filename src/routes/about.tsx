import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Shield, Users, Target, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  const { t, lang } = useI18n();
  const values = lang === "ar" ? [
    { icon: Shield, title: "الأمان أولاً", desc: "نحمي بياناتك وخصوصيتك بأعلى المعايير." },
    { icon: Users, title: "مجتمع الثقة", desc: "نبني جسراً بين أصحاب المجوهرات والمحلات الموثقة." },
    { icon: Target, title: "نتائج فعلية", desc: "نركّز على استرداد القطع الفعلية، لا مجرد توثيق البلاغات." },
    { icon: Heart, title: "خدمة مصر", desc: "منصة مصرية بالكامل، تفهم السوق والثقافة." },
  ] : [
    { icon: Shield, title: "Safety first", desc: "We protect your data and privacy with the highest standards." },
    { icon: Users, title: "Trust community", desc: "We build a bridge between jewelry owners and verified shops." },
    { icon: Target, title: "Real results", desc: "We focus on actual recovery, not just documenting reports." },
    { icon: Heart, title: "Built for Egypt", desc: "A fully Egyptian platform that understands the market and culture." },
  ];
  const story = lang === "ar"
    ? ["تأسست فايندكس بهدف واحد: تقليل خسائر السرقات في سوق المجوهرات المصري عبر تكنولوجيا حديثة وشبكة ثقة بين الأطراف. نوفر للمستخدمين أدوات سهلة للإبلاغ عن المفقودات، وللمحلات شارة موثوق ولوحة تحكم احترافية.", "نحن لسنا جهة إنفاذ قانون. نحن جسر تكنولوجي محايد يساعد على نشر المعلومة بسرعة لمن يستطيع التعرف على القطع — محلات الذهب والمجوهرات الموثقة في كل المحافظات."]
    : ["Findex was founded with one goal: reduce theft losses in Egypt's jewelry market through modern technology and a trust network between parties. We give users easy tools to report lost items, and shops a verified badge and professional dashboard.", "We are not a law-enforcement body. We are a neutral technology bridge that helps information reach the people who can recognize items quickly — verified gold and jewelry shops across all governorates."];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow={t("page.about.eyebrow")} title={t("page.about.title")} subtitle={t("page.about.subtitle")} />
      <section className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <div className="space-y-5 mb-12 text-muted-foreground leading-loose text-lg">
          {story.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {values.map((v) => (
            <Card key={v.title} className="p-6 bg-card border-border hover:border-gold/40 transition">
              <v.icon className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
