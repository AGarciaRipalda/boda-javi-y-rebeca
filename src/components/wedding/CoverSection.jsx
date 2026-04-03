import { motion } from "framer-motion";
import CompassRose from "./CompassRose";

export default function CoverSection({ onOpen }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <CompassRose />

      <div className="text-center space-y-6">
        <motion.p
          className="font-serif text-sm tracking-[0.3em] uppercase text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Invitación de boda
        </motion.p>

        <motion.h1
          className="font-display text-6xl sm:text-7xl text-foreground leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Javi
        </motion.h1>

        <motion.p
          className="font-serif text-3xl text-foreground italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          &
        </motion.p>

        <motion.h1
          className="font-display text-6xl sm:text-7xl text-foreground leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          Rebeca
        </motion.h1>

        <motion.div
          className="pt-12 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="font-serif text-lg tracking-[0.15em] uppercase text-foreground">
            ¿Preparados para este viaje?
          </p>
          <div className="w-px h-12 bg-foreground/30 mx-auto" />
          <button
            onClick={onOpen}
            className="font-serif text-base text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            (Haz clic para abrir)
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
