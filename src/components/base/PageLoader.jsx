"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// أقل مدة لظهور اللودر عند فتح الموقع لأول مرة
const INITIAL_MIN_MS = 600;
// حد أقصى احتياطي حتى لا يبقى اللودر عالقاً إذا فشل التنقل
const NAV_TIMEOUT_MS = 8000;

export default function PageLoader() {
  const pathname = usePathname();

  // يظهر من HTML الخادم مباشرة (قبل ظهور المحتوى) بدلاً من الظهور بعد التحميل
  const [booting, setBooting] = useState(true);
  // المسار الذي بدأ منه التنقل؛ اللودر يختفي تلقائياً عند تغيّر المسار
  const [pendingFrom, setPendingFrom] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), INITIAL_MIN_MS);
    return () => clearTimeout(timer);
  }, []);

  // إظهار اللودر لحظة الضغط على رابط داخلي، لا بعد عرض الصفحة الجديدة
  useEffect(() => {
    let timeout;

    const onClick = (e) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;

      const anchor = e.target.closest?.("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download"))
        return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      setPendingFrom(window.location.pathname);
      clearTimeout(timeout);
      timeout = setTimeout(() => setPendingFrom(null), NAV_TIMEOUT_MS);
    };

    // زر الرجوع/التقدم في المتصفح
    const onPopState = () => setPendingFrom(null);

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const navigating = pendingFrom !== null && pendingFrom === pathname;

  if (!booting && !navigating) return null;

  return (
    <div className="page-loader fixed inset-0 z-10000 flex flex-col items-center justify-center bg-(--primary-color) select-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(230,26,43,0.03)_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>

      <div className="relative flex flex-col items-center">
        <div className="relative w-32 h-32 flex items-center justify-center mb-6">
          <div className="absolute inset-0 border border-(--main-color)/20 rounded-full animate-ping duration-1000"></div>
          <div className="absolute inset-2 border border-(--main-color)/10 rounded-full animate-pulse"></div>

          <div className="absolute left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-(--main-color) to-transparent animate-laser-scan z-20 shadow-[0_0_10px_var(--main-color)]"></div>

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
      </div>

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
        /* احتياط: يختفي اللودر تلقائياً حتى لو لم يعمل JavaScript */
        @keyframes page-loader-autohide {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
        .page-loader {
          animation: page-loader-autohide 0.3s ease ${NAV_TIMEOUT_MS / 1000}s
            forwards;
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
