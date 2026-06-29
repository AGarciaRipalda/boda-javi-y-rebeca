import { motion } from "framer-motion";
import { Heart, GlassWater, Utensils, Music, PartyPopper, Moon } from "lucide-react";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const events = [
  { time: "12:00 h", label: "Ceremonia", icon: Heart },
  { time: "13:00 h", label: "Cóctel", icon: GlassWater },
  { time: "14:00 h", label: "Almuerzo", icon: Utensils },
  { time: "19:00 h", label: "Baile de novios", icon: Music },
  { time: "20:00 h", label: "Barra libre", icon: PartyPopper },
  { time: "00:00 h", label: "Fin de fiesta", icon: Moon },
];

export default function ItinerarySection() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-start px-4 py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        src="/itinerario.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-14"
        loading="lazy"
      />
      <CompassRose />

      <motion.h2
        variants={fadeUp}
        className="relative z-10 mt-20 sm:mt-24 font-serif text-5xl sm:text-6xl font-bold text-foreground tracking-wider uppercase mb-10 text-center"
      >
        Itinerario
      </motion.h2>

      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-foreground/20" />

        {events.map((event, idx) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={event.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: idx * 0.15 },
                },
              }}
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-5 mb-8 relative"
            >
              <div className="justify-self-end text-right">
                <p className="font-serif text-lg sm:text-xl text-foreground font-bold">
                  {event.time}
                </p>
              </div>

              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-background/80 border border-primary/20 shadow-sm">
                <Icon className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
              </div>

              <div className="justify-self-start text-left">
                <p className="font-serif text-lg sm:text-xl text-foreground">
                  {event.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
