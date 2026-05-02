import { Link } from "@tanstack/react-router";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "الرئيسية" },
  { to: "/how-it-works", label: "كيف يعمل" },
  { to: "/for-shops", label: "لمحلات المجوهرات" },
  { to: "/shops", label: "المحلات الموثقة" },
  { to: "/reports", label: "تصفح البلاغات" },
  { to: "/pricing", label: "الأسعار" },
  { to: "/about", label: "عن فايندكس" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold shadow-gold">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-extrabold gold-text-gradient">Findex</div>
            <div className="text-[10px] text-muted-foreground">شبكة الثقة للمجوهرات</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/login">
            <Button variant="ghost" size="sm">تسجيل الدخول</Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
              ابدأ الآن
            </Button>
          </Link>
        </div>

        <button className="lg:hidden md:hidden p-2" onClick={() => setOpen(!open)} aria-label="القائمة">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card px-4 py-3 space-y-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Link to="/login" className="flex-1" onClick={() => setOpen(false)}>
              <Button variant="outline" size="sm" className="w-full">دخول</Button>
            </Link>
            <Link to="/register" className="flex-1" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full bg-gradient-gold text-primary-foreground">ابدأ</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}