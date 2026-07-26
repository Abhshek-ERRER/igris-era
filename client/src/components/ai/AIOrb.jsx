import { motion } from "framer-motion";

function AIOrb() {
  return (
    <div className="relative flex items-center justify-center w-40 h-40">

      {/*  Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border border-cyan-400/30"
      />
     
      <motion.div
  className="absolute w-52 h-52 rounded-full border border-cyan-400/15"
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.2, 0.6, 0.2],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
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
//   className="relative w-40 h-40 rounded-full bg-cyan-500/20 border border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.5)]"
className="relative w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/20 border border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.5)]"
>
  <div className="absolute inset-6 rounded-full bg-cyan-300/10 blur-xl" />
</motion.div>

    </div>
  );
}

export default AIOrb;