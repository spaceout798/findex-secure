import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Shield, Users, Target, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [{ title: "عن فايندكس — شبكة الثقة للمجوهرات في مصر" }, { name: "description", content: "تعرّف على رسالة ورؤية فايندكس وكيف نبني شبكة ثقة لحماية واسترداد المجوهرات في مصر." }] }),
});

function About() {
  const values = [
    { icon: Shield, title: "الأمان أولاً", desc: "نحمي بياناتك وخصوصيتك بأعلى المعايير." },
    { icon: Users, title: "مجتمع الثقة", desc: "نبني جسراً بين أصحاب المجوهرات والمحلات الموثقة." },
    { icon: Target, title: "نتائج فعلية", desc: "نركّز على استرداد القطع الفعلية، لا مجرد توثيق البلاغات." },
    { icon: Heart, title: "خدمة مصر", desc: "منصة مصرية بالكامل، تفهم السوق والثقافة." },
  ];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow="عن فايندكس" title="نبني الثقة في سوق المجوهرات المصري" subtitle="فايندكس منصة مصرية متخصصة في ربط أصحاب المجوهرات بمحلات الذهب الموثقة لمحاربة السرقات وتسهيل الاسترداد." />
      <section className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <div className="prose prose-invert max-w-none mb-12 text-muted-foreground leading-loose text-lg">
          <p>تأسست فايندكس بهدف واحد: تقليل خسائر السرقات في سوق المجوهرات المصري عبر تكنولوجيا حديثة وشبكة ثقة بين الأطراف. نوفر للمستخدمين أدوات سهلة للإبلاغ عن المفقودات، وللمحلات شارة موثوق ولوحة تحكم احترافية.</p>
          <p>نحن لسنا جهة إنفاذ قانون. نحن جسر تكنولوجي محايد يساعد على نشر المعلومة بسرعة لمن يستطيع التعرف على القطع — محلات الذهب والمجوهرات الموثقة في كل المحافظات.</p>
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
