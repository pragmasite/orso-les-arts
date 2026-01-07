import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Opening hours: Monday-Friday, Saturday
  const schedule = [
    { hours: "13:30 - 18:30" }, // Monday
    { hours: "09:00 - 12:00, 13:30 - 18:30" }, // Tuesday
    { hours: "09:00 - 12:00, 13:30 - 18:30" }, // Wednesday
    { hours: "09:00 - 12:00, 13:30 - 18:30" }, // Thursday
    { hours: "09:00 - 12:00, 13:30 - 18:30" }, // Friday
    { hours: "09:00 - 12:00, 13:30 - 17:00" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <section id="hours" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-primary">
              {t.hours.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2">
              {t.hours.title}
            </h2>
          </div>

          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold text-primary">
                {t.hours.header}
              </span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                      <span
                        className={`${
                          isToday ? "font-bold text-primary" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-right ${
                        isClosed ? "text-muted-foreground" : ""
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
