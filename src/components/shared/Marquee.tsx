import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  fade?: boolean;
  className?: string;
}

const Marquee = ({ children, speed = "normal", fade = false, className }: MarqueeProps) => {
  const duration =
    speed === "slow" ? "60s" : speed === "fast" ? "20s" : "40s";

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={
        fade
          ? {
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
            }
          : undefined
      }
    >
      <div
        className="flex w-max items-center gap-12 animate-marquee"
        style={{ animationDuration: duration }}
      >
        <div className="flex items-center gap-12 shrink-0">{children}</div>
        <div className="flex items-center gap-12 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
