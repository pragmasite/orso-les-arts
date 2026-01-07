import { useLanguage } from "@/hooks/useLanguage";
import { Facebook } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-foreground-foreground py-12 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">ORSO</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-primary-foreground/70">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-bold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#hours" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">{t.nav.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+41223107754" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +41 22 310 77 54
                </a>
              </li>
              <li>
                <a href="mailto:orsoartsdelatable@bluewin.ch" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-xs">
                  orsoartsdelatable@bluewin.ch
                </a>
              </li>
              <li className="text-primary-foreground/70 pt-2">
                Rue du Prince 8<br />
                1204 Genève, CH
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold mb-4">Social</h4>
            <a
              href="https://www.facebook.com/ORSO-Les-Arts-de-la-Table-Coutellerie-Orfèvrerie-1626218547629418"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent/20 text-accent hover:bg-accent/30 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>
            © {new Date().getFullYear()} ORSO Les Arts de la Table. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
