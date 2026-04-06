"use client"
import { useState } from "react"

export default function PrompyForm( { setResult}){
    const [input, setInput] = useState("");
    const [mode, setMode] = useState("content");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);

        const res = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({  input, mode})
        });

        const data = await res.json();
        setResult(data.result);
        setLoading(false);

    };

    return (
        <div className="max-w-xl mx-auto space-y-4">
            <textarea
             className="w-full p-3 rounded bg-gray-800"
             placeholder="Enter your idea..."
             value={input}
             onChange={(e) => setInput(e.target.value)}
             />

             <select
                className="w-full p-2 bg-gray-800"
                value={mode}
                onChange={(e) => setMode(e.target.value)}
             >
                <option value="content">Content</option>
                <option value="coding">Coding</option>
                <option value="resume">Resume</option>
             </select>

             <button
                onClick={handleSubmit}
                className="bg-blue-600 px-4 py-2 rounded w-full"
             >
                {loading ? "Generating..." : "Generate Prompt"}
             </button>

        </div>
    )
}