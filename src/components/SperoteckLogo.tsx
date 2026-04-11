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
          <stop offset="0%" stopColor="hsl(82, 75%, 55%)" />
          <stop offset="50%" stopColor="hsl(82, 75%, 45%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 38%)" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="hsl(82, 75%, 55%)" />
          <stop offset="50%" stopColor="hsl(82, 75%, 45%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 38%)" />
        </linearGradient>
      </defs>
      {/* Top arc - 270 degree arc opening to the right */}
      <path
        d="M 100 30 A 55 55 0 1 0 155 85"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="26"
        strokeLinecap="round"
        className="logo-path-1"
      />
      {/* Bottom arc - 270 degree arc opening to the left */}
      <path
        d="M 100 170 A 55 55 0 1 0 45 115"
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
