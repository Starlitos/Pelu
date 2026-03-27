import { Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center bg-background">
    {/* Subtle gradient background matching site theme */}
    <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted" />

    <div className="container relative z-10 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <p className="text-salon-warm-gray text-sm tracking-[0.3em] uppercase mb-4 font-body">
          Son Rapinya · Palma de Mallorca
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
          Tu peluquería de confianza desde hace más de 20 años
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
          Trato cercano, resultados profesionales y un equipo que cuida cada detalle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+34971798464"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm tracking-widest uppercase font-bold hover:bg-foreground/90 transition-colors"
          >
            <Phone size={16} />
            Llamar ahora
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-foreground/5 transition-colors"
          >
            Ver servicios
          </a>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
    >
      <ArrowDown size={24} />
    </motion.div>
  </section>
);

export default Hero;
