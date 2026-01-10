import { motion } from "framer-motion";
import { Target, Users, Trophy, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Fair Play",
    description: "Respect en sportiviteit staan bij ons centraal, zowel op als naast het veld.",
  },
  {
    icon: Users,
    title: "Saamhorigheid",
    description: "Een hechte gemeenschap waar iedereen welkom is en zich thuis voelt.",
  },
  {
    icon: Trophy,
    title: "Ontwikkeling",
    description: "We stimuleren persoonlijke groei en voetbalontwikkeling voor alle leeftijden.",
  },
  {
    icon: Target,
    title: "Ambitie",
    description: "Met passie en toewijding streven we naar het beste in elke wedstrijd.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Over Onze Club
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            SMVC Fair Play is meer dan alleen een voetbalclub. Wij zijn een familie van 
            voetballiefhebbers die samenkomt door de liefde voor de sport en de waarden 
            van fair play en respect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Club History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
                Onze Geschiedenis
              </h3>
              <p className="text-secondary-foreground/80 mb-4">
                Sinds onze oprichting staat SMVC Fair Play bekend om haar toewijding aan 
                de sport en aan haar leden. Door de jaren heen hebben we een sterke 
                gemeenschap opgebouwd van spelers, trainers en supporters.
              </p>
              <p className="text-secondary-foreground/80">
                Vandaag de dag zijn we trots op onze diverse teams, van de jongste jeugd 
                tot de senioren, die allemaal de waarden van fair play uitdragen.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-secondary-foreground/10 rounded-xl p-6">
                <span className="block font-heading text-4xl font-black text-secondary-foreground">100+</span>
                <span className="text-secondary-foreground/70">Leden</span>
              </div>
              <div className="bg-secondary-foreground/10 rounded-xl p-6">
                <span className="block font-heading text-4xl font-black text-secondary-foreground">8</span>
                <span className="text-secondary-foreground/70">Teams</span>
              </div>
              <div className="bg-secondary-foreground/10 rounded-xl p-6">
                <span className="block font-heading text-4xl font-black text-secondary-foreground">25+</span>
                <span className="text-secondary-foreground/70">Jaar</span>
              </div>
              <div className="bg-secondary-foreground/10 rounded-xl p-6">
                <span className="block font-heading text-4xl font-black text-secondary-foreground">∞</span>
                <span className="text-secondary-foreground/70">Passie</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
