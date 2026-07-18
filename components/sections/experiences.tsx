"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/site-data";

export function ExperiencesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateScrollState = () => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    setCanScrollBack(slider.scrollLeft > 4);
    setCanScrollForward(slider.scrollLeft < maxScrollLeft - 4);
  };

  const scrollSlider = (direction: "back" | "forward") => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector<HTMLElement>("article");
    const cardWidth = firstCard?.offsetWidth ?? 320;
    const distance = cardWidth + 16;

    slider.scrollBy({
      left: direction === "forward" ? distance : -distance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    updateScrollState();
    slider.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      slider.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Experiences" title="Feel Austagram" />
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="slider-button"
              aria-label="Previous experience"
              disabled={!canScrollBack}
              onClick={() => scrollSlider("back")}
            >
              <span aria-hidden="true">&lsaquo;</span>
            </button>
            <button
              type="button"
              className="slider-button"
              aria-label="Next experience"
              disabled={!canScrollForward}
              onClick={() => scrollSlider("forward")}
            >
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {experiences.map((item) => (
            <article
              key={item.title}
              className="group w-[min(82vw,22rem)] shrink-0 snap-start"
            >
              <div className="relative h-[23rem] overflow-hidden rounded-[1.8rem] shadow-[0_30px_70px_rgba(108,145,180,0.18)] sm:h-[25rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 82vw, 22rem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/5 to-transparent" />
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-white/18 text-lg text-white shadow-[0_14px_34px_rgba(15,36,61,0.18)] backdrop-blur-md">
                  <span aria-hidden="true">~</span>
                </div>
              </div>
              <div className="mt-4 rounded-[1.4rem] border border-white/70 bg-white/82 p-5 shadow-[0_18px_40px_rgba(128,163,194,0.12)] backdrop-blur sm:p-6">
                <h3 className="font-heading text-2xl leading-tight text-slate-800 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
