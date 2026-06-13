import { motion } from "framer-motion";
import { Music, PlusCircle } from "lucide-react";
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

export default function PlaylistSection({ embedUrl = null, playlistUrl = null }) {
  const hasPlaylist = embedUrl || playlistUrl;

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
        className="pointer-events-none absolute left-1/2 top-[45%] z-0 w-screen max-w-none -translate-x-1/2 -translate-y-1/2 opacity-22"
        loading="lazy"
      />
      <CompassRose />

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4">
        <motion.div variants={fadeUp} className="w-full pt-36 sm:pt-32 text-center">
          <SectionTitle title="Playlist" />
        </motion.div>

        {hasPlaylist ? (
          <div className="mt-12 w-full max-w-sm flex flex-col items-center gap-6 pb-16">
            {embedUrl && (
              <motion.div variants={fadeUp} className="w-full rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="block"
                />
              </motion.div>
            )}

            {playlistUrl && (
              <motion.a
                variants={fadeUp}
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary/40 bg-background/80 hover:bg-primary/10 transition-colors group"
              >
                <PlusCircle className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="font-serif text-sm uppercase tracking-widest text-primary">
                  Añadir canción
                </span>
              </motion.a>
            )}
          </div>
        ) : (
          <div className="mt-80 flex w-full flex-col items-center pb-4">
            <motion.div
              variants={fadeUp}
              className="max-w-xs text-center space-y-4"
            >
              <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-foreground">
                ¡Esto promete!
              </h3>
              <p className="font-serif text-base italic text-foreground/80 leading-relaxed">
                Queremos que la fiesta también suene a vosotros. Cuando tengamos la
                playlist lista, os la compartiremos para que añadáis vuestras
                canciones favoritas.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col items-center gap-2 opacity-70"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Music className="w-7 h-7 text-primary" />
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-primary">
                Próximamente
              </span>
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
