interface EyeIconProps {
  size?: number;
  className?: string;
}

export function EyeIcon({ size = 48, className = "" }: EyeIconProps) {
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
        {/* Upper eyelid — animated for blink */}
        <path
          d="M8 32 C 18 18, 46 18, 56 32"
          className="origin-center animate-eye-blink"
          style={{ transformBox: "fill-box" }}
        />
        {/* Lower eyelid */}
        <path d="M8 32 C 18 46, 46 46, 56 32" />
        {/* Iris */}
        <circle cx="32" cy="32" r="7" opacity="0.85" />
        {/* Pupil highlight */}
        <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.5" stroke="none" />
        {/* Lash hint */}
        <path d="M14 22 L 12 19" opacity="0.5" />
        <path d="M50 22 L 52 19" opacity="0.5" />
        <path d="M32 17 L 32 14" opacity="0.5" />
      </svg>
    </span>
  );
}
