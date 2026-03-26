import { motion } from "framer-motion";
import salonImg from "@/assets/salon-working.png";

const About = () => (
  <section id="nosotras" className="py-24 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden"
        >
          <img
            src={salonImg}
            alt="Equipo de Peluquería Inés Iglesias trabajando"
            className="w-full h-[500px] object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Sobre nosotras</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Una historia de pasión por el cabello
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Inés Iglesias abrió las puertas de su salón en Son Rapinya hace más de dos décadas con una visión clara:
              ofrecer un servicio de peluquería donde cada cliente se sienta en casa.
            </p>
            <p>
              Hoy, junto a Mari y un equipo de profesionales apasionados, seguimos fieles a esa filosofía.
              Nos formamos continuamente en las últimas tendencias y técnicas para ofrecerte siempre lo mejor.
            </p>
            <p>
              Creemos en la atención personalizada, en escuchar lo que necesitas y en cuidar cada detalle.
              Porque tu confianza es nuestro mayor logro.
            </p>
          </div>
          <div className="mt-8 flex gap-12">
            <div>
              <span className="font-heading text-4xl text-foreground">20+</span>
              <p className="text-sm text-muted-foreground mt-1">Años de experiencia</p>
            </div>
            <div>
              <span className="font-heading text-4xl text-foreground">4,6</span>
              <p className="text-sm text-muted-foreground mt-1">Estrellas en Google</p>
            </div>
            <div>
              <span className="font-heading text-4xl text-foreground">200+</span>
              <p className="text-sm text-muted-foreground mt-1">Reseñas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
