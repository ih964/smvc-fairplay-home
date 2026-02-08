import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserPlus } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Over Ons", href: "#about" },
  { label: "Teams", href: "#teams" },
  { label: "Foto's", href: "#gallery" },
  { label: "Nieuws", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-secondary/98 backdrop-blur-md shadow-lg" 
          : "bg-secondary/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 md:gap-3">
            <img src={logo} alt="SMVC Fair Play" className="h-10 md:h-14 w-auto" />
            <span className="hidden sm:block font-heading font-bold text-sm md:text-lg text-primary">
              SMVC Fair Play
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-sm lg:text-base text-secondary-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 font-heading font-bold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <UserPlus className="w-4 h-4" />
              Word Lid
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-foreground hover:text-primary transition-colors p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-secondary"
            >
              <div className="flex flex-col gap-1 px-4 pb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-medium text-secondary-foreground hover:text-primary hover:bg-secondary-foreground/5 transition-colors py-3 px-3 rounded-lg"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 font-heading font-bold bg-primary text-primary-foreground rounded-lg"
                >
                  <UserPlus className="w-4 h-4" />
                  Word Lid
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
