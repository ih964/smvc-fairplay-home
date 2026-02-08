import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SMVC Fair Play" className="h-16 w-auto" />
              <span className="font-heading font-bold text-xl text-primary">SMVC Fair Play</span>
            </div>
            <p className="text-secondary-foreground/70 max-w-md">
              Waar passie voor voetbal en sportiviteit samenkomen. Wij staan voor fair play, respect en plezier in de
              sport.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-primary mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Over Ons
                </a>
              </li>
              <li>
                <a href="#teams" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Teams
                </a>
              </li>
              <li>
                <a href="#news" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Nieuws
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-primary mb-4">Volg Ons</h4>
            <p className="text-secondary-foreground/70 mb-4">
              Blijf op de hoogte van het laatste nieuws via onze sociale media.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/184cGnTwu1/"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-secondary-foreground/70 group-hover:text-primary-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 text-secondary-foreground/70 group-hover:text-primary-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © {currentYear} SMVC Fair Play. Alle rechten voorbehouden. Gemaakt door{" "}
            <a 
              href="https://harkasit.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Harkas IT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
