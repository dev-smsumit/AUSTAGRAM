import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.4fr_0.7fr_0.9fr] lg:px-8">
        <div>
          <Link href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-200/25 bg-sky-200/10 text-sky-200">
              ≋
            </span>
            <span className="font-heading text-[2rem]">Austagram</span>
          </Link>
          <p className="mt-5 max-w-sm text-base leading-8 text-slate-400">
            Bangladesh&apos;s premier haor destination. Where sky meets water, and every
            sunrise is a masterpiece.
          </p>
          <div className="mt-6 flex gap-3 text-sm text-slate-400">
            {["f", "ig", "yt", "x"].map((item) => (
              <span
                key={item}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Navigate
          </h3>
          <div className="mt-6 flex flex-col gap-4">
            {["Explore", "Attractions", "Gallery", "Seasons", "Plan Your Visit"].map((item) => (
              <Link key={item} href="#" className="text-slate-300 transition hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Contact
          </h3>
          <div className="mt-6 space-y-4 text-slate-300">
            <p>Austagram Upazila</p>
            <p>Kishoreganj, Bangladesh</p>
            <p>info@austagram.gov.bd</p>
            <p>বাংলা / English</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-500 sm:px-6 md:flex-row md:justify-between lg:px-8">
          <p>© 2026 Austagram · All rights reserved</p>
          <p>Haor Glass Experience — Version 2</p>
        </div>
      </div>
    </footer>
  );
}
