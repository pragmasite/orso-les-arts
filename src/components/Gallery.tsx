import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery items with translations
  const images = [
    {
      src: "/images/img-1.jpg",
      alt: {
        fr: "Orfèvrerie de prestige",
        de: "Prestigeträchtige Silberwaren",
        en: "Prestigious silverware",
      },
    },
  ];

  const getAlt = () => {
    const langKey = localStorage.getItem("lang") || "fr";
    return images[currentIndex].alt[langKey as keyof typeof images[0].alt] || images[currentIndex].alt.fr;
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {images.length === 1 ? (
            // Single image display
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img
                src={images[0].src}
                alt={getAlt()}
                className="h-full w-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent opacity-0 hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-lg font-medium text-white">{getAlt()}</p>
              </div>
            </div>
          ) : (
            // Slider for multiple images
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={images[currentIndex].src}
                alt={getAlt()}
                className="h-full w-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent opacity-0 hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-lg font-medium text-white">{getAlt()}</p>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex
                        ? "bg-accent w-8"
                        : "bg-white/50 w-2 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
