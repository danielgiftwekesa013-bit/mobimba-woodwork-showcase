import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 gradient-mahogany" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-cream leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Timeless Furniture{" "}
          <span className="text-gold italic">Crafted With Passion</span>
        </motion.h1>

        <motion.p
          className="text-cream/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Premium woodwork solutions tailored to your space.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-gold text-warm-black font-body font-bold rounded-md hover:bg-gold-light transition-colors text-sm tracking-wider uppercase"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gold text-gold font-body font-bold rounded-md hover:bg-gold hover:text-warm-black transition-colors text-sm tracking-wider uppercase"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
