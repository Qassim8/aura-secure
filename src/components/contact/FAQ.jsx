import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const FAQ = ({ t }) => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    { question: t("faq_q1"), answer: t("faq_a1") },
    { question: t("faq_q2"), answer: t("faq_a2") },
    { question: t("faq_q3"), answer: t("faq_a3") },
    { question: t("faq_q4"), answer: t("faq_a4") },
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = activeFaq === idx;
        return (
          <div
            key={idx}
            className={`border overflow-hidden transition-all duration-300 ${
              isOpen
                ? "bg-white border-gray-200/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)]"
                : "bg-white/60 border-gray-100 hover:border-gray-200"
            }`}
          >
            <button
              onClick={() => setActiveFaq(isOpen ? null : idx)}
              className="w-full p-5 flex items-center justify-between gap-4 text-start cursor-pointer select-none"
            >
              <span
                className={`text-sm md:text-base font-black transition-colors duration-300 ${
                  isOpen ? "text-(--main-color)" : "text-(--primary-color)"
                }`}
              >
                {faq.question}
              </span>
              <MdExpandMore
                className={`text-xl text-(--alt-color)/60 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-(--main-color)" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen
                  ? "max-h-40 border-t border-gray-50 bg-gray-50/30"
                  : "max-h-0"
              }`}
            >
              <p className="text-start p-3 md:p-5 text-xs md:text-sm text-(--alt-color)/80 font-medium leading-relaxed">
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
