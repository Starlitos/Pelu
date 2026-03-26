import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-12 bg-foreground text-background/70">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-heading text-xl text-background mb-1">Inés Iglesias</p>
          <p className="text-sm">Peluquería en Son Rapinya · Palma de Mallorca</p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="tel:+34971798464" className="flex items-center gap-2 hover:text-background transition-colors">
            <Phone size={14} />
            971 79 84 64
          </a>
        </div>
      </div>
      <div className="border-t border-background/10 mt-8 pt-8 text-center text-xs text-background/40">
        © {new Date().getFullYear()} Peluquería Inés Iglesias. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
