import { useState } from "react";
import AIOrb from "./AIOrb";
import VoiceButton from "./VoiceButton";
import NeuralNetwork from "./NeuralNetwork";
import ChatHistory from "./ChatHistory";


function Hero() {
const [messages, setMessages] = useState([]);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-6">
      <NeuralNetwork />

      <AIOrb />

      <h1 className="text-6xl font-bold tracking-widest">
        IGRIS ERA
      </h1>

      <p className="mt-6 text-gray-400 text-lg">
        Your Personal AI Assistant
      </p>

      <VoiceButton setMessages={setMessages} />

      <ChatHistory messages={messages} />
    </section>
  );
}

export default Hero;
