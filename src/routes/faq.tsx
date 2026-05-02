import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({ component: FAQPage });

function FAQPage() {
  const { t, lang } = useI18n();
  const FAQS = lang === "ar" ? [
    { q: "هل فايندكس مجاني للمستخدمين؟", a: "نعم، إنشاء البلاغات مجاني تماماً. الرسوم تطبق فقط على تعزيز البلاغات وخدمات المساعدة الذكية الاختيارية." },
    { q: "كيف يتم التحقق من المحلات؟", a: "كل محل يقدّم رخصة مزاولة النشاط ومستندات تجارية، ويراجعها فريقنا قبل منح شارة الموثّق." },
    { q: "هل بياناتي وصوري آمنة؟", a: "نعم. كل المستندات الحساسة مشفّرة ولا تظهر في البلاغات العامة." },
    { q: "ماذا عن البلاغات الكاذبة؟", a: "نطلب توثيق هوية لكل ناشر بلاغ، وفريق الإشراف يتعامل بحزم مع البلاغات الكاذبة." },
    { q: "هل يمكنني استخدام فايندكس من خارج مصر؟", a: "حالياً المنصة موجّهة للسوق المصري فقط، ونخطط للتوسع مستقبلاً." },
    { q: "كم يستغرق اعتماد المحل؟", a: "عادةً من 24 إلى 72 ساعة عمل بعد استلام كل المستندات المطلوبة." },
    { q: "ما الفرق بين البلاغ العادي والمعزّز؟", a: "البلاغ المعزّز يظهر في أعلى قوائم البحث، يصل لجمهور أوسع جغرافياً، ويرسل تنبيهات إضافية." },
    { q: "هل تتعاملون مع الجهات الرسمية؟", a: "فايندكس منصة تكنولوجية محايدة للربط فقط ولا تتدخل في الإجراءات الرسمية." },
  ] : [
    { q: "Is Findex free for users?", a: "Yes, basic reporting is completely free. Fees only apply to optional report boosts and AI assistance services." },
    { q: "How are shops verified?", a: "Each shop submits their business license and commercial documents, reviewed by our team before granting the verified badge." },
    { q: "Are my data and photos safe?", a: "Yes. All sensitive documents are encrypted and never appear in public reports." },
    { q: "What about false reports?", a: "We require identity verification for every report publisher, and our moderation team handles false reports decisively." },
    { q: "Can I use Findex outside Egypt?", a: "Currently the platform is focused on the Egyptian market. We plan to expand in the future." },
    { q: "How long does shop verification take?", a: "Usually 24–72 business hours after receiving all required documents." },
    { q: "What's the difference between a regular and boosted report?", a: "Boosted reports appear at the top of search results, reach a wider geographic audience, and send additional alerts." },
    { q: "Do you work with official authorities?", a: "Findex is a neutral technology platform for connection only and does not interfere in official procedures." },
  ];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow={t("page.faq.eyebrow")} title={t("page.faq.title")} />
      <section className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl bg-card px-5 data-[state=open]:border-gold/40">
              <AccordionTrigger className="text-start hover:no-underline font-bold py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <SiteFooter />
    </div>
  );
}
