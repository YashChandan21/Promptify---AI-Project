import { useState } from "react";
import { IoCopy } from "react-icons/io5";
export default function OutputBox({ result }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      {/* Output Card */}
      <div className="bg-gray-900/70 w-full  backdrop-blur-lg border border-gray-700 rounded-3xl shadow-2xl overflow-visible">
        {/* Header */}
        <div className="border-b flex justify-between w-full  border-gray-700 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Generated Result</h2>

          {/* Copied and tooltip  */}
          <div className="relative group">
            <button
              onClick={handleCopy}
              className="hover:text-blue-400 transition text-xl"
            >
              <IoCopy className={copied ? "text-green-400" : ""} />
            </button>

            {/* tooltip */}
            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2
    bg-gray-800 text-white text-xs px-3 py-1 rounded
    whitespace-nowrap transition pointer-events-none
    ${copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            >
              {copied ? "Copied!" : "Copy"}
            </span>
          </div>
        </div>

        {/* Content */}
        <pre
          className="p-6 text-gray-200 whitespace-pre-wrap wrap-break-words
          overflow-x-auto text-sm leading-7"
        >
          {result || "Your generated result will appear here..."}
        </pre>
      </div>
    </div>
  );
}
