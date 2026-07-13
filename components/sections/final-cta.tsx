import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";

export function FinalCtaSection() {
  return (
    <section className="relative mt-16 overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(252,248,244,0.12), rgba(12,24,41,0.3)), url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,234,186,0.42),transparent_35%)]" />
      <div className="curve-divider-top relative z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <GlassCard className="mx-auto max-w-3xl rounded-[2.2rem] bg-white/18 p-8 text-center text-white sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-2xl">
            ≋
          </div>
          <h2 className="mt-6 font-heading text-5xl leading-none sm:text-6xl">
            Ready to Discover the <span className="text-amber-200">Beauty of Austagram?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
            Let the haor call you. Begin your journey into Bangladesh&apos;s most beautiful
            wetland destination.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#essence" className="btn-white">
              Start Exploring
            </Link>
            <Link href="#plan" className="btn-glass">
              Plan Your Visit
            </Link>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
