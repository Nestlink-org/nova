import type React from "react";
export default function ModernBlobBg({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <svg
          className="absolute bottom-0 left-0 w-full h-[80vh] opacity-90"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="professionalGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#0f172a"
                className="dark:stop-color-slate-900 stop-color-slate-200"
              />
              <stop
                offset="25%"
                stopColor="#1e293b"
                className="dark:stop-color-slate-800 stop-color-slate-300"
              />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
            </radialGradient>
          </defs>

          <path
            fill="url(#professionalGradient)"
            d="
              M0,400
              C150,250 350,500 550,350
              C750,200 950,550 1150,400
              C1300,300 1440,450 1440,450
              L1440,900 L0,900 Z
            "
          />

          <path
            fill="url(#glowGradient)"
            d="
              M0,500
              C200,350 400,600 650,450
              C850,300 1050,650 1250,500
              C1350,450 1440,550 1440,550
              L1440,900 L0,900 Z
            "
          />
        </svg>

        <div className="absolute bottom-0 w-full h-[80vh] bg-gradient-to-t from-slate-900/20 dark:from-slate-900/40 via-sky-500/5 dark:via-sky-500/10 to-transparent blur-3xl opacity-60" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-radial from-cyan-500/10 dark:from-cyan-500/20 via-sky-500/5 dark:via-sky-500/10 to-transparent blur-2xl animate-pulse" />
      </div>

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </>
  );
}
