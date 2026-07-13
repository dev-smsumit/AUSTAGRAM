import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-[2rem] border border-white/50 bg-white/55 p-6 shadow-[0_24px_80px_rgba(129,165,201,0.18)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
