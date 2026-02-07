import { motion } from "framer-motion";
import { Users } from "lucide-react";

const teams = [
  {
    name: "Senioren 1",
    category: "Zondag",
    color: "bg-field-green",
  },
  {
    name: "Senioren 2",
    category: "Zondag",
    color: "bg-field-green",
  },
  {
    name: "Senioren 3",
    category: "Zondag",
    color: "bg-field-green",
  },
  {
    name: "Senioren 2",
    category: "Zaterdag",
    color: "bg-primary",
  },
  {
    name: "JO17-1",
    category: "Jeugd",
    color: "bg-secondary",
  },
];

const Teams = () => {
  return (
    <section id="teams" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Onze Teams
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Van de jongste spelers tot de ervaren senioren, ontdek onze diverse teams.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Header with team color */}
              <div className={`${team.color} p-4`}>
                <h3 className="font-heading font-bold text-xl text-primary-foreground">
                  {team.name}
                </h3>
                <span className="text-sm text-primary-foreground/80">
                  {team.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Team {team.category}</span>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Competitie Stand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Competitie Stand
          </h3>
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden overflow-x-auto">
            <iframe 
              src="https://embed.hollandsevelden.nl/competities/2025-2026/zuid-1/zo/4c/?sTFC=%23141414&sBC=%23ffffff&sAC=%23f5f5f0" 
              className="w-full"
              style={{ height: '1700px', border: 0, minWidth: '320px' }}
              title="Competitie stand SMVC Fair Play"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Wil je ook deel uitmaken van een van onze teams?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 font-heading font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Meld Je Aan
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Teams;
