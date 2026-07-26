import { motion } from "framer-motion";

function AIOrb() {
  return (
    <div className="relative flex items-center justify-center w-40 h-40">

      {/* 1️⃣ Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border border-cyan-400/30"
      />

      {/* 2️⃣ Breathing Orb */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-40 h-40 rounded-full bg-cyan-500/20 border border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.5)]"
      />

    </div>
  );
}

export default AIOrb;