import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const WEDDING_DATE = new Date("2026-10-31T12:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownSection({ coupleUrl }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        src="/itinerario.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-12"
        loading="lazy"
      />
      <CompassRose />

      <motion.div variants={fadeUp} className="w-full h-[50vh] overflow-hidden relative z-10">
        <img
          src={coupleUrl}
          alt="Javi y Rebeca"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="w-full bg-background/95 relative -mt-4 rounded-t-xl pt-4 pb-16 z-10"
      >
        <div
          className="h-3 w-full"
          style={{
            background:
              "repeating-linear-gradient(45deg, hsl(150 14% 33%), hsl(150 14% 33%) 4px, transparent 4px, transparent 8px)",
          }}
        />

        <div className="flex justify-between px-6 py-3 border-b border-muted">
          <div className="text-center">
            <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">
              Tipo:
            </p>
            <p className="font-sans text-xs font-bold text-foreground">Boda</p>
          </div>
          <div className="text-center">
            <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">
              Lugar:
            </p>
            <p className="font-sans text-xs font-bold text-foreground">Cádiz</p>
          </div>
          <div className="text-center">
            <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">
              Pasaporte n.º:
            </p>
            <p className="font-sans text-xs font-bold text-foreground">31102026</p>
          </div>
        </div>

        <motion.h2
          variants={fadeUp}
          className="font-serif text-4xl sm:text-5xl font-bold text-primary text-center mt-4 uppercase"
        >
          Javi & Rebeca
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-sans text-sm uppercase tracking-[0.3em] text-muted-foreground text-center mt-4"
        >
          Cuenta atrás...
        </motion.p>

        <motion.div variants={fadeUp} className="flex justify-center gap-2 mt-4 px-6">
          {[
            { value: timeLeft.days, label: "Días" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Min" },
            { value: timeLeft.seconds, label: "Seg" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex-1 text-center py-3 border border-muted rounded-md bg-background"
            >
              <p className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-serif text-xl font-bold uppercase tracking-wider text-primary text-center mt-6"
        >
          ¡Te esperamos!
        </motion.p>

        <div
          className="h-3 w-full mt-6"
          style={{
            background:
              "repeating-linear-gradient(45deg, hsl(150 14% 33%), hsl(150 14% 33%) 4px, transparent 4px, transparent 8px)",
          }}
        />
      </motion.div>
    </motion.section>
  );
}
