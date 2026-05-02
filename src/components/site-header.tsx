import { Link } from "@tanstack/react-router";
import { Shield, Menu, X, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { LangToggle } from "@/components/lang-toggle";
import { useAuth } from "@/lib/auth";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const { user } = useAuth();

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/how-it-works", label: t("nav.how") },
    { to: "/for-shops", label: t("nav.forShops") },
    { to: "/shops", label: t("nav.shops") },
    { to: "/reports", label: t("nav.reports") },
    { to: "/pricing", label: t("nav.pricing") },
    { to: "/about", label: t("nav.about") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 gap-4">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold shadow-gold">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-extrabold gold-text-gradient">Findex</div>
            <div className="text-[10px] text-muted-foreground">{t("brand.tagline")}</div>
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

        <div className="hidden md:flex items-center gap-1">
          <LangToggle />
          {user ? (
            <Link to="/dashboard">
              <Button size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold gap-2">
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/login"><Button variant="ghost" size="sm">{t("nav.login")}</Button></Link>
              <Link to="/register">
                <Button size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
                  {t("nav.register")}
                </Button>
              </Link>
            </>
          )}
        </div>

        <div className="flex md:hidden items-center gap-1">
          <LangToggle compact />
          <button className="p-2" onClick={() => setOpen(!open)} aria-label={t("nav.menu")}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
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
            {user ? (
              <Link to="/dashboard" className="flex-1" onClick={() => setOpen(false)}>
                <Button size="sm" className="w-full bg-gradient-gold text-primary-foreground">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/login" className="flex-1" onClick={() => setOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">{t("nav.login")}</Button>
                </Link>
                <Link to="/register" className="flex-1" onClick={() => setOpen(false)}>
                  <Button size="sm" className="w-full bg-gradient-gold text-primary-foreground">{t("nav.register")}</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
