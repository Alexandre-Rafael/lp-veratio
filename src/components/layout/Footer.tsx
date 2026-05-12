import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-veratio.png";
import { COMPANY_DATA } from "@/config/company";
import { RESPONDI_URL } from "@/lib/constants";
import Reveal from "@/components/shared/Reveal";
import Marquee from "@/components/shared/Marquee";

const Footer = () => {
  return (
    <footer className="relative bg-veratio-navy text-white overflow-hidden">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 dot-grid-white opacity-[0.4]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[360px] w-[680px] rounded-full bg-veratio-blue/20 blur-[120px]" />
      </div>

      {/* Mega CTA marquee */}
      <div className="relative border-b border-white/10 py-10">
        <Marquee speed="slow" fade>
          {["Vamos construir", "Software que gera margem", "Agro", "Financeiro", "Squads dedicadas", "Do diagnóstico ao deploy"].map(
            (phrase, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-[26px] md:text-[38px] font-display font-medium tracking-[-0.03em] leading-none text-white/10 hover:text-white/80 transition-colors duration-500">
                  {phrase}
                </span>
                <span className="h-2 w-2 rounded-full bg-veratio-blue" />
              </div>
            ),
          )}
        </Marquee>
      </div>

      <div className="container relative mx-auto py-12 lg:py-18">
        {/* Big CTA block */}
        <Reveal className="max-w-5xl">
          <p className="text-eyebrow text-veratio-light-blue mb-6">Pronto quando você estiver</p>
          <h2 className="text-display-lg text-white mb-10">
            Vamos conversar<br />
            sobre seu <span className="text-gradient-blue">próximo sistema</span>?
          </h2>
          <a
            href={RESPONDI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-pill bg-white px-8 py-4 text-[15px] font-medium text-veratio-navy transition-all duration-300 hover:bg-veratio-light-blue hover:text-white hover:shadow-veratio-glow"
          >
            Agendar diagnóstico
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 border-t border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Veratio Tech" className="h-10 lg:h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-[15px] text-white/60 leading-relaxed max-w-sm">
              Tecnologia que gera margem e decisão para PMEs do Agro e Financeiro. Engenharia de software
              e IA de alto nível, com escopo fechado e responsabilidade técnica.
            </p>
            <div className="flex items-center gap-2">
              {[
                { Icon: Instagram, href: COMPANY_DATA.links.instagram, label: "Instagram" },
                { Icon: Linkedin, href: COMPANY_DATA.links.linkedin, label: "LinkedIn" },
                { Icon: Facebook, href: COMPANY_DATA.links.facebook, label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-white/15 text-white/70 transition-all duration-300 hover:bg-white hover:text-veratio-navy hover:border-white hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-eyebrow text-white/40 mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: "Soluções", href: "#solucoes" },
                { label: "Cases", href: "#cases" },
                { label: "Processo", href: "#processo" },
                { label: "Sobre", href: "#sobre" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-[15px] text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-veratio-light-blue" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-eyebrow text-white/40 mb-6">Contato</h4>
            <div className="flex items-start gap-3 text-white/70">
              <MapPin className="h-4 w-4 text-veratio-light-blue mt-1 flex-shrink-0" />
              <p className="text-[14px] leading-relaxed">
                {COMPANY_DATA.address.street}<br />
                {COMPANY_DATA.address.city} – {COMPANY_DATA.address.state}<br />
                CEP {COMPANY_DATA.address.zipCode}
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_DATA.contact.email}`}
              className="group flex items-center gap-3 text-[14px] text-white/70 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-veratio-light-blue flex-shrink-0" />
              {COMPANY_DATA.contact.email}
            </a>
            <div className="flex items-center gap-3 text-[14px] text-white/70">
              <Phone className="h-4 w-4 text-veratio-light-blue flex-shrink-0" />
              {COMPANY_DATA.contact.phone}
            </div>
            <div className="pt-4 text-[12px] text-white/40 space-y-1">
              <p className="font-medium text-white/60">{COMPANY_DATA.corporateName}</p>
              <p>CNPJ: {COMPANY_DATA.cnpj}</p>
              <p>Situação: {COMPANY_DATA.status}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} {COMPANY_DATA.tradeName}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-[12px] text-white/40 hover:text-white transition-colors"
            >
              Privacidade
            </Link>
            <Link
              to="/terms-of-use"
              className="text-[12px] text-white/40 hover:text-white transition-colors"
            >
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
