import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello Mobimba Junior Woodwork! My name is ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/254795721678?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold text-foreground">Reach Us</h3>
            <div className="space-y-4">
              <a
                href="tel:0795721678"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors font-body"
              >
                <Phone size={20} className="text-gold" />
                0795721678
              </a>
              <a
                href="https://wa.me/254795721678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors font-body"
              >
                <MessageCircle size={20} className="text-gold" />
                WhatsApp Us
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-4">
              <h4 className="text-lg font-heading font-semibold text-foreground">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/dzadzy_manuar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gold hover:bg-gold hover:text-warm-black transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a
                  href="https://instagram.com/dzadzy_manuar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gold hover:bg-gold hover:text-warm-black transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                </a>
                <a
                  href="https://tiktok.com/@dzadzy_manuar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gold hover:bg-gold hover:text-warm-black transition-colors"
                  aria-label="TikTok"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2 6.34 6.34 0 009.49 21.5a6.34 6.34 0 006.34-6.34V8.73A8.19 8.19 0 0019.59 10V6.69z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground font-body focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground font-body focus:outline-none focus:border-gold transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground font-body focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gold text-warm-black font-body font-bold rounded-md hover:bg-gold-light transition-colors text-sm tracking-wider uppercase"
            >
              {submitted ? "✓ Opening WhatsApp..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
