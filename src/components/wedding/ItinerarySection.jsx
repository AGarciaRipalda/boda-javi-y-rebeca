import { motion } from "framer-motion";
import { Heart, GlassWater, Music, PartyPopper } from "lucide-react";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const events = [
  { time: "12:00 h", label: "Ceremonia", icon: Heart },
  { time: "Después", label: "Cóctel", icon: GlassWater },
  { time: "Más tarde", label: "Disco", icon: Music },
  { time: "00:00 h", label: "Cierre", icon: PartyPopper },
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
        className="relative z-10 mt-20 sm:mt-24 font-serif text-5xl sm:text-6xl font-bold text-foreground tracking-wider uppercase mb-16 text-center"
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
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-5 mb-12 relative"
            >
              <div className="justify-self-end text-right">
                <p className="font-serif text-lg sm:text-xl text-foreground font-bold">
                  {event.time}
                </p>
              </div>

              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-background/80 border border-primary/20 shadow-sm">
                <Icon className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
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
