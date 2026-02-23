import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import serviceBeds from "@/assets/service-beds.jpg";
import serviceSofas from "@/assets/service-sofas.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceWardrobes from "@/assets/service-wardrobes.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceDoors from "@/assets/service-doors.jpg";
import portfolioDining from "@/assets/portfolio-dining.jpg";
import portfolioTvstand from "@/assets/portfolio-tvstand.jpg";

const galleryItems = [
  { src: serviceBeds, label: "Modern Bed" },
  { src: serviceSofas, label: "L-Shaped Sofa" },
  { src: serviceInterior, label: "Interior Design" },
  { src: serviceWardrobes, label: "Custom Wardrobe" },
  { src: serviceKitchen, label: "Kitchen Cabinets" },
  { src: portfolioTvstand, label: "TV Stand" },
  { src: serviceDoors, label: "Wooden Door" },
  { src: portfolioDining, label: "Dining Table" },
];

const PortfolioGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gold">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid cursor-pointer group relative rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(i)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-warm-black/0 group-hover:bg-warm-black/50 transition-colors duration-300 flex items-end">
                <span className="text-cream font-heading font-semibold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-warm-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.img
              src={galleryItems[selected].src}
              alt={galleryItems[selected].label}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGallery;
