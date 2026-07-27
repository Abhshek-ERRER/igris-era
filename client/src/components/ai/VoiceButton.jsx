import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMicrophone } from "react-icons/fa";

function VoiceButton({ setMessages }) {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event) => {
      const text = event.results[0][0].transcript;

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "user",
          text,
        },
      ]);
    };

    // Mic automatically band hone par UI update
    recognitionRef.current.onend = () => {
      setIsListening(false);
    };
  }, [setMessages]);

  const handleMicClick = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <motion.button
        onClick={handleMicClick}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 30px rgba(34,211,238,0.8)",
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="relative mt-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border border-cyan-300/40 flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,211,238,0.5)]"
      >
        <FaMicrophone size={24} />

        {isListening && (
          <span className="absolute -bottom-8 text-sm text-cyan-300 whitespace-nowrap">
            Listening...
          </span>
        )}
      </motion.button>
    </div>
  );
}

export default VoiceButton;