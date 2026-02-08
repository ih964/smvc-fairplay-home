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
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary mb-4 drop-shadow-lg"
        >
          SMVC Fair Play
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 drop-shadow-md"
        >
          Waar passie voor voetbal en sportiviteit samenkomen. 
          Welkom bij onze vereniging!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-heading font-bold text-base md:text-lg bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
          >
            Word Lid
          </a>
          <a
            href="#teams"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-heading font-bold text-base md:text-lg bg-field-green text-white rounded-lg hover:bg-field-green/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
          >
            Bekijk Uitslagen
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-heading font-bold text-base md:text-lg bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white hover:text-secondary transition-all duration-300 active:scale-95"
          >
            Ontdek Meer
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
