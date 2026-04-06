'use client'
import { useState } from "react"
import PromptForm from "@/components/PromptForm";
import OutputBox from "@/components/OutputBox";


export default function Home(){
  const [result, setResult] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Prompt Generator
      </h1>

      <PromptForm setResult={setResult} />
      <OutputBox result={result} /> 
    </div>  
  )
}