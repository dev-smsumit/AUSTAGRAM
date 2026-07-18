"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryFilters, galleryItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("All");

  const filteredItems = useMemo(() => {
    if (filter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="gallery" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visual Journey"
          title="Gallery"
          description="A window into the soul of Austagram."
          align="center"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {galleryFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border px-5 py-3 text-sm font-semibold transition",
                filter === item
                  ? "border-sky-400 bg-sky-400 text-white"
                  : "border-sky-100 bg-white/70 text-slate-600 hover:bg-sky-50",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4 md:auto-rows-[8rem]">
          {filteredItems.map((item) => (
            <article
              key={item.title}
              className={cn(
                "group relative aspect-[4/3] overflow-hidden rounded-[1.8rem] bg-slate-200 shadow-[0_24px_60px_rgba(121,156,189,0.16)] md:aspect-auto",
                item.className ?? "md:row-span-2",
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
