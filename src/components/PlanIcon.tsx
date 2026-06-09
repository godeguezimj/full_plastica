interface PlanIconProps {
  size?: number;
  className?: string;
}

export function PlanIcon({ size = 48, className = "" }: PlanIconProps) {
  return (
    <span className={`relative inline-flex animate-nose-float ${className}`}>
      <span
        aria-hidden
        className="absolute inset-0 rounded-full blur-xl animate-nose-glow"
        style={{
          background:
            "radial-gradient(circle, oklch(0.48 0.22 263 / 0.4) 0%, transparent 70%)",
        }}
      />
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative text-royal"
        aria-hidden
      >
        {/* Clipboard body */}
        <rect x="14" y="12" width="36" height="44" rx="3" />
        {/* Clip top */}
        <path d="M26 8 H 38 A 2 2 0 0 1 40 10 V 14 A 2 2 0 0 1 38 16 H 26 A 2 2 0 0 1 24 14 V 10 A 2 2 0 0 1 26 8 Z" />

        {/* Abstract face outline inside — animated draw */}
        <g className="animate-plan-draw">
          <path d="M26 26 C 24 30, 24 36, 27 40 C 29 43, 32 44, 35 43 C 38 42, 39 38, 38 34 C 37 30, 34 27, 30 26 Z" opacity="0.85" />
          {/* Measurement points */}
          <circle cx="30" cy="30" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="36" cy="32" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="33" cy="40" r="0.8" fill="currentColor" stroke="none" />
          {/* Connecting refinement lines */}
          <path d="M30 30 L 36 32 L 33 40 Z" opacity="0.5" strokeDasharray="1.5 1.8" />
        </g>

        {/* Plan lines */}
        <path d="M22 48 H 42" opacity="0.55" className="animate-plan-line" />
        <path d="M22 52 H 36" opacity="0.4" className="animate-plan-line-2" />
      </svg>
    </span>
  );
}
