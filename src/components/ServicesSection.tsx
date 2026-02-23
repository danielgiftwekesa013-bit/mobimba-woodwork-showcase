import { motion } from "framer-motion";
import serviceBeds from "@/assets/service-beds.jpg";
import serviceSofas from "@/assets/service-sofas.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceWardrobes from "@/assets/service-wardrobes.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceDoors from "@/assets/service-doors.jpg";

const services = [
  { title: "Beds & Custom Furniture", desc: "High-quality modern and classic beds.", image: serviceBeds },
  { title: "Sofa Seats", desc: "Luxury and custom-made sofas.", image: serviceSofas },
  { title: "Interior Design", desc: "Full room wood finishing and design.", image: serviceInterior },
  { title: "Wardrobes", desc: "Built-in and custom wardrobes.", image: serviceWardrobes },
  { title: "Kitchen Cabinets", desc: "Modern and elegant kitchen fittings.", image: serviceKitchen },
  { title: "Repair Services", desc: "Furniture restoration and repairs.", image: serviceRepair },
  { title: "Doors & Locks", desc: "Strong custom wooden doors and secure lock installation.", image: serviceDoors },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Our <span className="text-gold">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative rounded-lg overflow-hidden bg-mahogany shadow-xl hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-heading font-bold text-gold mb-2">{service.title}</h3>
                <p className="text-cream/70 text-sm font-body">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
