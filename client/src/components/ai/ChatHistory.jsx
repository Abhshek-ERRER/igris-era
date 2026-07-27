function ChatHistory({ messages }) {
  return (
    <div className="mt-8 w-full max-w-2xl space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-3 rounded-lg ${
            message.sender === "user"
              ? "bg-cyan-500/20 text-cyan-200"
              : "bg-gray-800 text-white"
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}

export default ChatHistory; 