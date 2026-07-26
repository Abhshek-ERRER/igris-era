import { motion } from "framer-motion";
function NeuralNetwork() {
     const nodes = [
  { top: "12%", left: "25%" },
  { top: "20%", right: "18%" },
  { top: "40%", left: "12%" },
  { top: "42%", right: "10%" },
  { bottom: "20%", left: "18%" },
  { bottom: "12%", right: "22%" },
];
  return (
<div className="absolute inset-0 pointer-events-none">
        {/* <svg 
           className="absolute inset-0 w-full h-full">
            <line
  x1="25%"
  y1="12%"
  x2="82%"
  y2="20%"
  stroke="#22d3ee"
  strokeWidth="1"
/>
        </svg> */}
    {nodes.map((node, index) => (
   <motion.div
    key={index}
    className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
    style={node}
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.6, 1, 0.6],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: index * 0.3,
    }}
  />
))}
</div>
  );
}

export default NeuralNetwork;