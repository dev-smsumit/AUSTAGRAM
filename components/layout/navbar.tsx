"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function Brand() {
  return (
    <Link href="#" className="flex items-center gap-3 text-slate-800">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-500 shadow-inner">
        ≋
      </span>
      <span className="font-heading text-[2rem] leading-none">Austagram</span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-[1.65rem] border border-white/55 bg-white/45 px-5 py-4 shadow-[0_18px_40px_rgba(111,151,189,0.18)] backdrop-blur-xl transition",
          scrolled && "bg-white/68 shadow-[0_22px_70px_rgba(111,151,189,0.22)]",
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <Brand />

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <span className="text-sm text-slate-500">বাংলা</span>
            <Link href="#plan" className="btn-primary">
              Explore
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/65 text-slate-800 shadow-sm backdrop-blur lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="space-y-1.5">
              <span className={cn("block h-0.5 w-5 bg-current transition", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-5 bg-current transition", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 bg-current transition", open && "-translate-y-2 -rotate-45")} />
            </span>
          </button>
        </div>

        {open ? (
          <div className="mt-5 rounded-[1.5rem] border border-white/55 bg-white/80 p-4 backdrop-blur lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="text-sm text-slate-500">বাংলা</span>
              <Link href="#plan" onClick={() => setOpen(false)} className="btn-primary">
                Explore
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
