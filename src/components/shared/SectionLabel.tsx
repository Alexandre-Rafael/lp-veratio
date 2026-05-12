import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  variant?: "default" | "light";
  className?: string;
}

const SectionLabel = ({ children, variant = "default", className }: SectionLabelProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border px-3 py-1 text-eyebrow",
        variant === "light"
          ? "border-white/20 bg-white/5 text-white/80"
          : "border-veratio-blue/30 bg-veratio-blue/5 text-veratio-blue",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          variant === "light" ? "bg-veratio-light-blue" : "bg-veratio-blue",
        )}
      />
      {children}
    </span>
  );
};

export default SectionLabel;
