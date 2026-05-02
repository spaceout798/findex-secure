import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/lib/auth";
import { useEffect } from "react";
import { Crown, FileText, Bell, ShieldCheck, LogOut, User } from "lucide-react";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

function Dashboard() {
  const { user, roles, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [loading, user, navigate]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="h-8 w-8 rounded-full border-2 border-gold border-t-transparent animate-spin" />
      </div>
    );
  }

  const isShop = roles.includes("shop_owner");
  const isStaff = roles.some((r) => ["admin", "moderator", "finance"].includes(r));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold mb-2">Welcome back</h1>
            <p className="text-muted-foreground">{user.email}</p>
            <div className="flex gap-2 mt-3">
              {roles.map((r) => (
                <Badge key={r} variant="secondary" className="bg-gold/15 text-gold border-gold/30 capitalize">{r.replace("_", " ")}</Badge>
              ))}
            </div>
          </div>
          <Button variant="outline" onClick={async () => { await signOut(); navigate({ to: "/" }); }}>
            <LogOut className="h-4 w-4 me-2" /> Sign out
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <DashCard icon={FileText} title="My Reports" desc="View and manage your jewelry reports." to="/reports" />
          <DashCard icon={Bell} title="Notifications" desc="Latest alerts and platform updates." to="/dashboard" />
          <DashCard icon={User} title="Profile" desc="Update your details and verification." to="/dashboard" />
          {isShop && (
            <>
              <DashCard icon={Crown} title="Shop Profile" desc="Manage your shop, photos, and badge." to="/dashboard" />
              <DashCard icon={ShieldCheck} title="Subscription" desc="Plan, billing, and renewals." to="/pricing" />
            </>
          )}
          {isStaff && (
            <DashCard icon={ShieldCheck} title="Moderation" desc="Review pending reports and shops." to="/dashboard" />
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function DashCard({ icon: Icon, title, desc, to }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string; to: string }) {
  return (
    <Link to={to}>
      <Card className="p-6 bg-card border-border hover:border-gold/40 transition h-full">
        <Icon className="h-8 w-8 text-gold mb-4" />
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </Card>
    </Link>
  );
}