import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PhotosSection({ worldMapUrl, photosUrl = null }) {
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
        style={{ textShadow: "2px 2px 0 hsl(var(--destructive) / 0.2)" }}
      >
        Fotos
      </motion.h2>

      <motion.div variants={fadeUp} className="w-full max-w-sm relative my-4">
        <img src={worldMapUrl} alt="Mapa" className="w-full h-auto" loading="lazy" />
      </motion.div>

      <motion.div variants={fadeUp} className="text-center space-y-4 z-10 mt-4 max-w-xs">
        <h3 className="font-serif text-xl font-bold italic text-foreground">
          ¡Flash y dispara!
        </h3>
        <p className="font-serif text-base italic text-foreground/80 leading-relaxed">
          Queremos revivir cada instante
          así que no os cortéis: capturad los momentos
          más divertidos, emotivos y espontáneos.
          ¡Vuestra mirada también forma
          parte de esta historia!
        </p>
      </motion.div>

      {photosUrl ? (
        <motion.a
          variants={fadeUp}
          href={photosUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex flex-col items-center gap-2 group"
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
          className="mt-8 flex flex-col items-center gap-2 opacity-70"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
            <Camera className="w-7 h-7 text-primary" />
          </div>
          <span className="font-sans text-xs uppercase tracking-widest text-primary">
            Las compartiremos después
          </span>
        </motion.div>
      )}
    </motion.section>
  );
}
