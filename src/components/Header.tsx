import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, lang, otherLangs } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span
            className={`font-serif text-xl font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            ORSO
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.about}
          </a>
          <a
            href="#services"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#gallery"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href="#hours"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
            {otherLangs.map((item) => (
              <Link
                key={item.lang}
                to={item.path}
                className={`text-xs font-medium uppercase px-2 py-1 rounded transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.lang}
              </Link>
            ))}
          </div>

          <Button
            asChild
            size="sm"
            className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <a href="tel:+41223107754">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a
              href="#about"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.about}
            </a>
            <a
              href="#services"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.services}
            </a>
            <a
              href="#gallery"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.gallery}
            </a>
            <a
              href="#hours"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.hours}
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>

            <div className="pt-3 border-t space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {otherLangs.map((item) => (
                  <Link
                    key={item.lang}
                    to={item.path}
                    className="text-xs font-medium uppercase px-2 py-1 rounded text-primary hover:text-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.lang}
                  </Link>
                ))}
              </div>
              <Button
                asChild
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href="tel:+41223107754">
                  <Phone className="h-4 w-4 mr-2" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
