import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/site-data";

export function ExperiencesSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading eyebrow="Experiences" title="Feel Austagram" />
          <div className="hidden items-center gap-3 md:flex">
            <span className="glass-icon">‹</span>
            <span className="glass-icon">›</span>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto pb-4">
          <div className="flex min-w-max snap-x gap-4">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="group w-[18rem] snap-start sm:w-[21rem] lg:w-[22rem]"
              >
                <div className="relative h-[25rem] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(108,145,180,0.18)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 80vw, 22rem"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/15 text-lg text-white backdrop-blur">
                    ○
                  </div>
                </div>
                <div className="mt-4 rounded-[1.8rem] bg-white/80 p-6 shadow-[0_18px_40px_rgba(128,163,194,0.12)]">
                  <h3 className="font-heading text-3xl text-slate-800">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
