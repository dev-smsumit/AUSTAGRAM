import Image from "next/image";
import { cn } from "@/lib/utils";

type AttractionCardProps = {
  title: string;
  subtitle: string;
  label: string;
  image: string;
  description?: string;
  className?: string;
};

export function AttractionCard({
  title,
  subtitle,
  label,
  image,
  description,
  className,
}: AttractionCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[2rem] bg-slate-200 shadow-[0_30px_70px_rgba(100,138,171,0.18)]",
        className,
      )}
    >
      <div className="relative min-h-[18rem] sm:min-h-[20rem] md:h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-white/18 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
          {label}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">{subtitle}</p>
          <h3 className="mt-3 font-heading text-3xl leading-none sm:text-4xl">{title}</h3>
          {description ? (
            <p className="mt-3 max-w-md text-sm leading-7 text-white/85">{description}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
