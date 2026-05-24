"use client";
import { useState } from "react";

export default function PrompyForm({ setResult }) {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("content");
  const [loading, setLoading] = useState(false);

  const options = ["content", "coding", "resume"];

  const handleSubmit = async () => {
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input, mode }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-40 px-4">
      
      {/* Card */}
      <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-700 rounded-3xl p-6 shadow-2xl space-y-6">

        {/* Mode Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {options.map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              className={`px-6 py-3 rounded-2xl font-semibold capitalize transition-all duration-300
              ${
                mode === item
                  ? "bg-blue-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.8)] scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Textarea */}
        <textarea
          className="w-full h-18 bg-gray-800 border border-gray-700 rounded-2xl p-5 text-white
          placeholder:text-gray-400 
          resize-none outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-300"
          placeholder="Enter your idea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Generate Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold
          py-3 rounded-2xl transition-all duration-300
          hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
        >
          {loading ? "Generating..." : "Generate Prompt"}
        </button>
      </div>
    </div>
  );
}