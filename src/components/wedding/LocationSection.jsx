import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function TitleWithOptionalMap({ title, showMap }) {
  return (
    <div className="relative flex items-center justify-center">
      {showMap ? (
        <img
          src="/mapamundi.png"
          alt=""
          className="absolute left-1/2 top-1/2 w-screen max-w-none -translate-x-1/2 -translate-y-1/2 opacity-22"
          loading="lazy"
        />
      ) : null}
      <h2
        className="relative font-serif text-5xl sm:text-6xl font-bold tracking-wider uppercase text-foreground"
        style={{ textShadow: "2px 2px 0 hsl(var(--destructive) / 0.3)" }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function LocationSection({
  title,
  venueName,
  address,
  time,
  mapUrl,
  showMapBehindTitle = false,
}) {
  const addressLines = address.split("\n");

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <img
        src="/itinerario.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-12"
        loading="lazy"
      />
      <CompassRose />

      <motion.div variants={fadeUp} className="relative z-10">
        <TitleWithOptionalMap title={title} showMap={showMapBehindTitle} />
      </motion.div>

      <motion.div variants={fadeUp} className="text-center space-y-3 mt-8 relative z-10">
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
          className="mt-8 flex flex-col items-center gap-2 group relative z-10"
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
