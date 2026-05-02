import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function LangToggle({ compact = false }: { compact?: boolean }) {
  const { t, toggle } = useI18n();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="gap-1.5 text-muted-foreground hover:text-gold"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      {!compact && <span className="font-semibold">{t("lang.toggle")}</span>}
    </Button>
  );
}
