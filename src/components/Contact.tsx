import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.contact.title1}
          </h2>
          <p className="text-lg text-primary-foreground/80 mt-4">
            {t.contact.title2}
          </p>
        </motion.div>

        <p className="text-center text-primary-foreground/70 max-w-2xl mx-auto mb-12">
          {t.contact.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <motion.a
            href="tel:+41223107754"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group text-center p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
          >
            <div className="inline-block p-3 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors mb-4">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">
              {t.contact.phone}
            </h3>
            <p className="text-primary-foreground/80">+41 22 310 77 54</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:orsoartsdelatable@bluewin.ch"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group text-center p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
          >
            <div className="inline-block p-3 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors mb-4">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">
              {t.contact.email}
            </h3>
            <p className="text-primary-foreground/80 text-sm break-all">
              orsoartsdelatable@bluewin.ch
            </p>
          </motion.a>

          {/* Address */}
          <motion.a
            href="https://maps.google.com/?q=Rue+du+Prince+8,+1204+Genève"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group text-center p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
          >
            <div className="inline-block p-3 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors mb-4">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">
              {t.contact.address}
            </h3>
            <p className="text-primary-foreground/80">
              Rue du Prince 8
              <br />
              1204 Genève, CH
            </p>
          </motion.a>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-medium mb-12 h-96"
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="ORSO Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.6295285577456!2d6.1483530761674!3d46.20277327106749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39f5e4e8e8e8%3A0x8f8f8f8f8f8f8f8f!2sRue%20du%20Prince%208%2C%201204%20Gen%C3%A8ve!5e0!3m2!1sen!2sch!4v1234567890"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <a href="https://maps.google.com/?q=Rue+du+Prince+8,+1204+Genève" target="_blank" rel="noopener noreferrer">
              {t.contact.cta}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
