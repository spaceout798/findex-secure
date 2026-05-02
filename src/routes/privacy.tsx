import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({ component: Privacy });

function Privacy() {
  const { t, lang } = useI18n();
  const sections = lang === "ar" ? [
    { h: null, p: "خصوصيتك من أهم أولوياتنا. نشرح هنا كيف نجمع ونستخدم ونحمي بياناتك." },
    { h: "البيانات التي نجمعها", p: "الاسم، البريد، الهاتف، صور القطع، الفواتير، المستندات الداعمة، وبيانات التحقق من الهوية." },
    { h: "كيف نستخدمها", p: "لتقديم الخدمة، إرسال التنبيهات للمحلات الموثقة، التحقق من الملكية، ومنع الاحتيال." },
    { h: "من يطّلع على بياناتك", p: "المستندات الحساسة (الهوية، الفواتير، إثباتات الدفع) لا تظهر في البلاغات العامة. فقط فريق الإشراف المعتمد يطّلع عليها." },
    { h: "التشفير والأمان", p: "كل البيانات الحساسة مشفّرة أثناء النقل والتخزين." },
    { h: "حقوقك", p: "لك الحق في طلب نسخة من بياناتك أو حذفها بالتواصل مع support@findex.eg." },
  ] : [
    { h: null, p: "Your privacy is one of our top priorities. Here's how we collect, use, and protect your data." },
    { h: "Data we collect", p: "Name, email, phone, item photos, invoices, supporting documents, and identity verification data." },
    { h: "How we use it", p: "To deliver the service, alert verified shops, verify ownership, and prevent fraud." },
    { h: "Who sees your data", p: "Sensitive documents (ID, invoices, payment proofs) never appear in public reports. Only our approved moderation team can access them." },
    { h: "Encryption and security", p: "All sensitive data is encrypted in transit and at rest." },
    { h: "Your rights", p: "You have the right to request a copy of your data or delete it by contacting support@findex.eg." },
  ];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow={t("page.privacy.eyebrow")} title={t("page.privacy.title")} />
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
