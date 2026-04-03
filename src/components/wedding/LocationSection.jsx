import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function LocationSection({
  title,
  venueName,
  address,
  time,
  mapUrl,
  worldMapUrl,
}) {
  const addressLines = address.split("\n");

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        variants={fadeUp}
        className="font-serif text-5xl sm:text-6xl font-bold text-foreground tracking-wider uppercase z-10"
        style={{ textShadow: "2px 2px 0 hsl(var(--destructive) / 0.3)" }}
      >
        {title}
      </motion.h2>

      <motion.div variants={fadeUp} className="w-full max-w-sm relative my-4">
        <img
          src={worldMapUrl}
          alt="Mapa del mundo"
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="text-center space-y-3 mt-4 z-10">
        <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-foreground">
          {venueName}
        </h3>
        <div className="font-serif text-base sm:text-lg text-foreground/80 leading-relaxed">
          {addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="font-serif text-base sm:text-lg text-foreground/80">
          a las {time}
        </p>
      </motion.div>

      {mapUrl ? (
        <motion.a
          variants={fadeUp}
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex flex-col items-center gap-2 group"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <MapPin className="w-7 h-7 text-primary" />
          </div>
          <span className="font-sans text-xs uppercase tracking-widest text-primary">
            (Ver mapa)
          </span>
        </motion.a>
      ) : null}
    </motion.section>
  );
}
