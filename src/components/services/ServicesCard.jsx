import React from "react";
import { MdArrowForward } from "react-icons/md";

const ServicesCard = ({ service }) => {
  return (
    <div className="group relative p-5 md:p-12 border-b border-l border-(--title-color)/5 transition-all duration-500 hover:bg-(--primary-color)/90 overflow-hidden">
      <div className="absolute -bottom-6 -right-6 text-9xl text-(--title-color)/4 group-hover:text-white/5 transition-colors">
        {service.icon}
      </div>

      <div className="text-3xl md:text-5xl text-(--main-color) mb-6 group-hover:scale-110 transition-transform duration-500">
        {service.icon}
      </div>

      <h3 className="text-lg md:text-2xl font-black text-(--primary-color) mb-4 group-hover:text-white transition-colors uppercase leading-none">
        {service.title}
      </h3>

      <p className="text-sm text-(--alt-color) leading-relaxed group-hover:text-white/70 transition-colors">
        {service.desc}
      </p>
    </div>
  );
};

export default ServicesCard;
