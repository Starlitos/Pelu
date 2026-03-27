import { Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const ScissorsAnimation = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="relative w-full h-full flex items-center justify-center"
    whileHover={{ scale: 1.02 }}
  >
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      className="w-full h-auto max-w-[300px]"
      style={{ filter: 'drop-shadow(0 6px 25px rgba(0,0,0,0.15))' }}
    >
      <defs>
        <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </linearGradient>
      </defs>
      
      {/* First scissor blade */}
      <motion.g
        animate={{ rotate: [0, 12, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 5, 
          ease: "easeInOut",
          repeatDelay: 1
        }}
        transformOrigin="150 150"
      >
        {/* Blade */}
        <path
          d="M150 60 L135 90 L140 120 L145 150 L150 180 L155 150 L160 120 L165 90 Z"
          fill="url(#metalGradient)"
          stroke="none"
        />
        {/* Cutting edge line */}
        <line
          x1="150"
          y1="60"
          x2="165"
          y2="90"
          stroke="#ffffff"
          strokeWidth="0.5"
          opacity="0.3"
        />
        {/* Handle ring */}
        <ellipse
          cx="150"
          cy="50"
          rx="12"
          ry="18"
          fill="none"
          stroke="url(#handleGradient)"
          strokeWidth="3"
        />
        {/* Finger rest */}
        <path
          d="M165 45 Q175 40 180 45"
          fill="none"
          stroke="url(#handleGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Screw detail */}
        <circle cx="150" cy="150" r="4" fill="url(#metalGradient)" />
        <circle cx="150" cy="150" r="2" fill="#ffffff" opacity="0.3" />
      </motion.g>
      
      {/* Second scissor blade */}
      <motion.g
        animate={{ rotate: [0, -12, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 5, 
          ease: "easeInOut",
          repeatDelay: 1
        }}
        transformOrigin="150 150"
      >
        {/* Blade */}
        <path
          d="M150 60 L135 90 L140 120 L145 150 L150 180 L155 150 L160 120 L165 90 Z"
          fill="url(#metalGradient)"
          stroke="none"
          opacity="0.85"
        />
        {/* Cutting edge line */}
        <line
          x1="150"
          y1="60"
          x2="135"
          y2="90"
          stroke="#ffffff"
          strokeWidth="0.5"
          opacity="0.3"
        />
        {/* Handle ring */}
        <ellipse
          cx="150"
          cy="50"
          rx="12"
          ry="18"
          fill="none"
          stroke="url(#handleGradient)"
          strokeWidth="3"
        />
        {/* Screw hole */}
        <circle cx="150" cy="150" r="3" fill="none" stroke="url(#metalGradient)" strokeWidth="2" />
      </motion.g>
      
      {/* Center screw */}
      <motion.g
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ 
          repeat: Infinity, 
          duration: 5, 
          ease: "easeInOut"
        }}
      >
        <circle cx="150" cy="150" r="6" fill="url(#metalGradient)" />
        <circle cx="150" cy="150" r="4" fill="#2a2a2a" />
        <circle cx="150" cy="150" r="2" fill="#ffffff" opacity="0.4" />
      </motion.g>
      
      {/* Brand/decorative element */}
      <motion.text
        x="150"
        y="220"
        textAnchor="middle"
        fontSize="8"
        fill="url(#metalGradient)"
        opacity="0.2"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut"
        }}
      >
        PREMIUM
      </motion.text>
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
