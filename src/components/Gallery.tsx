import { motion } from "framer-motion";
import { Camera } from "lucide-react";

import teamBack from "@/assets/gallery/team-back.jpg";
import celebration from "@/assets/gallery/celebration.jpg";
import duel from "@/assets/gallery/duel.jpg";
import action from "@/assets/gallery/action.jpg";
import tackle from "@/assets/gallery/tackle.jpg";
import teamspirit from "@/assets/gallery/teamspirit.jpg";
import hug from "@/assets/gallery/hug.jpg";
import coach from "@/assets/gallery/coach.jpg";

const photos = [
  { src: teamspirit, alt: "Teamgeest", span: "md:col-span-2" },
  { src: celebration, alt: "Doelpunt vieren", span: "" },
  { src: action, alt: "Actie op het veld", span: "" },
  { src: duel, alt: "Duel", span: "" },
  { src: hug, alt: "Samenwerking", span: "" },
  { src: tackle, alt: "Tackle", span: "md:col-span-2" },
  { src: coach, alt: "Trainer langs de lijn", span: "" },
  { src: teamBack, alt: "Team van achteren", span: "" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Camera className="w-4 h-4" />
            <span className="text-sm font-medium">Fotografie: Serge Sarramat</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sfeerbeelden
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beleef de passie en emotie van SMVC Fair Play op en naast het veld.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-xl group ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <span className="text-primary-foreground font-heading font-medium">
                    {photo.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
