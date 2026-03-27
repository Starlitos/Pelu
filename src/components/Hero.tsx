import { Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const ScissorsAnimation = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="relative w-full h-full flex items-center justify-center"
    whileHover={{ scale: 1.05 }}
  >
    <svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      className="w-full h-auto max-w-[280px]"
      style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.1))' }}
    >
      <defs>
        <linearGradient id="scissorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#333333" />
        </linearGradient>
      </defs>
      
      {/* First blade */}
      <motion.g
        animate={{ rotate: [0, 15, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 4, 
          ease: "easeInOut",
          repeatDelay: 0.5
        }}
        transformOrigin="140 140"
      >
        <path
          d="M140 80 L120 120 L130 140 L140 160 L150 140 L160 120 Z"
          fill="none"
          stroke="url(#scissorGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="140" cy="80" r="8" fill="url(#scissorGradient)" />
        <circle cx="120" cy="120" r="4" fill="none" stroke="url(#scissorGradient)" strokeWidth="2" />
        <circle cx="160" cy="120" r="4" fill="none" stroke="url(#scissorGradient)" strokeWidth="2" />
      </motion.g>
      
      {/* Second blade */}
      <motion.g
        animate={{ rotate: [0, -15, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 4, 
          ease: "easeInOut",
          repeatDelay: 0.5
        }}
        transformOrigin="140 140"
      >
        <path
          d="M140 80 L120 120 L130 140 L140 160 L150 140 L160 120 Z"
          fill="none"
          stroke="url(#scissorGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
        <circle cx="140" cy="80" r="8" fill="none" stroke="url(#scissorGradient)" strokeWidth="2" />
      </motion.g>
      
      {/* Center pivot */}
      <motion.circle
        cx="140"
        cy="140"
        r="6"
        fill="url(#scissorGradient)"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ 
          repeat: Infinity, 
          duration: 4, 
          ease: "easeInOut"
        }}
      />
      
      {/* Decorative elements */}
      <motion.path
        d="M80 200 Q140 180 200 200"
        fill="none"
        stroke="url(#scissorGradient)"
        strokeWidth="1"
        opacity="0.3"
        animate={{ pathLength: [0, 1] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut"
        }}
      />
    </svg>
  </motion.div>
);

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center bg-background">
    {/* Subtle gradient background matching site theme */}
    <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted" />

    <div className="container relative z-10 pt-24 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content - left side */}
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

        {/* Animation - right side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="flex items-center justify-center lg:justify-end"
        >
          <ScissorsAnimation />
        </motion.div>
      </div>
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
