import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { essenceCards } from "@/lib/site-data";

export function EssenceSection() {
  return (
    <section id="essence" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="The Essence"
            title="Feel the Haor in every breath"
            description="Austagram is not just a destination. It is a feeling. The gentle lapping of water against a wooden boat, the cry of a kingfisher at dawn, the warmth of haor hospitality. Come and let the water speak to you."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {essenceCards.map((card) => (
              <GlassCard key={card.title} className="rounded-[1.75rem] bg-white/65">
                <div className="text-sky-400">≋</div>
                <h3 className="mt-4 font-heading text-2xl text-slate-800">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{card.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:pt-10">
          <div className="relative overflow-hidden rounded-[2.2rem] shadow-[0_40px_90px_rgba(115,151,185,0.2)]">
            <Image
              src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80"
              alt="Golden haor sunrise"
              width={1000}
              height={1250}
              className="h-[30rem] w-full object-cover sm:h-[35rem]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <GlassCard className="absolute -bottom-6 left-4 max-w-[11rem] rounded-[1.5rem] bg-white/72 p-4 sm:left-6">
            <div className="overflow-hidden rounded-[1rem]">
              <Image
                src="https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=600&q=80"
                alt="Migratory birds in winter"
                width={320}
                height={220}
                className="h-28 w-full object-cover"
              />
            </div>
            <div className="mt-3 text-sm font-semibold text-slate-700">Winter Migration</div>
            <div className="text-xs text-slate-500">100+ bird species</div>
          </GlassCard>

          <GlassCard className="absolute -bottom-16 right-6 rounded-[1.5rem] bg-white/72 px-6 py-5 text-center">
            <div className="font-heading text-4xl text-slate-800">24/7</div>
            <div className="mt-1 text-sm text-slate-500">Haor Beauty</div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
