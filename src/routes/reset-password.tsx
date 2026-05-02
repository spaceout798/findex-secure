import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({ component: ResetPassword });

function ResetPassword() {
  const navigate = useNavigate();
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: pwd });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Password updated");
    navigate({ to: "/dashboard" });
  };
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md p-8 bg-card border-border shadow-elegant">
          <h1 className="text-2xl font-extrabold mb-2">Set new password</h1>
          <form className="space-y-4 mt-4" onSubmit={submit}>
            <div><Label className="mb-2 block">New password</Label><Input required minLength={6} type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} className="bg-background border-border h-11" /></div>
            <Button type="submit" disabled={loading} className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-11">Update password</Button>
          </form>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}