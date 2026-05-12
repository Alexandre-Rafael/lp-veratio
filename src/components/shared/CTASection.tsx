import { Button } from "@/components/ui/button";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { RESPONDI_URL, WHATSAPP_URL } from "@/lib/constants";
import Reveal from "@/components/shared/Reveal";
import MagneticButton from "@/components/shared/MagneticButton";
import SectionLabel from "@/components/shared/SectionLabel";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}

const CTASection = ({
  title = "Seu projeto tem prazo. Vamos conversar antes que ele passe.",
  subtitle = "15 minutos de diagnóstico para saber se faz sentido avançar. Sem compromisso.",
  eyebrow = "Vamos conversar",
}: CTASectionProps) => {
  return (
    <section className="relative py-24 lg:py-32 bg-veratio-navy text-white overflow-hidden">
      <div className="absolute inset-0 dot-grid-white opacity-[0.35]" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-veratio-blue/20 blur-[120px] animate-blob"
        aria-hidden="true"
      />

      <div className="container relative mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionLabel variant="light" className="mx-auto">
              {eyebrow}
            </SectionLabel>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <h2 className="text-display-lg text-white">{title}</h2>
          </Reveal>
          <Reveal delay={200} className="mt-8 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">{subtitle}</p>
          </Reveal>
          <Reveal
            delay={300}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton strength={0.25}>
              <Button
                asChild
                className="group h-14 rounded-pill bg-white px-8 text-[15px] font-medium text-veratio-navy hover:bg-veratio-light-blue hover:text-white hover:shadow-veratio-glow transition-all duration-300"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar pelo WhatsApp
                </a>
              </Button>
            </MagneticButton>
            <Button
              asChild
              variant="ghost"
              className="group h-14 rounded-pill px-6 text-[15px] font-medium text-white/80 hover:bg-white/10 hover:text-white"
            >
              <a href={RESPONDI_URL} target="_blank" rel="noopener noreferrer">
                Agendar diagnóstico
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
