import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield, Search, Bell, CheckCircle2, Sparkles, Award, ArrowLeft,
  Crown, Gem, Store, Users, TrendingUp, Lock, BadgeCheck, Star, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Findex — استرجع ما يهمك. احمِ ما هو موثوق." },
      { name: "description", content: "فايندكس يربط أصحاب المجوهرات بمحلات الذهب الموثقة في مصر للإبلاغ عن المسروقات واستردادها بسرعة." },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Stats />
      <HowItWorks />
      <ForShops />
      <ForUsers />
      <ShopsPreview />
      <BoostedPreview />
      <Safety />
      <PricingPreview />
      <FAQ />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,oklch(0.78_0.13_85_/_0.15),transparent_50%)]" />
      <div className="container relative mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 border-gold/40 bg-gold/10 text-gold gap-2 py-1.5 px-4">
            <Sparkles className="h-3.5 w-3.5" />
            شبكة الثقة الأولى للمجوهرات في مصر
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] mb-6">
            استرجع ما يهمك.
            <br />
            <span className="gold-text-gradient">احمِ ما هو موثوق.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            فايندكس يربط أصحاب المجوهرات بمحلات الذهب الموثقة في جميع محافظات مصر للإبلاغ عن المفقودات والمسروقات واستردادها بشكل أسرع وأكثر أماناً.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold text-base px-8 h-12">
                <Search className="ms-2 h-5 w-5" />
                أبلغ عن مجوهرات مفقودة
              </Button>
            </Link>
            <Link to="/for-shops">
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-gold/40 hover:bg-gold/10">
                <Store className="ms-2 h-5 w-5" />
                انضم كمحل مجوهرات
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> محلات موثقة</div>
            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-gold" /> بيانات مشفّرة</div>
            <div className="flex items-center gap-2"><Bell className="h-4 w-4 text-gold" /> تنبيهات فورية</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> شهادات اعتماد</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "+2,400", label: "محل مجوهرات موثّق" },
    { value: "+18,000", label: "بلاغ نشط" },
    { value: "27", label: "محافظة مصرية" },
    { value: "92%", label: "نسبة الاسترداد" },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="container mx-auto px-4 md:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold gold-text-gradient">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Search, title: "أنشئ بلاغك", desc: "أضف تفاصيل القطعة، الصور، الفواتير، والأدلة الداعمة." },
    { icon: BadgeCheck, title: "تحقق من هويتك", desc: "نتحقق من هويتك لحماية كل أطراف المنصة." },
    { icon: Bell, title: "تنبيه المحلات الموثقة", desc: "تصل البلاغات لشبكة المحلات في منطقتك ومصر كلها." },
    { icon: CheckCircle2, title: "تأكيد الاسترداد", desc: "عند العثور، يتم التحقق من الملكية وربط الأطراف بأمان." },
  ];
  return (
    <section className="container mx-auto px-4 md:px-6 py-20" id="how">
      <SectionHeader eyebrow="كيف يعمل" title="أربع خطوات للحماية والاسترداد" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {steps.map((s, i) => (
          <Card key={s.title} className="p-6 bg-card border-border hover:border-gold/40 transition-all hover:shadow-elegant relative group">
            <div className="absolute top-4 left-4 text-5xl font-extrabold text-gold/10 group-hover:text-gold/20 transition">
              {String(i + 1).padStart(2, "0")}
            </div>
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
  );
}

function ForShops() {
  const features = [
    "شارة موثوق وشهادة اعتماد رسمية",
    "تنبيهات فورية بكل البلاغات في منطقتك",
    "ظهور في دليل المحلات الموثقة العام",
    "لوحة تحكم احترافية مع تحليلات وأدوات",
    "إمكانية الإبلاغ نيابة عن العملاء",
    "تنبيه عند رصد قطعة مشبوهة في معرضك",
  ];
  return (
    <section className="bg-card/40 border-y border-border py-20">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="bg-gold/15 text-gold border-gold/30 mb-4">لمحلات المجوهرات</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
            انضم لأكبر <span className="gold-text-gradient">شبكة ثقة</span> لمحلات الذهب في مصر
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            احمِ سمعتك التجارية، كن أول من يعلم بأي قطعة مسروقة، وأظهِر التزامك أمام عملائك بشارة موثوق الذهبية.
          </p>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <div className="mt-0.5 h-6 w-6 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                </div>
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
          <Link to="/for-shops">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold">
              ابدأ تسجيل محلك
              <ArrowLeft className="me-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="relative">
          <Card className="p-8 bg-gradient-to-br from-card to-secondary border-gold/20 shadow-elegant">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-xs text-muted-foreground mb-1">شارة موثوق</div>
                <div className="text-2xl font-extrabold gold-text-gradient">محل الزمرّد للمجوهرات</div>
              </div>
              <Crown className="h-10 w-10 text-gold" />
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[{ l: "بلاغات", v: "1,284" }, { l: "تطابقات", v: "47" }, { l: "تقييم", v: "4.9★" }].map((x) => (
                <div key={x.l} className="rounded-lg bg-background/60 border border-border p-3 text-center">
                  <div className="text-lg font-bold text-gold">{x.v}</div>
                  <div className="text-[10px] text-muted-foreground">{x.l}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 rounded-lg bg-success/10 border border-success/30 p-3">
                <Bell className="h-4 w-4 text-success" />
                <div className="text-sm">تنبيه جديد: قلادة ذهب — المعادي</div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gold/10 border border-gold/30 p-3">
                <Gem className="h-4 w-4 text-gold" />
                <div className="text-sm">تطابق محتمل: خاتم ألماس مفقود</div>
              </div>
            </div>
          </Card>
          <div className="absolute -top-4 -start-4 h-24 w-24 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-4 -end-4 h-32 w-32 rounded-full bg-gold/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function ForUsers() {
  const items = [
    { icon: Shield, title: "حماية مجوهراتك", desc: "سجّل قطعك الثمينة قبل أي حادث للوصول السريع عند الحاجة." },
    { icon: Search, title: "بلاغ سريع", desc: "أنشئ بلاغ فقد أو سرقة في دقائق مع كل التفاصيل والأدلة." },
    { icon: TrendingUp, title: "تعزيز البلاغ", desc: "ضاعف فرص الاسترداد بتعزيز بلاغك ووصوله لشبكة أوسع." },
    { icon: Sparkles, title: "مساعد ذكي", desc: "ذكاء اصطناعي يساعدك في تحسين الوصف وإعادة بناء الصور." },
  ];
  return (
    <section className="container mx-auto px-4 md:px-6 py-20">
      <SectionHeader eyebrow="للمستخدمين" title="كل ما تحتاجه لحماية واسترداد مجوهراتك" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {items.map((s) => (
          <Card key={s.title} className="p-6 bg-card border-border hover:border-gold/40 transition-all hover:-translate-y-1">
            <s.icon className="h-8 w-8 text-gold mb-4" />
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ShopsPreview() {
  const shops = [
    { name: "مجوهرات الزمرّد", city: "القاهرة - مدينة نصر", rating: 4.9, badges: ["موثّق ذهبي", "+10 سنوات"] },
    { name: "ذهب الياقوت", city: "الإسكندرية - سموحة", rating: 4.8, badges: ["موثّق", "اعتماد متقدّم"] },
    { name: "مجوهرات اللؤلؤ", city: "الجيزة - الدقي", rating: 4.9, badges: ["موثّق ذهبي"] },
  ];
  return (
    <section className="bg-card/40 border-y border-border py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-sm text-gold font-semibold mb-2">دليل المحلات الموثقة</div>
            <h2 className="text-3xl md:text-4xl font-extrabold">محلات تثق بها فايندكس</h2>
          </div>
          <Link to="/shops">
            <Button variant="outline" className="border-gold/40 hover:bg-gold/10">عرض الكل <ArrowLeft className="me-2 h-4 w-4" /></Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {shops.map((s) => (
            <Card key={s.name} className="p-6 bg-card border-border hover:border-gold/40 transition group">
              <div className="flex items-start justify-between mb-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Crown className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-1 text-gold text-sm">
                  <Star className="h-4 w-4 fill-current" />
                  {s.rating}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.city}</p>
              <div className="flex flex-wrap gap-2">
                {s.badges.map((b) => (
                  <Badge key={b} variant="outline" className="border-gold/30 text-gold bg-gold/5 text-xs">
                    <BadgeCheck className="h-3 w-3 ms-1" /> {b}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoostedPreview() {
  const reports = [
    { title: "غويشة ذهب عيار 21 مفقودة", loc: "القاهرة - مصر الجديدة", date: "اليوم", boosted: true },
    { title: "خاتم ألماس مسروق من فيلا", loc: "الجيزة - الشيخ زايد", date: "أمس", boosted: true },
    { title: "سلسلة ذهب بنقش خاص", loc: "الإسكندرية - ميامي", date: "منذ 3 أيام", boosted: false },
  ];
  return (
    <section className="container mx-auto px-4 md:px-6 py-20">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <div className="text-sm text-gold font-semibold mb-2">بلاغات معزّزة</div>
          <h2 className="text-3xl md:text-4xl font-extrabold">بلاغات تحتاج لانتباهك</h2>
        </div>
        <Link to="/reports">
          <Button variant="outline" className="border-gold/40 hover:bg-gold/10">تصفح كل البلاغات <ArrowLeft className="me-2 h-4 w-4" /></Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {reports.map((r) => (
          <Card key={r.title} className="overflow-hidden bg-card border-border hover:border-gold/40 transition group">
            <div className="aspect-[16/10] bg-gradient-to-br from-secondary to-card relative flex items-center justify-center">
              <Gem className="h-16 w-16 text-gold/30" />
              {r.boosted && (
                <Badge className="absolute top-3 end-3 bg-gradient-gold text-primary-foreground border-0 shadow-gold">
                  <Sparkles className="h-3 w-3 ms-1" /> معزّز
                </Badge>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold mb-2 group-hover:text-gold transition">{r.title}</h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{r.loc}</span>
                <span>{r.date}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Safety() {
  const items = [
    { icon: Lock, title: "تشفير كامل", desc: "كل المستندات الحساسة مشفّرة وغير عامة." },
    { icon: BadgeCheck, title: "تحقق هوية", desc: "تحقق من هوية المستخدمين والمحلات قبل النشر." },
    { icon: Shield, title: "إشراف بشري", desc: "فريق إشراف يراجع البلاغات والمطالبات." },
    { icon: Users, title: "ربط آمن", desc: "نربط الأطراف بأمان دون مناولة فعلية." },
  ];
  return (
    <section className="bg-navy-deep py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader eyebrow="الأمان والتحقق" title="منصة بُنيت على الثقة" centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {items.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                <s.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  const plans = [
    { name: "أساسي", price: "499", period: "شهرياً", features: ["شارة موثّق", "تنبيهات منطقتك", "حتى 50 بلاغ شهرياً"] },
    { name: "احترافي", price: "999", period: "شهرياً", features: ["كل مزايا الأساسي", "تنبيهات على مستوى الجمهورية", "تحليلات متقدّمة", "بلاغات غير محدودة"], highlight: true },
    { name: "مؤسسات", price: "حسب الطلب", period: "", features: ["دعم مخصص", "API خاص", "حسابات فرعية", "إدارة فروع"] },
  ];
  return (
    <section className="container mx-auto px-4 md:px-6 py-20">
      <SectionHeader eyebrow="الأسعار" title="باقات اشتراك تناسب كل محل" centered />
      <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-5xl mx-auto">
        {plans.map((p) => (
          <Card key={p.name} className={`p-7 relative ${p.highlight ? "border-gold bg-gradient-to-b from-gold/10 to-card shadow-gold" : "border-border bg-card"}`}>
            {p.highlight && (
              <Badge className="absolute -top-3 start-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground border-0">الأكثر شيوعاً</Badge>
            )}
            <h3 className="font-bold text-xl mb-2">{p.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold gold-text-gradient">{p.price}</span>
              {p.period && <span className="text-muted-foreground text-sm me-1"> ج.م / {p.period}</span>}
            </div>
            <ul className="space-y-3 mb-7">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/pricing">
              <Button className={`w-full ${p.highlight ? "bg-gradient-gold text-primary-foreground shadow-gold" : ""}`} variant={p.highlight ? "default" : "outline"}>
                اختر الباقة
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "هل فايندكس مجاني للمستخدمين؟", a: "نعم، إنشاء البلاغات الأساسية مجاني تماماً للمستخدمين. الرسوم تطبق على تعزيز البلاغات أو خدمات المساعدة الذكية الاختيارية." },
    { q: "كيف يتم التحقق من المحلات؟", a: "كل محل يقدّم رخصة مزاولة النشاط ومستندات تجارية، ويراجعها فريقنا قبل منح شارة الموثّق وإصدار شهادة الاعتماد." },
    { q: "هل بياناتي وصوري آمنة؟", a: "نعم. كل المستندات الحساسة مثل الفواتير وبطاقات الهوية مخزّنة بشكل خاص ومشفّر، ولا تظهر في البلاغات العامة." },
    { q: "ماذا يحدث عند العثور على قطعتي؟", a: "يتم التحقق من الملكية عبر الأدلة المقدّمة، ثم نربط الأطراف بشكل آمن. فايندكس لا يتولى التسليم الفعلي للقطعة." },
    { q: "هل يمكنني الإبلاغ عن قطعة مشبوهة كمحل؟", a: "نعم، المحلات الموثقة يمكنها إنشاء بلاغات قطع مشبوهة تظهر فقط للمحلات والمشرفين والإدارة." },
  ];
  return (
    <section className="bg-card/40 border-y border-border py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <SectionHeader eyebrow="الأسئلة الشائعة" title="أجوبة سريعة على أهم تساؤلاتك" centered />
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl bg-card px-5 data-[state=open]:border-gold/40">
              <AccordionTrigger className="text-right hover:no-underline font-bold py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-20">
      <Card className="p-10 md:p-16 text-center bg-gradient-to-br from-card via-secondary to-card border-gold/30 shadow-elegant relative overflow-hidden">
        <div className="absolute top-0 start-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative">
          <Crown className="h-12 w-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            انضم إلى <span className="gold-text-gradient">شبكة الثقة</span> اليوم
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            ابدأ خلال دقائق. سواء كنت صاحب مجوهرات تريد حمايتها أو محلاً يبحث عن سمعة أقوى.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-12 px-8">إنشاء حساب مجاني</Button>
            </Link>
            <Link to="/for-shops">
              <Button size="lg" variant="outline" className="border-gold/40 hover:bg-gold/10 h-12 px-8">انضم كمحل</Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
}

function SectionHeader({ eyebrow, title, centered }: { eyebrow: string; title: string; centered?: boolean }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <div className="text-sm text-gold font-semibold mb-2">{eyebrow}</div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">{title}</h2>
    </div>
  );
}
