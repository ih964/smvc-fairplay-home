import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/80" />

      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img
            src={logo}
            alt="SMVC Fair Play"
            className="w-40 h-40 md:w-56 md:h-56 mx-auto drop-shadow-2xl animate-float"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-secondary mb-4"
        >
          SMVC Fair Play
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-8"
        >
          Waar passie voor voetbal en sportiviteit samenkomen. 
          Welkom bij onze vereniging!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 font-heading font-bold text-lg bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Ontdek Meer
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-heading font-bold text-lg bg-transparent border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
          >
            Word Lid
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary/60 hover:text-secondary transition-colors cursor-pointer"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
