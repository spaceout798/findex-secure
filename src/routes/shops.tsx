import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Crown, Star, BadgeCheck, Search, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/shops")({ component: Shops });

const SHOPS_EN = [
  { name: "Emerald Jewelry", city: "Cairo — Nasr City", rating: 4.9, years: 15, tier: "Gold" },
  { name: "Yaqoot Gold", city: "Alexandria — Smouha", rating: 4.8, years: 12, tier: "Gold" },
  { name: "Pearl Jewelry", city: "Giza — Dokki", rating: 4.9, years: 20, tier: "Gold" },
  { name: "Turquoise Gold", city: "Cairo — Heliopolis", rating: 4.7, years: 8, tier: "Verified" },
  { name: "Nile Jewelry", city: "Mansoura", rating: 4.8, years: 10, tier: "Verified" },
  { name: "Kinana Gold", city: "Assiut", rating: 4.6, years: 7, tier: "Verified" },
  { name: "Dawn Jewelry", city: "Tanta", rating: 4.8, years: 14, tier: "Gold" },
  { name: "Amana Gold", city: "Zagazig", rating: 4.7, years: 9, tier: "Verified" },
  { name: "Safa Jewelry", city: "Ismailia", rating: 4.9, years: 18, tier: "Gold" },
];
const SHOPS_AR = [
  { name: "مجوهرات الزمرّد", city: "القاهرة - مدينة نصر", rating: 4.9, years: 15, tier: "ذهبي" },
  { name: "ذهب الياقوت", city: "الإسكندرية - سموحة", rating: 4.8, years: 12, tier: "ذهبي" },
  { name: "مجوهرات اللؤلؤ", city: "الجيزة - الدقي", rating: 4.9, years: 20, tier: "ذهبي" },
  { name: "ذهب الفيروز", city: "القاهرة - مصر الجديدة", rating: 4.7, years: 8, tier: "موثّق" },
  { name: "مجوهرات النيل", city: "المنصورة", rating: 4.8, years: 10, tier: "موثّق" },
  { name: "ذهب الكنانة", city: "أسيوط", rating: 4.6, years: 7, tier: "موثّق" },
  { name: "مجوهرات الفجر", city: "طنطا", rating: 4.8, years: 14, tier: "ذهبي" },
  { name: "ذهب الأمانة", city: "الزقازيق", rating: 4.7, years: 9, tier: "موثّق" },
  { name: "مجوهرات الصفا", city: "الإسماعيلية", rating: 4.9, years: 18, tier: "ذهبي" },
];

function Shops() {
  const { t, lang } = useI18n();
  const SHOPS = lang === "ar" ? SHOPS_AR : SHOPS_EN;
  const verifiedLabel = lang === "ar" ? "موثّق" : "Verified";
  const yearsLabel = lang === "ar" ? "سنة" : "years";
  const subtitle = lang === "ar" ? `+${SHOPS.length * 200} محل موثّق في 27 محافظة` : `${SHOPS.length * 200}+ verified shops across 27 governorates`;
  const placeholder = lang === "ar" ? "ابحث باسم المحل أو المدينة" : "Search by shop name or city";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow={t("page.shops.eyebrow")} title={t("page.shops.title")} subtitle={subtitle} />
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row gap-3 mb-10 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder={placeholder} className="ltr:pl-10 rtl:pr-10 bg-card border-border h-12" />
          </div>
          <Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold">{t("common.search")}</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOPS.map((s) => (
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
              <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {s.city}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-gold/30 text-gold bg-gold/5 gap-1"><BadgeCheck className="h-3 w-3" /> {verifiedLabel} {s.tier}</Badge>
                <Badge variant="outline" className="border-border text-muted-foreground">{s.years}+ {yearsLabel}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
