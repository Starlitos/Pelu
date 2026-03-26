import { motion } from "framer-motion";
import { Scissors, Palette, Droplets, Hand } from "lucide-react";

const categories = [
  {
    icon: Scissors,
    title: "Cortes y peinados",
    items: ["Mujer", "Hombre", "Infantil", "Peinados para eventos"],
  },
  {
    icon: Palette,
    title: "Color",
    items: ["Tinte", "Mechas", "Balayage", "Corrección de color"],
  },
  {
    icon: Droplets,
    title: "Tratamientos",
    items: ["Hidratación profunda", "Reparación capilar", "Cabello dañado", "Tratamientos para rubios"],
  },
  {
    icon: Hand,
    title: "Experiencia especial",
    items: ["Lavado con masaje relajante", "Asesoramiento personalizado"],
  },
];

const Services = () => (
  <section id="servicios" className="py-24 bg-card">
    <div className="container">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        Nuestros servicios
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-heading text-3xl md:text-4xl text-foreground mb-16"
      >
        Todo lo que necesitas para tu cabello
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background p-8 border border-border hover:border-salon-sand transition-colors group"
          >
            <cat.icon size={32} className="text-salon-gold mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading text-xl mb-4 text-foreground">{cat.title}</h3>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-salon-sand" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
