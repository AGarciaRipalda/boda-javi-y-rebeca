import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function SectionTitle({ title }) {
  return (
    <h2
      className="relative font-serif text-5xl sm:text-6xl font-bold tracking-wider uppercase text-foreground"
      style={{ textShadow: "2px 2px 0 hsl(var(--destructive) / 0.3)" }}
    >
      {title}
    </h2>
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
      className="relative min-h-screen overflow-hidden"
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

      {showMapBehindTitle ? (
        <img
          src="/mapamundi.png"
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-screen max-w-none -translate-x-1/2 -translate-y-1/2 opacity-22"
          loading="lazy"
        />
      ) : null}

      <CompassRose />

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4">
        <motion.div variants={fadeUp} className="w-full pt-20 sm:pt-24 text-center">
          <SectionTitle title={title} />
        </motion.div>

        <div className="mt-auto flex w-full flex-col items-center pb-14">
          <motion.div
            variants={fadeUp}
            className="max-w-sm text-center text-foreground"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider">
              {venueName}
            </h3>
            <div className="mt-4 font-serif text-base sm:text-lg text-foreground/80 leading-relaxed">
              {addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mt-3 font-serif text-base sm:text-lg text-foreground/80">
              a las {time}
            </p>
          </motion.div>

          {mapUrl ? (
            <motion.a
              variants={fadeUp}
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-primary">
                (Ver mapa)
              </span>
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
}
