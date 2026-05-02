import { ArrowLeft, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { ComponentProps } from "react";

/** Forward-pointing arrow that respects RTL: points right in LTR, left in RTL. */
export function DirArrow(props: ComponentProps<typeof ArrowRight>) {
  const { dir } = useI18n();
  const Icon = dir === "rtl" ? ArrowLeft : ArrowRight;
  return <Icon {...props} />;
}
