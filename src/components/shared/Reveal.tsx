import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "fade" | "scale" | "slide";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}

const Reveal = ({ children, delay = 0, className, variant = "fade" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const hiddenClass =
    variant === "scale"
      ? "opacity-0 scale-95"
      : variant === "slide"
      ? "opacity-0 -translate-x-4"
      : "opacity-0 translate-y-4";
  const shownClass = "opacity-100 translate-x-0 translate-y-0 scale-100";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? shownClass : hiddenClass,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
