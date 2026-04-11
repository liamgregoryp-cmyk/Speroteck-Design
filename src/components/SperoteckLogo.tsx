const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const h = size * 0.5;
  return (
    <svg
      viewBox="0 0 100 50"
      width={size}
      height={h}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 45%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 45%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
      </defs>
      {/* Left ring - 270° arc with gap at bottom-right, so right ring can pass through */}
      <path
        d="M 50 8
           A 17 17 0 1 0 50 42
           A 17 17 0 0 0 38.5 12.5"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Right ring - 270° arc with gap at top-left, so left ring can pass through */}
      <path
        d="M 50 42
           A 17 17 0 1 0 50 8
           A 17 17 0 0 0 61.5 37.5"
        fill="none"
        stroke="url(#logoGrad2)"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SperoteckLogo;
