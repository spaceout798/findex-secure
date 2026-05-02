import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/terms")({ component: Terms });

function Terms() {
  const { t, lang } = useI18n();
  const sections = lang === "ar" ? [
    { h: null, p: "باستخدامك لمنصة فايندكس فإنك توافق على هذه الشروط. فايندكس منصة تكنولوجية محايدة للربط بين أصحاب المجوهرات ومحلات الذهب الموثقة، ولا تتحمل مسؤولية أي تعاملات تتم خارجها." },
    { h: "استخدام المنصة", p: "يلتزم المستخدم بصدق المعلومات المقدّمة. أي بلاغات كاذبة قد تؤدي لإيقاف الحساب وملاحقة قانونية." },
    { h: "حسابات المحلات", p: "تخضع لمراجعة المستندات. الاشتراك مدفوع ومتجدد، ويتم إلغاء الشارة عند انتهاء الاشتراك." },
    { h: "المدفوعات والاسترداد", p: "المدفوعات غير قابلة للاسترداد إلا في حالات محددة يحكمها فريق الدعم المالي." },
    { h: "حدود المسؤولية", p: "فايندكس لا يتولى تسليم القطع أو إثبات الملكية القانونية. دورنا تكنولوجي بحت." },
  ] : [
    { h: null, p: "By using Findex you agree to these terms. Findex is a neutral technology platform connecting jewelry owners with verified gold shops, and is not liable for any transactions occurring outside of it." },
    { h: "Platform use", p: "Users must provide truthful information. Any false reports may lead to account suspension and legal action." },
    { h: "Shop accounts", p: "Subject to document review. Subscriptions are paid and recurring; the badge is revoked when the subscription ends." },
    { h: "Payments and refunds", p: "Payments are non-refundable except in specific cases governed by our finance support team." },
    { h: "Limits of liability", p: "Findex does not handle item delivery or legal ownership proof. Our role is purely technological." },
  ];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow={t("page.terms.eyebrow")} title={t("page.terms.title")} />
      <section className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
        <div className="text-muted-foreground leading-loose space-y-6">
          {sections.map((s, i) => (
            <div key={i}>
              {s.h && <h3 className="text-foreground font-bold text-xl mb-2">{s.h}</h3>}
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
