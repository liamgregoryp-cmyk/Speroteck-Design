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
      {/* Top quarter curve */}
      <path
        d="M 100 20 C 100 20, 20 20, 20 100"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="28"
        strokeLinecap="round"
        className="logo-path-1"
      />
      {/* Bottom quarter curve */}
      <path
        d="M 100 180 C 100 180, 180 180, 180 100"
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
