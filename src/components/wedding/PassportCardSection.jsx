import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PassportCardSection({ coupleUrl, stampsUrl }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={fadeUp}
        className="w-full max-w-sm bg-background border-2 border-primary/20 rounded-lg overflow-hidden shadow-xl relative"
      >
        <div
          className="absolute inset-0 pointer-events-none border-[12px] rounded-lg"
          style={{
            borderImage:
              "repeating-linear-gradient(45deg, hsl(150 14% 33%), hsl(150 14% 33%) 4px, transparent 4px, transparent 8px) 12",
          }}
        />

        <div className="absolute top-2 right-2 w-28 opacity-30 z-10">
          <img src={stampsUrl} alt="" className="w-full" loading="lazy" />
        </div>

        <div className="p-6 pt-8 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary uppercase text-center leading-tight">
            Pasaporte a
            <br />
            nuestra boda
          </h2>

          <div className="mt-8 space-y-4 font-sans text-sm">
            <div className="flex items-start gap-2">
              <span className="font-bold uppercase tracking-wider text-foreground/60 w-28 shrink-0">
                Fecha:
              </span>
              <span className="font-bold text-foreground">
                31 de octubre de 2026
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold uppercase tracking-wider text-foreground/60 w-28 shrink-0">
                Hora:
              </span>
              <span className="font-bold text-foreground">12:00 h</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold uppercase tracking-wider text-foreground/60 w-28 shrink-0">
                Destino:
              </span>
              <span className="font-bold text-foreground">
                Puerto Real, Cádiz
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold uppercase tracking-wider text-foreground/60 w-28 shrink-0">
                Ceremonia:
              </span>
              <span className="font-bold text-foreground">Finca Tipuana</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold uppercase tracking-wider text-foreground/60 w-28 shrink-0">
                Celebración:
              </span>
              <span className="font-bold text-foreground">
                Cóctel y disco hasta las 00:00 h
              </span>
            </div>
          </div>

          <div className="absolute right-6 bottom-48 w-16 h-16 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center">
            <span className="text-destructive text-2xl">❤</span>
          </div>
        </div>

        <div className="w-full h-56 overflow-hidden">
          <img
            src={coupleUrl}
            alt="Javi y Rebeca"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
