"use client";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const FAQ = ({ faqs = [] }) => {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((faq, idx) => {
        const isOpen = activeFaq === idx;
        const panelId = `faq-panel-${idx}`;
        const buttonId = `faq-btn-${idx}`;

        return (
          <div
            key={idx}
            itemProp="mainEntity"
            itemScope
            itemType="https://schema.org/Question"
            className={`border overflow-hidden transition-all duration-300 ${
              isOpen
                ? "bg-white border-gray-200/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)]"
                : "bg-white/60 border-gray-100 hover:border-gray-200"
            }`}
          >
            <button
              id={buttonId}
              onClick={() => setActiveFaq(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              type="button"
              className="w-full p-4 md:p-5 flex items-center justify-between gap-4 text-start cursor-pointer select-none focus:outline-hidden"
            >
              <span
                itemProp="name"
                className={`text-sm md:text-base font-bold md:font-black transition-colors duration-300 ${
                  isOpen ? "text-(--main-color)" : "text-(--primary-color)"
                }`}
              >
                {faq.question}
              </span>
              <MdExpandMore
                className={`text-xl text-(--alt-color)/60 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-(--main-color)" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              itemProp="acceptedAnswer"
              itemScope
              itemType="https://schema.org/Answer"
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen
                  ? "max-h-125 border-t border-gray-50 bg-gray-50/30"
                  : "max-h-0"
              }`}
            >
              <p
                itemProp="text"
                className="text-start p-4 md:p-5 text-xs md:text-sm text-(--alt-color)/80 font-medium leading-relaxed"
              >
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
