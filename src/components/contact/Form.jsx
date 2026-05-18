import React from "react";
import { MdSend } from "react-icons/md";

const Form = ({ t, isRtl }) => {
  return (
    <div id="contact">
      <div className="absolute inset-0 bg-(--primary-color) translate-x-4 translate-y-4 -z-10 opacity-5"></div>

      <div className="bg-white p-8 md:p-12 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.05)] border-t-8 border-(--primary-color)">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { label: t("Form_Name"), type: "text", full: false },
            { label: t("Form_Email"), type: "email", full: false },
            { label: t("Form_Subject"), type: "text", full: true },
          ].map((field, i) => (
            <div
              key={i}
              className={`relative group ${field.full ? "md:col-span-2" : ""}`}
            >
              <input
                type={field.type}
                required
                className="peer w-full bg-transparent border-b-2 border-gray-100 py-2 focus:border-(--main-color) outline-none transition-all font-bold text-(--primary-color) placeholder-transparent text-sm md:text-base"
                placeholder={field.label}
              />
              <label
                className={`absolute ${isRtl ? "right-0" : "left-0"} -top-6 text-[10px] font-black text-(--alt-color)/40 uppercase tracking-widest transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:font-bold peer-placeholder-shown:text-(--primary-color)/50 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-(--main-color) peer-focus:font-black`}
              >
                {field.label}
              </label>
            </div>
          ))}

          <div className="md:col-span-2 relative group">
            <textarea
              rows="3"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-100 py-2 focus:border-(--main-color) outline-none transition-all font-bold text-(--primary-color) placeholder-transparent text-sm md:text-base resize-none"
              placeholder={t("Form_Msg")}
            ></textarea>
            <label
              className={`absolute ${isRtl ? "right-0" : "left-0"} -top-6 text-[10px] font-black text-(--alt-color)/40 uppercase tracking-widest transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:font-bold peer-placeholder-shown:text-(--primary-color)/50 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-(--main-color) peer-focus:font-black text-start`}
            >
              {t("Form_Msg")}
            </label>
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              className="group relative w-full md:w-auto px-5 md:px-12 py-4 bg-transparent text-(--main-color) border-2 border-(--main-color) overflow-hidden transition-all 
            duration-300 active:scale-95 shadow-xl hover:text-white hover:shadow-(--primary-color)/20 cursor-pointer"
            >
              {/* طبقة الـ Hover التأثيرية باللون الأحمر المعتمد */}
              <span className="absolute inset-0 w-0 text-white bg-(--main-color) transition-all duration-500 group-hover:w-full"></span>

              <span className="relative z-10 flex items-center justify-center gap-3 font-black text-xs uppercase md:tracking-[3px]">
                {t("Form_Btn")}
                <MdSend
                  className={`text-base transition-transform duration-500 ${isRtl ? "rotate-180 group-hover:-translate-x-2" : "group-hover:translate-x-2"}`}
                />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
