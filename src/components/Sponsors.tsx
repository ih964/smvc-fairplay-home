import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import harkasIt from "@/assets/sponsors/harkas_it.png";
import kcTraining from "@/assets/sponsors/kc_training.jpg";
import limpeza from "@/assets/sponsors/limpeza.jpg";
import afagAdvies from "@/assets/sponsors/afag_advies.jpg";
import saddikElektro from "@/assets/sponsors/saddik_elektro.jpg";
import kcCar from "@/assets/sponsors/kc_car.jpeg";
import ionut from "@/assets/sponsors/ionut.jpeg";

const sponsors = [
  { name: "Harkas IT", logo: harkasIt },
  { name: "KC Training Coaching Advies", logo: kcTraining },
  { name: "Limpeza Klusbedrijf", logo: limpeza },
  { name: "AFAG Advies", logo: afagAdvies },
  { name: "Saddik Elektro", logo: saddikElektro },
  { name: "KC Car Care", logo: kcCar },
  { name: "Ionut Uitzendbureau", logo: ionut },
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
                <div className="bg-card rounded-xl p-6 h-28 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-20 max-w-full w-auto object-contain"
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
