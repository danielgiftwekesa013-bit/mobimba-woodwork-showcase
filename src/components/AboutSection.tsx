import { motion } from "framer-motion";
import woodTexture from "@/assets/wood-texture.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: "cover" }}
      />
      <div className="relative container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About <span className="text-gold">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-body">
            <span className="font-bold text-foreground">Mobimba Junior Woodwork</span> specializes in high-quality
            handcrafted furniture, interior finishing, custom wood solutions, and repair services. Every piece is
            designed for durability, beauty, and comfort. Based in Kenya, we bring artisan craftsmanship to modern
            living spaces, transforming houses into homes with the warmth and elegance of natural wood.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
