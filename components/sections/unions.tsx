import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { unions } from "@/lib/site-data";

const tones = ["text-sky-300", "text-emerald-300", "text-amber-300", "text-sky-300"];

export function UnionsSection() {
  return (
    <section className="section-shell pt-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="8 Unions"
          title="Explore the Unions"
          description="Eight unique communities, each with its own haor story."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {unions.map((union, index) => (
            <GlassCard key={union} className="rounded-[1.8rem] bg-white/72 p-6">
              <div className="flex items-start justify-between">
                <span className={`rounded-2xl bg-slate-50 px-3 py-2 ${tones[index % tones.length]}`}>
                  ≋
                </span>
                <span className={`text-2xl font-heading ${tones[index % tones.length]}`}>
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 font-heading text-3xl text-slate-700">{union}</h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
