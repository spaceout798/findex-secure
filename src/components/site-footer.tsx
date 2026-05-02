import { Link } from "@tanstack/react-router";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-navy-deep mt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-extrabold gold-text-gradient">Findex</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("footer.about")}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">{t("footer.platform")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/how-it-works" className="hover:text-gold">{t("nav.how")}</Link></li>
              <li><Link to="/for-shops" className="hover:text-gold">{t("nav.forShops")}</Link></li>
              <li><Link to="/shops" className="hover:text-gold">{t("nav.shops")}</Link></li>
              <li><Link to="/pricing" className="hover:text-gold">{t("nav.pricing")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-gold">{t("nav.about")}</Link></li>
              <li><Link to="/faq" className="hover:text-gold">{t("nav.faq")}</Link></li>
              <li><Link to="/contact" className="hover:text-gold">{t("nav.contact")}</Link></li>
              <li><Link to="/terms" className="hover:text-gold">{t("footer.terms")}</Link></li>
              <li><Link to="/privacy" className="hover:text-gold">{t("footer.privacy")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /><span>support@findex.eg</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /><span>19000</span></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /><span>{t("common.cairo")}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Findex. {t("footer.rights")}</div>
          <div>{t("footer.madeIn")}</div>
        </div>
      </div>
    </footer>
  );
}
