const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 50%)" />
          <stop offset="50%" stopColor="hsl(82, 75%, 42%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 34%)" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 55%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 38%)" />
        </linearGradient>
      </defs>
      {/* Top S curve */}
      <path
        d="M 100 15 C 55 15, 20 45, 20 80 C 20 115, 55 135, 100 135"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="28"
        strokeLinecap="round"
        className="logo-path-1"
      />
      {/* Bottom S curve */}
      <path
        d="M 100 65 C 145 65, 180 85, 180 120 C 180 155, 145 185, 100 185"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="28"
        strokeLinecap="round"
        className="logo-path-2"
      />
    </svg>
  );
};

export default SperoteckLogo;
