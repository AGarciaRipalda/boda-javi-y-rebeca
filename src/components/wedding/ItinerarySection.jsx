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
        className="relative z-10 font-serif text-5xl sm:text-6xl font-bold text-foreground tracking-wider uppercase mb-12"
      >
        Itinerario
      </motion.h2>

      <div className="relative z-10 w-full max-w-sm">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-foreground/20" />

        {events.map((event, idx) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={event.label}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: idx * 0.15 },
                },
              }}
              className="flex items-center gap-6 mb-12 relative"
            >
              <div className="w-16 flex items-center justify-center shrink-0 relative z-10">
                <Icon className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
              </div>
              <div className="absolute left-[30px] w-3 h-3 rounded-full bg-primary z-20" />
              <div>
                <p className="font-serif text-lg sm:text-xl text-foreground">
                  <span className="font-bold">{event.time}</span> {event.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
