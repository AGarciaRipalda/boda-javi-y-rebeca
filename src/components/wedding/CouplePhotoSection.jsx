import { motion } from "framer-motion";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function CouplePhotoSection({ coupleUrl }) {
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

      <motion.div variants={fadeUp} className="w-full max-w-sm relative z-10">
        <div className="border-[6px] border-muted/60 rounded-sm p-1 bg-background shadow-lg">
          <img
            src={coupleUrl}
            alt="Foto de Javi y Rebeca"
            className="w-full h-auto object-cover rounded-sm"
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="text-center mt-8 space-y-1 relative z-10">
        <p className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-primary">
          Prepara tus maletas
        </p>
        <p className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-primary">
          y acompáñanos
        </p>
        <p className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-primary">
          en esta aventura
        </p>
      </motion.div>
    </motion.section>
  );
}
