const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const width = size;
  const height = size * 0.6;

  return (
    <svg
      viewBox="0 0 240 140"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 55%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 50%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 32%)" />
        </linearGradient>
      </defs>
      {/* Left C - opens to the right */}
      <path
        d="M 120 28 C 85 28, 12 35, 12 70 C 12 105, 85 112, 120 112"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="26"
        strokeLinecap="round"
        className="logo-path-1"
      />
      {/* Right C - opens to the left (mirrored) */}
      <path
        d="M 120 28 C 155 28, 228 35, 228 70 C 228 105, 155 112, 120 112"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="26"
        strokeLinecap="round"
        className="logo-path-2"
      />
    </svg>
  );
};

export default SperoteckLogo;
