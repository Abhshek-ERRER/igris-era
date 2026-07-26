import Navbar from "../components/layout/Navbar";
import Hero from "../components/ai/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;