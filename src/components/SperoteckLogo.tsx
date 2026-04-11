const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const h = size * 0.83;
  return (
    <svg
      viewBox="0 0 60 50"
      width={size}
      height={h}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 48%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 48%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
      </defs>

      {/* Left ring bottom half (behind right ring) */}
      <path
        d="M 5 25 A 15 15 0 0 0 30 36.18"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="5.5"
        strokeLinecap="round"
      />

      {/* Right ring 270° arc (gap on left) */}
      <path
        d="M 30 36.18 A 15 15 0 0 0 55 25 A 15 15 0 0 0 30 13.82"
        fill="none"
        stroke="url(#logoGrad2)"
        strokeWidth="5.5"
        strokeLinecap="round"
      />

      {/* Left ring top half (in front of right ring) */}
      <path
        d="M 30 13.82 A 15 15 0 0 0 5 25"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SperoteckLogo;
