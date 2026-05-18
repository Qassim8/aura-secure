import React from "react";

const MainTitle = ({ title, subtitle, pos }) => {
  const words = subtitle.split(" ");
  const lastWord = words.pop();
  const mainText = words.join(" ");

  return (
    <div
      className={`relative mb-10 flex flex-col items-${pos} text-${pos} group`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-0.5 bg-(--main-color)/50"></span>
        <span className="text-(--main-color) text-xs font-black tracking-[0.3em] uppercase">
          {title}
        </span>
        <span className="w-8 h-0.5 bg-(--main-color)/50"></span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-(--primary-color) tracking-tight max-w-5xl leading-tight">
        {mainText}{" "}
        <span className="text-(--main-color) inline-block">{lastWord}</span>
      </h2>
    </div>
  );
};

export default MainTitle;
