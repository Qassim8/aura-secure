"use client";
import React, { useState, useEffect } from "react";
import { MdPhone, MdKeyboardArrowUp } from "react-icons/md";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-center gap-4 select-none">
      <a
        href="tel:+966551622891"
        className="relative inline-flex items-center justify-center w-7 md:w-14 h-7 md:h-14 bg-emerald-600 text-white rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:bg-emerald-500 hover:scale-115 transition-all duration-300 group cursor-pointer"
        aria-label="Call Us"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping duration-1000 pointer-events-none"></span>

        <MdPhone className="text-base md:text-2xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
      </a>

      <button
        onClick={scrollTop}
        className={`w-7 md:w-12 h-7 md:h-12 bg-(--primary-color) hover:bg-(--main-color) border border-white/10 flex items-center justify-center rounded-full shadow-lg outline-none cursor-pointer transition-all duration-500 transform ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-75 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <MdKeyboardArrowUp className="text-white text-base md:text-2xl transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
