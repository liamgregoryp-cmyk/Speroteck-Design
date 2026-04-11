const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const h = size * 0.55;
  return (
    <svg
      viewBox="0 0 110 55"
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
      {/* Left circle: centered at (35, 27.5), radius 18. Gap on right side so right ring threads through */}
      <path
        d="M 53 27.5
           A 18 18 0 1 1 35 9.5
           "
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Right circle: centered at (75, 27.5), radius 18. Gap on left side so left ring threads through */}
      <path
        d="M 57 27.5
           A 18 18 0 1 0 75 45.5
           "
        fill="none"
        stroke="url(#logoGrad2)"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SperoteckLogo;
