import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Gem, Search, Sparkles, Filter } from "lucide-react";

export const Route = createFileRoute("/reports")({
  component: Reports,
  head: () => ({ meta: [{ title: "تصفح البلاغات — فايندكس" }, { name: "description", content: "تصفح بلاغات المجوهرات المفقودة والمسروقة المنشورة." }] }),
});

const REPORTS = [
  { title: "غويشة ذهب عيار 21 مفقودة", type: "مفقود", loc: "القاهرة - مصر الجديدة", date: "اليوم", boosted: true },
  { title: "خاتم ألماس مسروق", type: "مسروق", loc: "الجيزة - الشيخ زايد", date: "أمس", boosted: true },
  { title: "سلسلة ذهب بنقش خاص مفقودة", type: "مفقود", loc: "الإسكندرية - ميامي", date: "منذ يومين", boosted: false },
  { title: "حلق ذهب أبيض مع زمرّد", type: "مسروق", loc: "القاهرة - المعادي", date: "منذ 3 أيام", boosted: false },
  { title: "ساعة فاخرة عُثر عليها", type: "تم العثور", loc: "الإسكندرية", date: "منذ 4 أيام", boosted: false },
  { title: "محبس ذهب بأحجار كريمة", type: "مفقود", loc: "طنطا", date: "منذ أسبوع", boosted: true },
];

function typeColor(t: string) {
  if (t === "مسروق") return "bg-destructive/15 text-destructive border-destructive/30";
  if (t === "تم العثور") return "bg-success/15 text-success border-success/30";
  return "bg-gold/15 text-gold border-gold/30";
}

function Reports() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow="تصفح البلاغات" title="بلاغات المجوهرات النشطة" subtitle="ابحث وصفّ البلاغات المنشورة. ساعد في استرداد قطعة." />
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row gap-3 mb-10 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 -translate-y-1/2 end-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="ابحث بنوع القطعة، المدينة، أو وصف..." className="ps-3 pe-10 bg-card border-border h-12" />
          </div>
          <Button size="lg" variant="outline" className="border-gold/40 hover:bg-gold/10"><Filter className="ms-2 h-4 w-4" /> فلترة</Button>
          <Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold">بحث</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REPORTS.map((r) => (
            <Card key={r.title} className="overflow-hidden bg-card border-border hover:border-gold/40 transition group">
              <div className="aspect-[16/10] bg-gradient-to-br from-secondary to-card relative flex items-center justify-center">
                <Gem className="h-16 w-16 text-gold/30" />
                {r.boosted && (
                  <Badge className="absolute top-3 end-3 bg-gradient-gold text-primary-foreground border-0 shadow-gold">
                    <Sparkles className="h-3 w-3 ms-1" /> معزّز
                  </Badge>
                )}
                <Badge className={`absolute top-3 start-3 border ${typeColor(r.type)}`}>{r.type}</Badge>
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
      <SiteFooter />
    </div>
  );
}
