import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const { t, lang } = useI18n();
  const labels = lang === "ar"
    ? { email: "البريد", phone: "الهاتف", address: "العنوان", name: "الاسم", emailField: "البريد الإلكتروني", subject: "الموضوع", message: "رسالتك", send: "إرسال الرسالة" }
    : { email: "Email", phone: "Phone", address: "Address", name: "Name", emailField: "Email", subject: "Subject", message: "Your message", send: "Send message" };
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow={t("page.contact.eyebrow")} title={t("page.contact.title")} subtitle={t("page.contact.subtitle")} />
      <section className="container mx-auto px-4 md:px-6 py-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[{ icon: Mail, label: labels.email, value: "support@findex.eg" }, { icon: Phone, label: labels.phone, value: "19000" }, { icon: MapPin, label: labels.address, value: t("common.cairo") }].map((c) => (
            <Card key={c.label} className="p-6 bg-card border-border text-center">
              <c.icon className="h-8 w-8 text-gold mx-auto mb-3" />
              <div className="text-sm text-muted-foreground mb-1">{c.label}</div>
              <div className="font-bold">{c.value}</div>
            </Card>
          ))}
        </div>
        <Card className="p-8 bg-card border-border">
          <form className="space-y-4 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder={labels.name} className="bg-background border-border h-12" />
              <Input placeholder={labels.emailField} type="email" className="bg-background border-border h-12" />
            </div>
            <Input placeholder={labels.subject} className="bg-background border-border h-12" />
            <Textarea placeholder={labels.message} rows={5} className="bg-background border-border" />
            <Button size="lg" className="w-full bg-gradient-gold text-primary-foreground shadow-gold">{labels.send}</Button>
          </form>
        </Card>
      </section>
      <SiteFooter />
    </div>
  );
}
