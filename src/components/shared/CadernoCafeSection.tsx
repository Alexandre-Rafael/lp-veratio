import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import cadernoCafeImage from "@/assets/caderno-cafe.png";

const CadernoCafeSection = () => {
  return (
    <section className="relative py-14 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6">
              <SectionLabel>Produto próprio</SectionLabel>
              <h2 className="text-display-lg text-veratio-navy dark:text-foreground mt-6">
                Caderno do Café — <span className="text-gradient-blue italic">SaaS</span> nascido
                da nossa expertise no Agro.
              </h2>
              <p className="mt-8 text-xl text-veratio-gray dark:text-muted-foreground leading-relaxed">
                Plataforma de gestão de cafeicultura desenvolvida internamente pela Veratio Tech —
                prova de que entendemos o setor de ponta a ponta.
              </p>
              <ul className="mt-8 space-y-3 text-[15px] text-veratio-gray dark:text-muted-foreground">
                {[
                  "Controle de safra e talhões",
                  "Rastreabilidade do grão",
                  "Indicadores operacionais e financeiros",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Sparkles className="h-4 w-4 text-veratio-blue mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="lg:col-span-6" delay={120} variant="scale">
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-veratio-bg-gray/60 dark:bg-muted/30 shadow-veratio-lg transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-veratio-xl">
                <img
                  src={cadernoCafeImage}
                  alt="Caderno do Café — plataforma SaaS de gestão de cafeicultura"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-pill bg-veratio-navy/90 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-xs font-medium text-white">
                  Em produção
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CadernoCafeSection;
