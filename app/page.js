'use client'

import { useState } from "react"
import PromptForm from "@/components/PromptForm";
import OutputBox from "@/components/OutputBox";
import Image from "next/image";

export default function Home() {
  const [result, setResult] = useState("");

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white p-6">

      {/* Centered Image */}
      <div className="flex justify-center mt-10">
        <Image
          src="/images/PromptImg.png"
          alt="Prompt Generator"
  width={700}
  height={500}
  className="w-full h-64 object-fill"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="-mt-30">
        <PromptForm setResult={setResult} />
        <OutputBox result={result} />
      </div>

    </div>
  );
}