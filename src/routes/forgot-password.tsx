import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({ component: ForgotPassword });

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Check your email for a reset link");
  };
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md p-8 bg-card border-border shadow-elegant">
          <h1 className="text-2xl font-extrabold mb-2">Reset password</h1>
          <p className="text-sm text-muted-foreground mb-6">We'll email you a secure link.</p>
          <form className="space-y-4" onSubmit={submit}>
            <div><Label className="mb-2 block">Email</Label><Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-background border-border h-11" /></div>
            <Button type="submit" disabled={loading} className="w-full bg-gradient-gold text-primary-foreground shadow-gold h-11">Send reset link</Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6"><Link to="/login" className="text-gold hover:underline">Back to sign in</Link></p>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}