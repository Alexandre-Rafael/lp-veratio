import { cn } from "@/lib/utils";

interface ModularBlockProps {
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

/**
 * ModularBlock - Componente visual baseado na identidade Veratio Tech
 * Representa sistemas estruturados e organização tecnológica
 */
export const ModularBlock = ({ 
  className, 
  variant = "primary", 
  size = "md" 
}: ModularBlockProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const variantClasses = {
    primary: "bg-veratio-navy",
    secondary: "bg-veratio-blue",
    accent: "bg-veratio-light-blue",
  };

  return (
    <div
      className={cn(
        "rounded-lg transition-transform duration-300",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-hidden="true"
    />
  );
};

interface GeometricPatternProps {
  className?: string;
}

/**
 * GeometricPattern - Padrão de fundo com blocos modulares
 * Representa estrutura em expansão e crescimento tecnológico
 */
export const GeometricPattern = ({ className }: GeometricPatternProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} aria-hidden="true">
      <svg
        className="absolute w-full h-full opacity-[0.065]"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-left cluster */}
        <rect x="60" y="60" width="88" height="88" fill="hsl(210 75% 9%)" rx="10" />
        <rect x="188" y="80" width="64" height="64" fill="hsl(211 100% 50%)" rx="8" />
        <rect x="296" y="52" width="76" height="76" fill="hsl(211 100% 69%)" rx="10" />
        <rect x="420" y="100" width="48" height="48" fill="hsl(210 75% 9%)" rx="6" />

        {/* Connections top */}
        <line x1="148" y1="104" x2="188" y2="112" stroke="hsl(211 100% 50%)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="252" y1="112" x2="296" y2="90" stroke="hsl(211 100% 50%)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="372" y1="90" x2="420" y2="124" stroke="hsl(211 100% 50%)" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Right cluster */}
        <rect x="920" y="80" width="96" height="96" fill="hsl(210 75% 9%)" rx="10" />
        <rect x="1060" y="100" width="68" height="68" fill="hsl(211 100% 69%)" rx="8" />
        <rect x="1000" y="210" width="72" height="72" fill="hsl(211 100% 50%)" rx="9" />
        <line x1="1016" y1="128" x2="1060" y2="134" stroke="hsl(211 100% 50%)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="1036" y1="176" x2="1036" y2="210" stroke="hsl(211 100% 50%)" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Center-right mid */}
        <rect x="700" y="180" width="80" height="80" fill="hsl(210 75% 9%)" rx="9" />
        <rect x="830" y="200" width="56" height="56" fill="hsl(211 100% 50%)" rx="7" />
        <line x1="780" y1="220" x2="830" y2="228" stroke="hsl(211 100% 50%)" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Bottom-left cluster */}
        <rect x="80" y="480" width="80" height="80" fill="hsl(211 100% 50%)" rx="9" />
        <rect x="210" y="500" width="60" height="60" fill="hsl(210 75% 9%)" rx="8" />
        <rect x="320" y="470" width="70" height="70" fill="hsl(211 100% 69%)" rx="9" />
        <line x1="160" y1="520" x2="210" y2="530" stroke="hsl(211 100% 50%)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="270" y1="530" x2="320" y2="505" stroke="hsl(211 100% 50%)" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Bottom-right cluster */}
        <rect x="900" y="500" width="86" height="86" fill="hsl(211 100% 69%)" rx="10" />
        <rect x="1040" y="520" width="62" height="62" fill="hsl(210 75% 9%)" rx="8" />
        <line x1="986" y1="543" x2="1040" y2="551" stroke="hsl(211 100% 50%)" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Isolated accent nodes */}
        <rect x="540" y="320" width="52" height="52" fill="hsl(211 100% 50%)" rx="6" />
        <rect x="480" y="440" width="40" height="40" fill="hsl(210 75% 9%)" rx="5" />
        <line x1="566" y1="372" x2="500" y2="440" stroke="hsl(211 100% 50%)" strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>
    </div>
  );
};

interface ConnectionNodeProps {
  className?: string;
  from?: { x: number; y: number };
  to?: { x: number; y: number };
  color?: "navy" | "blue" | "lightBlue";
}

/**
 * ConnectionNode - Elemento visual de conexões entre sistemas
 * Simboliza integração e fluxo de dados
 */
export const ConnectionNode = ({ 
  className,
  from = { x: 0, y: 0 },
  to = { x: 100, y: 100 },
  color = "blue"
}: ConnectionNodeProps) => {
  const colorMap = {
    navy: "hsl(210 75% 9%)",
    blue: "hsl(211 100% 50%)",
    lightBlue: "hsl(211 100% 69%)",
  };

  return (
    <svg
      className={cn("absolute", className)}
      style={{ 
        left: Math.min(from.x, to.x),
        top: Math.min(from.y, to.y),
        width: Math.abs(to.x - from.x) + 20,
        height: Math.abs(to.y - from.y) + 20,
      }}
      aria-hidden="true"
    >
      <line
        x1={from.x < to.x ? 10 : Math.abs(to.x - from.x) + 10}
        y1={from.y < to.y ? 10 : Math.abs(to.y - from.y) + 10}
        x2={to.x < from.x ? 10 : Math.abs(to.x - from.x) + 10}
        y2={to.y < from.y ? 10 : Math.abs(to.y - from.y) + 10}
        stroke={colorMap[color]}
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.3"
      />
      {/* Nó inicial */}
      <circle
        cx={from.x < to.x ? 10 : Math.abs(to.x - from.x) + 10}
        cy={from.y < to.y ? 10 : Math.abs(to.y - from.y) + 10}
        r="4"
        fill={colorMap[color]}
      />
      {/* Nó final */}
      <circle
        cx={to.x < from.x ? 10 : Math.abs(to.x - from.x) + 10}
        cy={to.y < from.y ? 10 : Math.abs(to.y - from.y) + 10}
        r="4"
        fill={colorMap[color]}
      />
    </svg>
  );
};
