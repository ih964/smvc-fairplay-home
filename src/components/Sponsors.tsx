import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Placeholder sponsor logos - vervang deze met echte sponsor logo's
const sponsors = [
  { name: "Sponsor 1", logo: "/placeholder.svg" },
  { name: "Sponsor 2", logo: "/placeholder.svg" },
  { name: "Sponsor 3", logo: "/placeholder.svg" },
  { name: "Sponsor 4", logo: "/placeholder.svg" },
  { name: "Sponsor 5", logo: "/placeholder.svg" },
  { name: "Sponsor 6", logo: "/placeholder.svg" },
];

const Sponsors = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(autoplay, 3000);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container-custom px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          Onze Sponsoren
        </h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-4"
              >
                <div className="bg-card rounded-xl p-6 h-24 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Interesse in sponsoring?{" "}
          <a href="#contact" className="text-primary font-medium hover:underline">
            Neem contact op
          </a>
        </p>
      </div>
    </section>
  );
};

export default Sponsors;
