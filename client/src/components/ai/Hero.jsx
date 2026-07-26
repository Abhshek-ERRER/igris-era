import AIOrb from "./AIOrb";
function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[85vh] px-6">
      
      <AIOrb />

      <h1 className="text-6xl font-bold tracking-widest">
        IGRIS ERA
      </h1>

      <p className="mt-6 text-gray-400 text-lg">
        Your Personal AI Assistant
      </p>

    </section>
  );
}

export default Hero;