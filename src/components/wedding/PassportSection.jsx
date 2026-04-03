import { motion } from "framer-motion";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function TitleWithMap({ title }) {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src="/mapamundi.png"
        alt=""
        className="absolute inset-1/2 w-[min(86vw,460px)] -translate-x-1/2 -translate-y-1/2 opacity-20"
        loading="lazy"
      />
      <h2 className="relative font-serif text-5xl sm:text-6xl font-bold tracking-wider uppercase text-foreground">
        {title}
      </h2>
    </div>
  );
}

export default function PassportSection() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <CompassRose />

      <motion.div variants={fadeUp}>
        <TitleWithMap title="Pasaporte" />
      </motion.div>

      <motion.div variants={fadeUp} className="w-[min(74vw,320px)] my-8">
        <img
          src="/sello_pasaporte.png"
          alt="Sello de pasaporte"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </motion.div>

      <motion.h3
        variants={fadeUp}
        className="font-serif text-4xl sm:text-5xl font-bold text-primary tracking-wide uppercase text-center"
      >
        Javi & Rebeca
      </motion.h3>
    </motion.section>
  );
}
