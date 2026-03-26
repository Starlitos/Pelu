import { motion } from "framer-motion";
import { Heart, Award, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Trato cercano",
    desc: "Nos conocemos por tu nombre. Cada visita es una experiencia personal y cálida.",
  },
  {
    icon: Award,
    title: "Alta profesionalidad",
    desc: "Más de 20 años perfeccionando técnicas de corte, color y cuidado capilar.",
  },
  {
    icon: Sparkles,
    title: "Experiencia relajante",
    desc: "Nuestro lavado con masaje es un momento de bienestar que nuestros clientes adoran.",
  },
];

const Trust = () => (
  <section className="py-24 bg-card">
    <div className="container">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        ¿Por qué elegirnos?
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-heading text-3xl md:text-4xl text-foreground mb-16"
      >
        Más de 20 años cuidando de ti
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <p.icon size={28} className="text-salon-gold" />
            </div>
            <h3 className="font-heading text-xl mb-3 text-foreground">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Trust;
