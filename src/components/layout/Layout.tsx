import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-pill bg-[#25D366] text-white shadow-veratio-lg transition-all duration-300 ease-out-expo hover:scale-110 hover:shadow-veratio-xl"
      >
        {/* Ambient glow */}
        <span className="absolute inset-0 -z-10 animate-glow-pulse rounded-pill bg-[#25D366]/40 blur-xl" />
        <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[8deg]" fill="currentColor" />
      </a>
    </div>
  );
};

export default Layout;
