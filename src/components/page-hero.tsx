import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, cta }: { eyebrow?: string; title: string; subtitle?: string; cta?: ReactNode }) {
  return (
    <section className="bg-gradient-hero border-b border-border">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 text-center max-w-3xl">
        {eyebrow && <div className="text-sm text-gold font-semibold mb-3">{eyebrow}</div>}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">{title}</h1>
        {subtitle && <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
        {cta && <div className="mt-8">{cta}</div>}
      </div>
    </section>
  );
}
