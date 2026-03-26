import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "María L.",
    text: "Llevo más de 15 años yendo a Inés y no cambio. El trato es increíble y siempre salgo encantada con el resultado.",
    rating: 5,
  },
  {
    name: "Carmen R.",
    text: "El mejor salón de la zona sin duda. Mary es una artista con el color y el lavado con masaje es espectacular.",
    rating: 5,
  },
  {
    name: "Ana G.",
    text: "Me hicieron una corrección de color perfecta después de un desastre. Profesionales de verdad.",
    rating: 5,
  },
];

const Reviews = () => (
  <section id="opiniones" className="py-24 bg-card">
    <div className="container">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        Opiniones
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-heading text-3xl md:text-4xl text-foreground mb-4"
      >
        Más de 200 clientes confían en nosotras
      </motion.h2>
      <div className="flex justify-center gap-1 mb-16">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} className="fill-salon-gold text-salon-gold" />
        ))}
        <span className="ml-2 text-muted-foreground text-sm">4,6 / 5</span>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-background p-8 border border-border"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} size={14} className="fill-salon-gold text-salon-gold" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 italic">"{r.text}"</p>
            <p className="text-foreground font-bold text-sm">{r.name}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Cam%C3%AD+de+Son+Rapinya+42%2C+40-42%2C+Ponent%2C+07013+Sa+Vileta+-+Son+Rapinya%2C+Illes+Balears%2C+Espa%C3%B1a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
        >
          Ver todas las reseñas en Google
        </a>
      </div>
    </div>
  </section>
);

export default Reviews;
