import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import woodTexture from "@/assets/wood-texture.jpg";
import serviceBeds from "@/assets/service-beds.jpg";
import serviceSofas from "@/assets/service-sofas.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceWardrobes from "@/assets/service-wardrobes.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceDoors from "@/assets/service-doors.jpg";

const splashImages = [serviceBeds, serviceSofas, serviceKitchen, serviceWardrobes];

const services = [
  { name: "Beds & All Furniture", icon: "🛏", image: serviceBeds },
  { name: "Sofa Seats", icon: "🛋", image: serviceSofas },
  { name: "Interior Design", icon: "🏡", image: serviceInterior },
  { name: "Wardrobes", icon: "🚪", image: serviceWardrobes },
  { name: "Kitchen Cabinets", icon: "🍽", image: serviceKitchen },
  { name: "Repair Services", icon: "🔧", image: serviceRepair },
  { name: "Doors & Locks", icon: "🔐", image: serviceDoors },
];

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<"splash" | "services" | "done">("splash");
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % splashImages.length);
    }, 1000);

    const timer = setTimeout(() => {
      clearInterval(imageInterval);
      setPhase("services");
    }, 3500);

    return () => {
      clearInterval(imageInterval);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (phase === "services") {
      const timer = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-mahogany-dark"
            style={{
              backgroundImage: `url(${woodTexture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-warm-black/80" />
          </div>

          {phase === "splash" && (
            <motion.div
              className="relative z-10 flex flex-col items-center text-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Rotating Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 border-4 border-gold/50 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={splashImages[currentImage]}
                    alt="Furniture"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>

              {/* Brand Name */}
              <motion.h1
                className="text-4xl md:text-6xl font-heading font-bold gold-shimmer mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Mobimba Junior Woodwork
              </motion.h1>

              {/* Slogan */}
              <motion.p
                className="text-cream/80 text-base md:text-lg font-body max-w-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Quality craftsmanship you can trust – Built to last, designed for comfort.
              </motion.p>

              {/* Loading dots */}
              <motion.div
                className="flex gap-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gold"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {phase === "services" && (
            <motion.div
              className="relative z-10 w-full max-w-4xl px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-heading text-gold text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Our Services
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services.map((service, i) => (
                  <motion.div
                    key={service.name}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-mahogany/50 backdrop-blur border border-gold/20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30">
                      <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-cream text-xs md:text-sm text-center font-body">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
