import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.fr;
  otherLangs: { lang: Language; path: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  let lang: Language = "fr";
  if (location.pathname.startsWith("/de")) {
    lang = "de";
  } else if (location.pathname.startsWith("/en")) {
    lang = "en";
  }

  const t = translations[lang];

  const otherLangs = [
    { lang: "fr" as Language, path: "/" },
    { lang: "de" as Language, path: "/de" },
    { lang: "en" as Language, path: "/en" },
  ].filter((l) => l.lang !== lang);

  return (
    <LanguageContext.Provider value={{ lang, t, otherLangs }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
