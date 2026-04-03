import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function SectionTitle({ title }) {
  return (
    <h2 className="relative font-serif text-5xl sm:text-6xl font-bold tracking-wider uppercase text-foreground">
      {title}
    </h2>
  );
}

export default function PhotosSection({ photosUrl = null }) {
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
      <img
        src="/mapamundi.png"
        alt=""
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-screen max-w-none -translate-x-1/2 -translate-y-1/2 opacity-22"
        loading="lazy"
      />
      <CompassRose />

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4">
        <motion.div variants={fadeUp} className="w-full pt-20 sm:pt-24 text-center">
          <SectionTitle title="Fotos" />
        </motion.div>

        <div className="mt-auto flex w-full flex-col items-center pb-14">
          <motion.div
            variants={fadeUp}
            className="max-w-xs text-center space-y-4"
          >
            <h3 className="font-serif text-xl font-bold italic text-foreground">
              ¡Flash y dispara!
            </h3>
            <p className="font-serif text-base italic text-foreground/80 leading-relaxed">
              Queremos revivir cada instante, así que no os cortéis: capturad los
              momentos más divertidos, emotivos y espontáneos. ¡Vuestra mirada
              también forma parte de esta historia!
            </p>
          </motion.div>

          {photosUrl ? (
            <motion.a
              variants={fadeUp}
              href={photosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Camera className="w-7 h-7 text-primary" />
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-primary">
                (Ver álbum)
              </span>
            </motion.a>
          ) : (
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-col items-center gap-2 opacity-70"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Camera className="w-7 h-7 text-primary" />
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-primary">
                Las compartiremos después
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
