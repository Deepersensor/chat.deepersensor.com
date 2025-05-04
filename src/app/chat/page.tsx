import { useState } from "react";
import Image from "next/image";

const dummyHistory = [
  { id: 1, title: "How does AI work?" },
  { id: 2, title: "Explain quantum computing" },
  { id: 3, title: "Write a poem about the ocean" },
];

export default function ChatPage() {
  const [selected, setSelected] = useState(dummyHistory[0].id);
  return (
    <div className="flex min-h-[70vh] w-full max-w-7xl mx-auto gap-8">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col glass p-4 rounded-2xl w-72 gap-4 shadow-xl mt-4 h-[70vh]">
        <h3 className="gradient-text text-xl font-bold mb-2">History</h3>
        <ul className="flex flex-col gap-2">
          {dummyHistory.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg transition font-medium ${selected === item.id ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
                onClick={() => setSelected(item.id)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        <button className="btn-primary mt-4">+ New Chat</button>
      </aside>
      {/* Chat Area */}
      <section className="flex-1 flex flex-col glass p-6 rounded-2xl shadow-xl mt-4 min-h-[70vh]">
        <div className="flex-1 overflow-y-auto flex flex-col gap-4 pb-4">
          {/* Example chat bubbles */}
          <div className="self-start bg-white/20 rounded-xl px-4 py-3 max-w-lg text-white/90 shadow-md backdrop-blur-sm">
            <span className="font-semibold gradient-text">You:</span> How does AI work?
          </div>
          <div className="self-end bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl px-4 py-3 max-w-lg text-white shadow-md">
            <span className="font-semibold">AI:</span> AI works by using algorithms to process data and learn patterns, enabling it to make predictions or decisions.
          </div>
        </div>
        <form className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="btn-primary px-6">Send</button>
        </form>
      </section>
    </div>
  );
}
