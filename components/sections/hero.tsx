import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { heroStats } from "@/lib/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import herobnr from "../../public/images/homebanner2.jpg";


export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-sky" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            `url(${herobnr.src})`, backgroundAttachment: "fixed",
        }}
      />
      {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(238,245,252,0.32)_0%,rgba(238,245,252,0.18)_35%,rgba(238,245,252,0.72)_100%)]" /> */}
            <div className="absolute inset-0 bg-transperant" />

      <div className="relative mx-auto flex flex-col justify-between lg:flex-row min-h-[100vh] max-w-7xl items-center px-4 sm:px-6 lg:px-0">
        <div className="max-w-3xl mt-0 mt-[140px]">          
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
            <FontAwesomeIcon icon={faLocationDot} className="text-sm w-[9px]" aria-hidden="true" />
            Austagram, Kishoreganj
          </div>
          <h1 className="mt-3 max-w-2xl font-heading text-5xl leading-[0.9] text-white drop-shadow-[0_12px_32px_rgba(25,50,84,0.18)] sm:text-5xl lg:text-[74px]">
            Where the <br></br> <span className="text-amber-200">Haor</span> Begins
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/88 sm:text-xl">
            Discover Austagram, Bangladesh&apos;s most breathtaking wetland destination,
            where sky and water become one.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#essence" className="btn-white">
              Begin the Journey
            </Link>
            <Link href="#gallery" className="btn-glass">
              Watch Film
            </Link>
          </div>
        </div>

        <div className="mt-14 mb-2 w-full md:w-auto flex gap-4 self-start sm:flex-row sm:self-end">
          {heroStats.map((stat) => (
            <GlassCard
              key={stat.label}
              className="min-w-0 w-1/3 lg:w-32 lg:min-w-32 animate-float bg-white/18 px-2 pb-8 pt-4 text-center text-white"
            >
              <div className="text-3xl font-heading text-black">{stat.value}</div>
              <div className="mt-1 text-[12px] text-black/60">{stat.label}</div>
            </GlassCard>
          ))}
        </div>


      </div>
        {/* <div className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.35em] text-black">
          Scroll
        </div> */}
      <div className="curve-divider" />
    </section>
  );
}
