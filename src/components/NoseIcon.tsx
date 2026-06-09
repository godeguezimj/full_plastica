interface NoseIconProps {
  size?: number;
  className?: string;
}

export function NoseIcon({ size = 48, className = "" }: NoseIconProps) {
  return (
    <span className={`relative inline-flex animate-nose-float ${className}`}>
      <span
        aria-hidden
        className="absolute inset-0 rounded-full blur-xl animate-nose-glow"
        style={{
          background:
            "radial-gradient(circle, oklch(0.48 0.22 263 / 0.45) 0%, transparent 70%)",
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
        {/* Side profile of a nose, minimalist editorial line */}
        <path d="M28 8 C 27 18, 24 26, 20 34 C 17 40, 16 44, 19 47 C 22 49, 25 49, 28 48" />
        <path d="M28 48 C 30 52, 34 53, 38 51" opacity="0.85" />
        {/* Nostril hint */}
        <path d="M24 46 C 26 47, 29 47, 31 46" opacity="0.55" />
        {/* Bridge highlight */}
        <path d="M30 14 C 29.5 20, 28 26, 26 32" opacity="0.45" />
      </svg>
    </span>
  );
}
