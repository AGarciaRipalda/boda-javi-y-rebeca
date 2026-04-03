import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function GiftSection({ stampsUrl, globeUrl, iban = null }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute top-4 right-0 w-40 opacity-25">
        <img src={stampsUrl} alt="" className="w-full" loading="lazy" />
      </div>

      <motion.h2
        variants={fadeUp}
        className="font-serif text-5xl sm:text-6xl font-bold text-foreground tracking-wider uppercase z-10"
      >
        Regalo
      </motion.h2>

      <motion.div variants={fadeUp} className="w-20 h-20 my-6 z-10">
        <img
          src={globeUrl}
          alt="Javi y Rebeca"
          className="w-full h-full object-contain rounded-full"
          loading="lazy"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="text-center space-y-4 z-10 max-w-sm">
        <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-foreground">
          ¡Tic tac para el viaje!
        </h3>
        <p className="font-serif text-base italic text-foreground/80 leading-relaxed">
          ¡Estamos deseando que llegue nuestra luna de miel!
          Y, por supuesto, os enviaremos fotos para que viváis un poquito de ella con nosotros.
          Si os hace ilusión participar y ayudarnos a que sea aún más especial, cualquier detalle será un regalo que recordaremos siempre.
        </p>
      </motion.div>

      {iban ? (
        <motion.p
          variants={fadeUp}
          className="font-sans text-sm font-medium tracking-wider text-primary mt-6 z-10"
        >
          {iban}
        </motion.p>
      ) : (
        <motion.p
          variants={fadeUp}
          className="font-sans text-xs uppercase tracking-[0.25em] text-primary mt-6 z-10 text-center"
        >
          Si queréis tener ese detalle, pedidnos la cuenta y os la compartiremos.
        </motion.p>
      )}

      <div className="absolute bottom-4 left-0 w-40 opacity-25">
        <img src={stampsUrl} alt="" className="w-full" loading="lazy" />
      </div>
    </motion.section>
  );
}
