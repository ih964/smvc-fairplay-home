import { motion } from "framer-motion";
import { Users, Flag, Coffee, UserCheck, Heart } from "lucide-react";

const volunteerRoles = [
  {
    title: "Scheidsrechter",
    icon: Flag,
    description: "Leid wedstrijden in goede banen en zorg voor fair play op het veld.",
    commitment: "Weekenden",
    color: "bg-field-green",
    textColor: "text-white",
  },
  {
    title: "Kantine Vrijwilliger",
    icon: Coffee,
    description: "Help mee in onze gezellige kantine tijdens wedstrijden en trainingen.",
    commitment: "Flexibel",
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    title: "Trainer / Begeleider",
    icon: UserCheck,
    description: "Begeleid onze jeugd of senioren en help ze groeien als voetballers.",
    commitment: "1-2x per week",
    color: "bg-secondary",
    textColor: "text-secondary-foreground",
  },
];

const Volunteers = () => {
  return (
    <section id="vrijwilligers" className="section-padding bg-muted">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4" />
            <span className="font-medium text-sm">Word vrijwilliger</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Vrijwilligers Gezocht!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Onze club draait op vrijwilligers. Heb jij tijd en zin om bij te dragen aan onze vereniging? 
            Bekijk onze vacatures en meld je aan!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {volunteerRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Header */}
              <div className={`${role.color} p-6`}>
                <role.icon className={`w-10 h-10 ${role.textColor} mb-3`} />
                <h3 className={`font-heading font-bold text-xl ${role.textColor}`}>
                  {role.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  {role.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-foreground mb-4">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>Tijdsinvestering: <strong>{role.commitment}</strong></span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-4 py-3 font-heading font-bold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 active:scale-95"
                >
                  Aanmelden
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                Andere manier om te helpen?
              </h3>
              <p className="text-muted-foreground">
                Heb je andere talenten of ideeën om bij te dragen aan onze club? 
                We staan altijd open voor nieuwe initiatieven. Neem gerust contact op!
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 font-heading font-bold bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 active:scale-95"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteers;
