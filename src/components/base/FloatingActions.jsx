"use client";
import React, { useState, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdKeyboardArrowUp, MdPhone } from "react-icons/md";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-center gap-2 md:gap-4 select-none">
      <a
        href="tel:+966551622891"
        className="w-9 md:w-12 h-9 md:h-12 relative bg-emerald-600 hover:bg-emerald-500 hover:scale-115 transition-all duration-300 group flex items-center justify-center rounded-full"
        aria-label="Call Us"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping duration-1000 pointer-events-none"></span>

        <MdPhone className="text-white text-base md:text-2xl transition-transform duration-300 group-hover:-translate-y-0.5" />
      </a>

      <button
        onClick={scrollTop}
        className={`w-9 md:w-12 h-9 md:h-12 bg-(--primary-color) hover:bg-(--main-color) border border-white/10 flex items-center justify-center rounded-full shadow-lg outline-none cursor-pointer transition-all duration-500 transform ${
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
