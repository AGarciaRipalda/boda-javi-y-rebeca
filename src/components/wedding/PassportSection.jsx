import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PassportSection({ worldMapUrl, stampUrl }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p
        variants={fadeUp}
        className="font-serif text-4xl sm:text-5xl font-bold tracking-wider uppercase text-foreground z-10 mb-2"
        style={{ letterSpacing: "0.15em" }}
      >
        Pasaporte
      </motion.p>

      <motion.div variants={fadeUp} className="w-full max-w-sm relative my-4">
        <img
          src={worldMapUrl}
          alt="Mapa del mundo con ruta de vuelo"
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="w-48 h-48 sm:w-56 sm:h-56 relative z-10 my-4"
      >
        <img
          src={stampUrl}
          alt="Sello de pasaporte - Nos casamos 31·10·26"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="font-serif text-4xl sm:text-5xl font-bold text-primary tracking-wide mt-6 uppercase"
      >
        Javi & Rebeca
      </motion.h2>
    </motion.section>
  );
}
