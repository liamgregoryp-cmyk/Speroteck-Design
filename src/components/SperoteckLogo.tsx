const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  return (
    <svg
      viewBox="0 0 100 60"
      width={size}
      height={size * 0.6}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 50%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 38%)" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 50%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 38%)" />
        </linearGradient>
      </defs>
      {/* Left C - opens to the right */}
      <path
        d="M 52 20 C 42 8, 22 8, 15 20 C 8 32, 18 46, 32 42 C 38 40, 42 36, 44 30"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Right C - opens to the left, interlocking */}
      <path
        d="M 48 40 C 58 52, 78 52, 85 40 C 92 28, 82 14, 68 18 C 62 20, 58 24, 56 30"
        fill="none"
        stroke="url(#logoGrad2)"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SperoteckLogo;
