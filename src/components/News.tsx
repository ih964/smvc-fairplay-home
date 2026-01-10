import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "Seizoensopening 2024",
    date: "15 januari 2024",
    excerpt: "Het nieuwe seizoen gaat van start! Kom kennismaken met alle teams en trainers tijdens onze feestelijke opening.",
    category: "Evenement",
  },
  {
    title: "Jeugdtoernooi Groot Succes",
    date: "10 januari 2024",
    excerpt: "Ons jaarlijkse jeugdtoernooi was weer een groot succes met deelname van 16 teams uit de regio.",
    category: "Nieuws",
  },
  {
    title: "Nieuwe Trainers Welkom",
    date: "5 januari 2024",
    excerpt: "We verwelkomen drie nieuwe trainers bij onze club die hun expertise zullen inzetten voor de jeugdteams.",
    category: "Club",
  },
];

const News = () => {
  return (
    <section id="news" className="section-padding bg-muted">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Laatste Nieuws
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Blijf op de hoogte van de laatste ontwikkelingen bij SMVC Fair Play.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Category banner */}
              <div className="h-2 bg-primary" />
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary-foreground rounded-full mb-4">
                  {item.category}
                </span>
                
                <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors group/btn">
                    Lees meer
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
