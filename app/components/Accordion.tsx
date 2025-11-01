"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-zinc-200 rounded-lg overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
          isOpen ? "bg-orange-600 text-white" : "bg-white text-zinc-900 hover:bg-zinc-50"
        }`}
      >
        <span className="font-semibold">{title}</span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-white text-zinc-700">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ title: string; content: string }>;
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
}

