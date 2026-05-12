import { cn } from "@/lib/utils";

interface AmbientBackdropProps {
  variant?: "light" | "dark";
  className?: string;
}

const AmbientBackdrop = ({ variant = "light", className }: AmbientBackdropProps) => {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full blur-[120px] animate-blob",
          variant === "dark" ? "bg-veratio-blue/20" : "bg-veratio-blue/15",
        )}
      />
      <div
        className={cn(
          "absolute top-1/3 -right-40 h-[460px] w-[460px] rounded-full blur-[120px] animate-blob",
          variant === "dark" ? "bg-veratio-light-blue/15" : "bg-veratio-light-blue/20",
        )}
        style={{ animationDelay: "2s" }}
      />
      <div
        className={cn(
          "absolute inset-0",
          variant === "dark" ? "dot-grid-white opacity-30" : "dot-grid opacity-40",
        )}
      />
    </div>
  );
};

export default AmbientBackdrop;
