import { motion } from "framer-motion";
import { MessageCircle, Check, X } from "lucide-react";
import CompassRose from "./CompassRose";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function RSVPSection({ rsvpUrl = null }) {
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

      <motion.h2
        variants={fadeUp}
        className="relative z-10 font-serif text-5xl sm:text-6xl font-bold text-foreground tracking-wider uppercase"
      >
        Asistencia
      </motion.h2>

      <motion.div variants={fadeUp} className="relative z-10 w-[min(78vw,340px)] mt-8">
        <img
          src="/sello_asistencia.png"
          alt="Sello de asistencia"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="relative z-10 text-center space-y-4 max-w-xs mt-8">
        <p className="font-serif text-base italic text-foreground/80 leading-relaxed">
          ¿Podrás venir con nosotros?
          Avísanos por WhatsApp
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="relative z-10 mt-12 flex gap-6 flex-col sm:flex-row items-center">
        <motion.a
          href={`https://wa.me/34610715420?text=${encodeURIComponent("Hola! Paso por aquí para confirmar que SÍ asistiré a vuestra boda. 🤵‍♂️👰‍♀️\n\nNombre(s): [Escribe aquí tu nombre y el de tu acompañante]\n\nAutobús: [Sí / No] necesito plaza\n\nMenú especial / Alergias: [Indica aquí si tienes alguna intolerancia o alergia]\n\n¡Qué ganas de que llegue el día! 🎉")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 group cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
            <Check className="w-8 h-8 text-green-600" strokeWidth={1.5} />
          </div>
          <span className="font-serif text-lg font-bold text-foreground">Voy!</span>
        </motion.a>

        <motion.a
          href={`https://wa.me/34610715420?text=${encodeURIComponent("Hola! Os escribo para confirmaros que, sintiéndolo muchísimo, NO podré asistir a vuestra boda. Me da mucha pena perdérmelo, pero os deseo todo lo mejor en vuestro gran día. ¡Os mando un abrazo enorme! ❤️✨")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 group cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
            <X className="w-8 h-8 text-red-600" strokeWidth={1.5} />
          </div>
          <span className="font-serif text-lg font-bold text-foreground">No puedo!</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
