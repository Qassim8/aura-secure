"use client";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdSecurity } from "react-icons/md";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // رفعناها لـ 1000ms عشان المستخدم يستمتع بالفخامة وتأثير الرادار

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-(--primary-color) select-none overflow-hidden">
      {/* التأثير الخلفي الهادئ: شبكة هندسية خفيفة جداً */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(230,26,43,0.03)_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>

      <div className="relative flex flex-col items-center">
        {/* الحاوية الكبرى للرادار واللوجو */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-6">
          {/* 1. حلقات الرادار المضيئة النبضية (Radar Pulses) */}
          <div className="absolute inset-0 border border-(--main-color)/20 rounded-full animate-ping duration-1000"></div>
          <div className="absolute inset-2 border border-(--main-color)/10 rounded-full animate-pulse"></div>

          {/* 2. خط المسح الليزري العمودي (Laser Scanner) */}
          <div className="absolute left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-(--main-color) to-transparent animate-laser-scan z-20 shadow-[0_0_10px_var(--main-color)]"></div>

          {/* 3. اللوجو الفخم ثابت ومحمي في المنتصف */}
          <div className="relative z-10 transition-all duration-500 scale-100 group-hover:scale-105">
            <Image
              src="/fire.png"
              alt="Fire"
              width={90}
              height={90}
              priority
              className="drop-shadow-[0_0_20px_rgba(230,26,43,0.15)]"
            />
          </div>
        </div>

        {/* 5. خط التحميل الميكانيكي النظيف */}
        <div className="h-0.5 w-36 overflow-hidden rounded-full bg-white/5 relative">
          <div className="h-full bg-(--main-color) animate-progress-loading shadow-[0_0_8px_var(--main-color)]"></div>
        </div>
      </div>

      {/* الـ Keyframes الخاصة بالأنميشن الاحترافي لـ أنظمة السلامة */}
      <style jsx global>{`
        @keyframes laser-scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes progress-loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-laser-scan {
          animation: laser-scan 2s infinite ease-in-out;
        }
        .animate-progress-loading {
          animation: progress-loading 1.2s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
