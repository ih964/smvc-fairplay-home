import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    details: ["Pinksterbloem 91 A", "4102 KD Culemborg"],
  },
  {
    icon: Phone,
    title: "Telefoon",
    details: ["06-14393886"],
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["info@smvcfairplay.nl"],
  },
  {
    icon: Clock,
    title: "Trainingstijden",
    details: ["Wo, Vr: 18:00 - 21:00"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Heb je vragen of wil je meer weten over onze club? Neem gerust contact met ons op!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl p-8 shadow-lg border border-border"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Stuur een Bericht</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="Jouw naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="jouw@email.nl"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Onderwerp
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="Waar gaat het over?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                  placeholder="Typ hier je bericht..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-heading font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Verstuur Bericht
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-background rounded-xl shadow-md border border-border"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <div className="h-64 bg-muted rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.8!2d5.228!3d51.957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63e5c8b8b8b8b%3A0x0!2sPinksterbloem%2091%2C%204102%20KD%20Culemborg!5e0!3m2!1snl!2snl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie SMVC Fair Play"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
