import { SectionHeading } from "@/components/ui/section-heading";
import { AttractionCard } from "@/components/ui/attraction-card";
import { attractions } from "@/lib/site-data";

export function AttractionsSection() {
  return (
    <section id="attractions" className="section-shell pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-sky-100 pb-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Destinations" title="Top Attractions" />
          <p className="max-w-sm text-base leading-8 text-slate-600">
            Each corner of Austagram holds a story waiting to be discovered.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:auto-rows-[16rem]">
          {attractions.map((item) => (
            <AttractionCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
