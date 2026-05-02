import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Gem, Search, Sparkles, Filter } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/reports")({ component: Reports });

const REPORTS_EN = [
  { title: "21K gold bracelet lost", type: "Lost", loc: "Cairo — Heliopolis", date: "Today", boosted: true },
  { title: "Diamond ring stolen", type: "Stolen", loc: "Giza — Sheikh Zayed", date: "Yesterday", boosted: true },
  { title: "Gold chain with custom engraving — lost", type: "Lost", loc: "Alexandria — Miami", date: "2 days ago", boosted: false },
  { title: "White gold earrings with emerald", type: "Stolen", loc: "Cairo — Maadi", date: "3 days ago", boosted: false },
  { title: "Luxury watch found", type: "Found", loc: "Alexandria", date: "4 days ago", boosted: false },
  { title: "Gold ring with gemstones", type: "Lost", loc: "Tanta", date: "1 week ago", boosted: true },
];
const REPORTS_AR = [
  { title: "غويشة ذهب عيار 21 مفقودة", type: "مفقود", loc: "القاهرة - مصر الجديدة", date: "اليوم", boosted: true },
  { title: "خاتم ألماس مسروق", type: "مسروق", loc: "الجيزة - الشيخ زايد", date: "أمس", boosted: true },
  { title: "سلسلة ذهب بنقش خاص مفقودة", type: "مفقود", loc: "الإسكندرية - ميامي", date: "منذ يومين", boosted: false },
  { title: "حلق ذهب أبيض مع زمرّد", type: "مسروق", loc: "القاهرة - المعادي", date: "منذ 3 أيام", boosted: false },
  { title: "ساعة فاخرة عُثر عليها", type: "تم العثور", loc: "الإسكندرية", date: "منذ 4 أيام", boosted: false },
  { title: "محبس ذهب بأحجار كريمة", type: "مفقود", loc: "طنطا", date: "منذ أسبوع", boosted: true },
];

function typeColor(t: string) {
  if (t === "مسروق" || t === "Stolen") return "bg-destructive/15 text-destructive border-destructive/30";
  if (t === "تم العثور" || t === "Found") return "bg-success/15 text-success border-success/30";
  return "bg-gold/15 text-gold border-gold/30";
}

function Reports() {
  const { t, lang } = useI18n();
  const REPORTS = lang === "ar" ? REPORTS_AR : REPORTS_EN;
  const placeholder = lang === "ar" ? "ابحث بنوع القطعة، المدينة، أو وصف..." : "Search by item type, city, or description...";
  const boostedLabel = lang === "ar" ? "معزّز" : "Boosted";
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow={t("page.reports.eyebrow")} title={t("page.reports.title")} subtitle={t("page.reports.subtitle")} />
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row gap-3 mb-10 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder={placeholder} className="ltr:pl-10 rtl:pr-10 bg-card border-border h-12" />
          </div>
          <Button size="lg" variant="outline" className="border-gold/40 hover:bg-gold/10 gap-2"><Filter className="h-4 w-4" /> {t("common.filter")}</Button>
          <Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold">{t("common.search")}</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REPORTS.map((r) => (
            <Card key={r.title} className="overflow-hidden bg-card border-border hover:border-gold/40 transition group">
              <div className="aspect-[16/10] bg-gradient-to-br from-secondary to-card relative flex items-center justify-center">
                <Gem className="h-16 w-16 text-gold/30" />
                {r.boosted && (
                  <Badge className="absolute top-3 end-3 bg-gradient-gold text-primary-foreground border-0 shadow-gold gap-1">
                    <Sparkles className="h-3 w-3" /> {boostedLabel}
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
