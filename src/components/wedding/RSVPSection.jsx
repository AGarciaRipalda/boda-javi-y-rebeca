import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function RSVPSection({ globeUrl, stampsUrl, rsvpUrl = null }) {
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
      >
        Asistencia
      </motion.h2>

      <motion.div variants={fadeUp} className="w-48 h-48 sm:w-56 sm:h-56 my-8 z-10">
        <img
          src={globeUrl}
          alt="Globo con monumentos del mundo"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="text-center space-y-4 max-w-xs z-10">
        <p className="font-serif text-base italic text-foreground/80 leading-relaxed">
          Tu pasaporte ya está preparado,
          solo falta que confirmes tu asiento.
          Muy pronto os compartiremos
          la forma de confirmar asistencia.
        </p>
      </motion.div>

      {rsvpUrl ? (
        <motion.a
          variants={fadeUp}
          href={rsvpUrl}
          className="mt-8 flex flex-col items-center gap-2 group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Globe className="w-7 h-7 text-primary" />
          </div>
          <span className="font-sans text-xs uppercase tracking-widest text-primary">
            (Confirmar)
          </span>
        </motion.a>
      ) : (
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center gap-2 opacity-70"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
            <Globe className="w-7 h-7 text-primary" />
          </div>
          <span className="font-sans text-xs uppercase tracking-widest text-primary">
            Próximamente
          </span>
        </motion.div>
      )}

      <div className="absolute bottom-4 left-0 w-40 opacity-25">
        <img src={stampsUrl} alt="" className="w-full" loading="lazy" />
      </div>
    </motion.section>
  );
}
