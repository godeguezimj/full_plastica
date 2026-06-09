interface FaceIconProps {
  size?: number;
  className?: string;
}

export function FaceIcon({ size = 48, className = "" }: FaceIconProps) {
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
        className="relative text-royal animate-face-morph"
        aria-hidden
        style={{ transformOrigin: "center" }}
      >
        {/* Abstract feminine profile — single flowing line */}
        <path d="M22 8 C 18 14, 17 22, 19 30 C 20 36, 22 40, 21 46 C 20 52, 24 58, 32 58" />
        {/* Forehead to nose curve */}
        <path d="M22 8 C 30 6, 38 10, 40 18 C 41 24, 38 26, 36 30 C 35 33, 38 34, 40 36" opacity="0.85" />
        {/* Lips hint */}
        <path d="M34 40 C 36 41, 38 41, 40 40" opacity="0.6" />
        {/* Chin to neck */}
        <path d="M32 58 C 36 56, 38 52, 38 48" opacity="0.7" />
        {/* Hair flow — organic */}
        <path d="M22 8 C 14 12, 10 22, 12 34 C 13 42, 16 50, 14 58" opacity="0.55" />
        <path d="M16 16 C 11 22, 9 30, 11 40" opacity="0.4" />
        {/* Eye accent */}
        <path d="M28 22 C 30 21, 32 21, 34 22" opacity="0.7" />
      </svg>
    </span>
  );
}
