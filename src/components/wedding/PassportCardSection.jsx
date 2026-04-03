import { motion } from "framer-motion";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PassportCardSection() {
  return (
    <motion.section
      className="min-h-screen relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <CompassRose />

      <motion.div variants={fadeUp} className="absolute inset-0">
        <img
          src="/pasaporteaboda.png"
          alt="Pasaporte a nuestra boda"
          className="w-full h-full object-contain sm:object-cover"
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
}
