import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({ meta: [{ title: "سياسة الخصوصية — فايندكس" }] }),
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow="سياسة الخصوصية" title="كيف نحمي بياناتك" />
      <section className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
        <div className="prose prose-invert max-w-none text-muted-foreground leading-loose space-y-6">
          <p>خصوصيتك من أهم أولوياتنا. نشرح هنا كيف نجمع ونستخدم ونحمي بياناتك.</p>
          <h3 className="text-foreground font-bold text-xl">البيانات التي نجمعها</h3>
          <p>الاسم، البريد، الهاتف، صور القطع، الفواتير، المستندات الداعمة، وبيانات التحقق من الهوية.</p>
          <h3 className="text-foreground font-bold text-xl">كيف نستخدمها</h3>
          <p>لتقديم الخدمة، إرسال التنبيهات للمحلات الموثقة، التحقق من الملكية، ومنع الاحتيال.</p>
          <h3 className="text-foreground font-bold text-xl">من يطّلع على بياناتك</h3>
          <p>المستندات الحساسة (الهوية، الفواتير، إثباتات الدفع) لا تظهر في البلاغات العامة. فقط فريق الإشراف المعتمد يطّلع عليها.</p>
          <h3 className="text-foreground font-bold text-xl">التشفير والأمان</h3>
          <p>كل البيانات الحساسة مشفّرة أثناء النقل والتخزين.</p>
          <h3 className="text-foreground font-bold text-xl">حقوقك</h3>
          <p>لك الحق في طلب نسخة من بياناتك أو حذفها بالتواصل مع support@findex.eg.</p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
