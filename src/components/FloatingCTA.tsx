import { Phone } from "lucide-react";

const FloatingCTA = () => (
  <a
    href="tel:+34971798464"
    className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-foreground text-background px-5 py-3.5 shadow-xl text-sm tracking-wider uppercase font-bold"
    aria-label="Llamar ahora"
  >
    <Phone size={18} />
    Llamar
  </a>
);

export default FloatingCTA;
