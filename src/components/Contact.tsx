import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nombre: ${form.name}%0ATel: ${form.phone}%0AMensaje: ${form.message}`;
    window.open(`mailto:info@peluqueriainesiglesias.com?subject=Contacto desde la web&body=${body}`);
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Contacto
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-3xl md:text-4xl text-foreground mb-16"
        >
          Estamos encantadas de atenderte
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <MapPin size={20} className="text-salon-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Dirección</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Camí de Son Rapinya, 42, 40-42, Ponent<br />
                  07013 Sa Vileta - Son Rapinya<br />
                  Illes Balears, España
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={20} className="text-salon-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Teléfono</h3>
                <a href="tel:+34971798464" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  971 79 84 64
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={20} className="text-salon-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">Horario</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Martes a viernes: 9:00 – 19:00<br />
                  Sábado: 9:00 – 14:00<br />
                  Domingo y lunes: cerrado
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="tel:+34971798464"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm tracking-widest uppercase hover:bg-salon-charcoal/80 transition-colors"
              >
                <Phone size={14} />
                Llamar
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Cam%C3%AD+de+Son+Rapinya+42%2C+40-42%2C+Ponent%2C+07013+Sa+Vileta+-+Son+Rapinya%2C+Illes+Balears%2C+Espa%C3%B1a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                <Navigation size={14} />
                Cómo llegar
              </a>
            </div>

            {/* Map */}
            <div className="mt-6">
              <iframe
                title="Ubicación Peluquería Inés Iglesias"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.5!2d2.6084!3d39.5782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM0JzQxLjIiTiAywrAzNjA0LjgiIkU!5e0!3m2!1ses!2ses!4v1600000000000&z=19"
                width="100%"
                height="250"
                className="border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">Nombre</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-foreground focus:border-salon-sand focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">Teléfono</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-foreground focus:border-salon-sand focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">Mensaje</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-foreground focus:border-salon-sand focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-foreground text-background py-4 text-sm tracking-widest uppercase hover:bg-salon-charcoal/80 transition-colors"
            >
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
