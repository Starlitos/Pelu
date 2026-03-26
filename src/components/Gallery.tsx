import { motion } from "framer-motion";
import img1 from "@/assets/hair-result-1.png";
import img2 from "@/assets/salon-interior-1.png";
import img3 from "@/assets/salon-interior-2.png";
import img4 from "@/assets/hair-result-2.png";
import img5 from "@/assets/salon-working.png";
import img6 from "@/assets/salon-exterior.png";

const images = [
  { src: img1, alt: "Resultado de color castaño cobrizo" },
  { src: img2, alt: "Interior del salón – recepción" },
  { src: img4, alt: "Resultado balayage rubio" },
  { src: img5, alt: "Estilista trabajando en el salón" },
  { src: img3, alt: "Interior del salón – productos" },
  { src: img6, alt: "Exterior de Peluquería Inés Iglesias" },
];

const Gallery = () => (
  <section id="galeria" className="py-24 bg-background">
    <div className="container">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        Galería
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-heading text-3xl md:text-4xl text-foreground mb-16"
      >
        Nuestro trabajo habla por sí solo
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="overflow-hidden group aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
