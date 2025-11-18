"use client";

import { FAQStructuredData } from "./StructuredData";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  showSchema?: boolean;
}

export default function FAQ({ items, showSchema = true }: FAQProps) {
  return (
    <>
      {showSchema && <FAQStructuredData questions={items} />}
      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-orange-200 bg-white p-6 hover:border-orange-300 transition-colors"
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <h3 className="font-semibold text-lg text-zinc-900 pr-4">
                {item.question}
              </h3>
              <span className="flex-shrink-0 text-orange-600 group-open:rotate-180 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-4 pt-4 border-t border-orange-100">
              <p className="text-zinc-600 leading-7">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

