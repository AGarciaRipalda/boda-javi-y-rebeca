import { motion } from "framer-motion";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PassportCardSection() {
  return (
    <motion.section
      className="min-h-screen relative overflow-hidden flex items-center justify-center py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <CompassRose />

      <motion.div variants={fadeUp} className="relative w-full max-w-sm sm:max-w-md">
        <img
          src="/pasaporteaboda.png"
          alt="Pasaporte a nuestra boda"
          className="w-full h-auto"
          loading="lazy"
        />
        <img
          src="/finca_tipuana.png"
          alt="Finca Tipuana"
          className="absolute object-cover"
          style={{ top: "64.5%", left: "6%", right: "6%", height: "29%" }}
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
}
