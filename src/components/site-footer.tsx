import { Link } from "@tanstack/react-router";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              شبكة الثقة المصرية لربط أصحاب المجوهرات بمحلات الذهب الموثقة لاسترداد المسروقات والمفقودات.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">المنصة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/how-it-works" className="hover:text-gold">كيف يعمل</Link></li>
              <li><Link to="/for-shops" className="hover:text-gold">لمحلات المجوهرات</Link></li>
              <li><Link to="/shops" className="hover:text-gold">المحلات الموثقة</Link></li>
              <li><Link to="/pricing" className="hover:text-gold">الأسعار</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">الشركة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-gold">عن فايندكس</Link></li>
              <li><Link to="/faq" className="hover:text-gold">الأسئلة الشائعة</Link></li>
              <li><Link to="/contact" className="hover:text-gold">تواصل معنا</Link></li>
              <li><Link to="/terms" className="hover:text-gold">الشروط</Link></li>
              <li><Link to="/privacy" className="hover:text-gold">الخصوصية</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">تواصل</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> support@findex.eg</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> 19000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> القاهرة، مصر</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Findex. جميع الحقوق محفوظة.</div>
          <div>صُنع بعناية في مصر 🇪🇬</div>
        </div>
      </div>
    </footer>
  );
}