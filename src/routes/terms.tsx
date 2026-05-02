import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({ meta: [{ title: "الشروط والأحكام — فايندكس" }] }),
});

function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow="الشروط والأحكام" title="شروط استخدام منصة فايندكس" />
      <section className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
        <div className="prose prose-invert max-w-none text-muted-foreground leading-loose space-y-6">
          <p>باستخدامك لمنصة فايندكس فإنك توافق على هذه الشروط. فايندكس منصة تكنولوجية محايدة للربط بين أصحاب المجوهرات ومحلات الذهب الموثقة، ولا تتحمل مسؤولية أي تعاملات تتم خارجها.</p>
          <h3 className="text-foreground font-bold text-xl">استخدام المنصة</h3>
          <p>يلتزم المستخدم بصدق المعلومات المقدّمة. أي بلاغات كاذبة قد تؤدي لإيقاف الحساب وملاحقة قانونية.</p>
          <h3 className="text-foreground font-bold text-xl">حسابات المحلات</h3>
          <p>تخضع لمراجعة المستندات. الاشتراك مدفوع ومتجدد، ويتم إلغاء الشارة عند انتهاء الاشتراك.</p>
          <h3 className="text-foreground font-bold text-xl">المدفوعات والاسترداد</h3>
          <p>المدفوعات غير قابلة للاسترداد إلا في حالات محددة يحكمها فريق الدعم المالي.</p>
          <h3 className="text-foreground font-bold text-xl">حدود المسؤولية</h3>
          <p>فايندكس لا يتولى تسليم القطع أو إثبات الملكية القانونية. دورنا تكنولوجي بحت.</p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
