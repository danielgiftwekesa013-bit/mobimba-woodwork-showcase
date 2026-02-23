import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina Wanjiru",
    location: "Mitambo",
    text: "Mobimba Junior transformed our living room with the most beautiful sofa set. The quality of the wood and upholstery is exceptional. Highly recommended!",
  },
  {
    name: "Joseph Ochieng",
    location: "Crossroad",
    text: "The custom wardrobe they built for our bedroom is stunning. Perfect fit, beautiful mahogany finish, and it was delivered right on time. True craftsmen!",
  },
  {
    name: "Fatuma Hassan",
    location: "Gatua",
    text: "Their kitchen cabinets are a work of art. Our kitchen now looks like it belongs in a magazine. Professional service from start to finish.",
  },
  {
    name: "David Kamau",
    location: "Nakuru",
    text: "We hired them for interior wood finishing throughout our new home. The attention to detail is incredible. Every guest compliments our beautiful woodwork.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            What Our <span className="text-gold">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-mahogany/60 backdrop-blur p-6 rounded-lg border border-gold/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-cream/80 font-body text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="text-gold font-heading font-semibold">{t.name}</p>
                <p className="text-cream/50 text-xs font-body">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
