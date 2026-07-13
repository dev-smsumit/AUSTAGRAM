"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { seasons } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SeasonsSection() {
  const [activeId, setActiveId] = useState(seasons[0].id);
  const activeSeason = seasons.find((season) => season.id === activeId) ?? seasons[0];

  return (
    <section id="seasons" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Year Round"
          title="Four Seasons of Austagram"
          description="Every season transforms the haor into a completely different world."
          align="center"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {seasons.map((season) => (
            <button
              key={season.id}
              type="button"
              onClick={() => setActiveId(season.id)}
              className={cn(
                "rounded-full border px-5 py-3 text-sm font-semibold transition",
                activeId === season.id
                  ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                  : "border-sky-100 bg-white/70 text-slate-600 hover:border-sky-200 hover:bg-sky-50",
              )}
            >
              {season.label} <span className="ml-1 text-xs opacity-75">{season.bangla}</span>
            </button>
          ))}
        </div>

        <div
          className="mt-10 overflow-hidden rounded-[2.4rem] bg-slate-300 shadow-[0_35px_90px_rgba(93,125,158,0.22)]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(14,31,54,0.28), rgba(14,31,54,0.52)), url(${activeSeason.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex min-h-[38rem] items-end p-6 sm:p-8 lg:p-10">
            <GlassCard className="max-w-xl bg-white/18 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">
                {activeSeason.period}
              </p>
              <h3 className="mt-4 font-heading text-5xl leading-none">{activeSeason.title}</h3>
              <p className="mt-5 text-base leading-8 text-white/85">{activeSeason.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {activeSeason.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm text-white/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
