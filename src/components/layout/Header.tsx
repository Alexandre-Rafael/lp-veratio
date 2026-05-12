import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { RESPONDI_URL } from "@/lib/constants";
import { useTheme } from "next-themes";
import logo from "@/assets/logo-veratio.png";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Cases", href: "#cases" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const handleAnchor = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo",
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-veratio-sm"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="container mx-auto">
          <nav
            className={cn(
              "flex items-center transition-all duration-500 ease-out-expo",
              scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24",
            )}
          >
            {/* Logo */}
            <Link to="/" className="group flex items-center" onClick={scrollToTop}>
              <img
                src={logo}
                alt="Veratio Tech"
                className={cn(
                  "w-auto object-contain transition-all duration-500",
                  scrolled ? "h-10 lg:h-12" : "h-12 lg:h-14",
                  "group-hover:scale-[1.03]",
                  mounted && resolvedTheme === "dark" && "brightness-0 invert",
                )}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 ml-12">
              {navLinks.map((link) => (
                <NavItem key={link.href} href={link.href} onClick={() => handleAnchor(link.href)}>
                  {link.label}
                </NavItem>
              ))}
            </div>

            {/* Actions */}
            <div className="ml-auto flex items-center gap-2 lg:gap-3">
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
              <Button
                asChild
                className="hidden lg:inline-flex h-11 rounded-pill bg-veratio-navy px-6 text-[14px] font-medium text-white shadow-veratio-md hover:bg-veratio-blue hover:shadow-veratio-glow transition-all duration-300 dark:bg-veratio-blue dark:hover:bg-veratio-light-blue"
              >
                <a href={RESPONDI_URL} target="_blank" rel="noopener noreferrer">
                  Falar com especialista
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </Button>

              {/* Mobile trigger */}
              <button
                className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-pill text-veratio-navy transition-colors hover:bg-muted dark:text-foreground"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Abrir menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile fullscreen panel */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/98 backdrop-blur-xl lg:hidden transition-all duration-500 ease-out-expo",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="container mx-auto h-full px-4 pt-24 pb-10 flex flex-col">
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((link, i) => (
              <MobileLink
                key={link.href}
                href={link.href}
                delay={i * 60}
                open={mobileOpen}
                onClick={() => handleAnchor(link.href)}
              >
                {link.label}
              </MobileLink>
            ))}
          </nav>

          <div
            className={cn(
              "mt-auto flex flex-col gap-4 transition-all duration-500 ease-out-expo",
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: mobileOpen ? "300ms" : "0ms" }}
          >
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="text-sm text-muted-foreground">Tema</span>
              <ThemeToggle />
            </div>
            <Button
              asChild
              className="h-14 rounded-pill bg-veratio-navy text-base font-medium text-white shadow-veratio-lg hover:bg-veratio-blue dark:bg-veratio-blue"
            >
              <a href={RESPONDI_URL} target="_blank" rel="noopener noreferrer">
                Falar com especialista
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

/* ---------- Sub-components ---------- */

const NavItem = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={(e) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    }}
    className="group relative rounded-pill px-4 py-2 text-[15px] font-medium transition-colors duration-300 text-veratio-gray hover:text-veratio-navy dark:hover:text-foreground"
  >
    <span className="relative">
      {children}
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-veratio-blue transition-transform duration-300 ease-out-expo scale-x-0 group-hover:scale-x-100" />
    </span>
  </a>
);

const MobileLink = ({
  href,
  open,
  delay,
  onClick,
  children,
}: {
  href: string;
  open: boolean;
  delay: number;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={(e) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    }}
    className={cn(
      "group flex items-center justify-between py-5 text-[40px] font-medium tracking-[-0.035em] border-b border-border/60 transition-all duration-500 ease-out-expo font-display leading-tight text-muted-foreground",
      open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
    )}
    style={{ transitionDelay: open ? `${delay + 120}ms` : "0ms" }}
  >
    {children}
    <ArrowUpRight
      className="h-8 w-8 transition-all duration-300 text-muted-foreground group-hover:text-veratio-blue group-hover:translate-x-1"
      strokeWidth={1.5}
    />
  </a>
);

export default Header;
