import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({ meta: [{ title: "الأسئلة الشائعة — فايندكس" }] }),
});

const FAQS = [
  { q: "هل فايندكس مجاني للمستخدمين؟", a: "نعم، إنشاء البلاغات مجاني تماماً. الرسوم تطبق فقط على تعزيز البلاغات وخدمات المساعدة الذكية الاختيارية." },
  { q: "كيف يتم التحقق من المحلات؟", a: "كل محل يقدّم رخصة مزاولة النشاط ومستندات تجارية، ويراجعها فريقنا قبل منح شارة الموثّق." },
  { q: "هل بياناتي وصوري آمنة؟", a: "نعم. كل المستندات الحساسة مشفّرة ولا تظهر في البلاغات العامة." },
  { q: "ماذا عن البلاغات الكاذبة؟", a: "نطلب توثيق هوية لكل ناشر بلاغ، وفريق الإشراف يتعامل بحزم مع البلاغات الكاذبة." },
  { q: "هل يمكنني استخدام فايندكس من خارج مصر؟", a: "حالياً المنصة موجّهة للسوق المصري فقط، ونخطط للتوسع مستقبلاً." },
  { q: "كم يستغرق اعتماد المحل؟", a: "عادةً من 24 إلى 72 ساعة عمل بعد استلام كل المستندات المطلوبة." },
  { q: "ما الفرق بين البلاغ العادي والمعزّز؟", a: "البلاغ المعزّز يظهر في أعلى قوائم البحث، يصل لجمهور أوسع جغرافياً، ويرسل تنبيهات إضافية." },
  { q: "هل تتعاملون مع الجهات الرسمية؟", a: "فايندكس منصة تكنولوجية محايدة للربط فقط ولا تتدخل في الإجراءات الرسمية." },
];

function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow="الأسئلة الشائعة" title="كل ما تريد معرفته" subtitle="إجابات على أهم الأسئلة عن المنصة." />
      <section className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl bg-card px-5 data-[state=open]:border-gold/40">
              <AccordionTrigger className="text-right hover:no-underline font-bold py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <SiteFooter />
    </div>
  );
}
