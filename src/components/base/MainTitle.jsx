import React from "react";

const MainTitle = ({
  title,
  subtitle = "",
  pos = "center", // القيمة الافتراضية للمحاذاة
  as: HeadingTag = "h2", // تخصيص الوسم ديناميكياً (h2, h3, h4) لضبط هرمية السيو
}) => {
  // تأمين فصل الكلمة الأخيرة بصيغة تدعم السيو ولا تكسر النصوص القصيرة
  const trimmedSubtitle = subtitle.trim();
  const words = trimmedSubtitle.split(/\s+/);

  let mainText = trimmedSubtitle;
  let lastWord = "";

  if (words.length > 1) {
    lastWord = words.pop();
    mainText = words.join(" ");
  }

  // خريطة لتأمين كلاسات Tailwind ومنع تكسرها أثناء عمل الـ Purge
  const alignmentClasses = {
    center: "items-center text-center justify-center",
    start: "items-start text-start justify-start",
    end: "items-end text-end justify-end",
  };

  const currentAlign = alignmentClasses[pos] || alignmentClasses.center;

  return (
    <header className={`relative mb-12 flex flex-col ${currentAlign} group`}>
      {/* العنوان الصغير العلوي (العلامة الدلالية للقسم) */}
      <div
        className="flex items-center gap-3 mb-4 select-none"
        aria-hidden="true"
      >
        <span className="w-8 h-0.5 bg-(--main-color)/40 block"></span>
        <span className="text-(--main-color) text-xs font-black tracking-[0.3em] uppercase">
          {title}
        </span>
        <span className="w-8 h-0.5 bg-(--main-color)/40 block"></span>
      </div>

      {/* العنوان الرئيسي للقسم - مرن وديناميكي للسيو */}
      <HeadingTag className="text-2xl md:text-4xl font-black text-(--primary-color) tracking-tight max-w-3xl leading-tight">
        {lastWord ? (
          <>
            {mainText}{" "}
            <span className="text-(--main-color) inline-block">{lastWord}</span>
          </>
        ) : (
          mainText
        )}
      </HeadingTag>
    </header>
  );
};

export default MainTitle;
