import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { visitCards } from "@/lib/site-data";

export function VisitSection() {
  return (
    <section id="plan" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(179,214,244,0.32),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,220,173,0.16),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Travel Guide"
          title="Plan Your Visit"
          description="Everything you need for an unforgettable journey."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visitCards.map((card) => (
            <GlassCard key={card.title} className="rounded-[2rem] bg-white/72 p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                  ◌
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-slate-600">
                  {card.badge}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-3xl text-slate-800">{card.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{card.description}</p>
              <div className="mt-6 h-px w-24 bg-sky-100" />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
