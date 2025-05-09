import { useState } from "react";
import 'animate.css';

const LittleBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! Ask me anything about our town." }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const newMessages = [...messages, { role: "user", content: query }];

    let reply = "I don't understand. Try asking about banks, hospitals, or shops.";
    const lower = query.toLowerCase();

    if (lower.includes("bank")) reply = "We have several banks and ATMs around town.";
    else if (lower.includes("hospital")) reply = "The hospital is open 24/7 for emergencies.";
    else if (lower.includes("shop")) reply = "You can find many shops in the central market.";

    setMessages([...newMessages, { role: "bot", content: reply }]);
    setQuery("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-72 bg-white shadow-lg rounded-lg border">
          <div className="bg-mainbg text-white p-2 rounded-t flex justify-between">
            <span>LittleBot</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="h-64 overflow-y-auto p-2 space-y-2 text-sm bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md max-w-[80%] ${
                  msg.role === "user"
                    ? "ml-auto bg-mainbg text-white"
                    : "mr-auto bg-white border"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex border-t p-2 gap-1">
            <input
              className="flex-1 border rounded px-2 py-1 text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask me..."
            />
            <button className="bg-mainbg text-white px-3 rounded text-sm">Send</button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-btncl animate__animated animate__bounce text-white h-12 w-12 rounded-lg shadow-lg"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default LittleBot;
