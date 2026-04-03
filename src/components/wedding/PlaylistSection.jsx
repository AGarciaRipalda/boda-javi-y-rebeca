import { motion } from "framer-motion";
import { Music } from "lucide-react";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function TitleWithMap({ title }) {
  return (
    <div className="relative flex items-center justify-center w-full">
      <img
        src="/mapamundi.png"
        alt=""
        className="absolute left-1/2 top-1/2 w-screen max-w-none -translate-x-1/2 -translate-y-1/2 opacity-22"
        loading="lazy"
      />
      <h2 className="relative font-serif text-5xl sm:text-6xl font-bold tracking-wider uppercase text-foreground">
        {title}
      </h2>
    </div>
  );
}

export default function PlaylistSection({ playlistUrl = null }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-start px-4 pt-24 pb-16 relative overflow-hidden"
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

      <motion.div variants={fadeUp} className="relative z-10 mt-4">
        <TitleWithMap title="Playlist" />
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="text-center space-y-4 z-10 mt-24 sm:mt-28 max-w-xs"
      >
        <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-foreground">
          ¡Esto promete!
        </h3>
        <p className="font-serif text-base italic text-foreground/80 leading-relaxed">
          Queremos que la fiesta también suene a vosotros.
          Cuando tengamos la playlist compartida lista,
          os la enviaremos para que añadáis
          vuestras canciones favoritas.
        </p>
      </motion.div>

      {playlistUrl ? (
        <motion.a
          variants={fadeUp}
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 flex flex-col items-center gap-2 group relative z-10"
        >
          <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center group-hover:bg-primary/80 transition-colors">
            <Music className="w-7 h-7 text-primary-foreground" />
          </div>
          <span className="font-sans text-xs uppercase tracking-widest text-primary">
            (Abrir playlist)
          </span>
        </motion.a>
      ) : (
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-2 opacity-70 relative z-10"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
            <Music className="w-7 h-7 text-primary" />
          </div>
          <span className="font-sans text-xs uppercase tracking-widest text-primary">
            Próximamente
          </span>
        </motion.div>
      )}
    </motion.section>
  );
}
