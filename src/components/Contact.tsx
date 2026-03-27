import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (phone: string) => {
    const phoneDigits = phone.replace(/\D/g, ''); // Remove all non-digit characters
    if (phoneDigits.length === 0) {
      setPhoneError("");
      return true;
    } else if (phoneDigits.length !== 9) {
      setPhoneError("El teléfono debe tener exactamente 9 dígitos");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, phone: value });
    validatePhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePhone(form.phone)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("Nombre", form.name);
      formData.append("Telefono", form.phone);
      formData.append("Mensaje", form.message);

      const response = await fetch("https://api.sheetmonkey.io/form/jLto4eUGamhdKBvnCLnctf", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setForm({ name: "", phone: "", message: "" });
        setPhoneError("");
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M33.3334 10L15 28.3333L6.66669 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              ¡Reserva enviada con éxito!
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Te contactaremos pronto para confirmar tu cita.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm tracking-widest uppercase font-bold hover:bg-foreground/90 transition-colors"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

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
            action="https://api.sheetmonkey.io/form/jLto4eUGamhdKBvnCLnctf"
            method="POST"
          >
            <div>
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">Nombre</label>
              <input
                type="text"
                name="Nombre"
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
                name="Telefono"
                required
                value={form.phone}
                onChange={handlePhoneChange}
                className={`w-full border bg-background px-4 py-3 text-foreground focus:outline-none transition-colors resize-none ${
                  phoneError 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-border focus:border-salon-sand'
                }`}
                placeholder="9 dígitos"
                maxLength={12}
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-2">{phoneError}</p>
              )}
            </div>
            <div>
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">Mensaje</label>
              <textarea
                name="Mensaje"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-foreground focus:border-salon-sand focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-foreground text-background py-4 text-sm tracking-widest uppercase hover:bg-salon-charcoal/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
