const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const width = size;
  const height = size * 0.55;

  return (
    <svg
      viewBox="0 0 200 110"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 50%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 45%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 30%)" />
        </linearGradient>
      </defs>
      {/* Left circle - open on the right, passes BEHIND right circle at top, IN FRONT at bottom */}
      {/* Left circle bottom arc (in front of right circle) */}
      <path
        d="M 105 55 A 35 35 0 0 1 70 90 A 35 35 0 0 1 35 55"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="18"
        strokeLinecap="round"
        className="logo-path-1"
      />
      {/* Left circle top arc (behind right circle) */}
      <path
        d="M 35 55 A 35 35 0 0 1 70 20 A 35 35 0 0 1 105 55"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="18"
        strokeLinecap="round"
        className="logo-path-1"
      />
      {/* Right circle bottom arc (behind left circle) */}
      <path
        d="M 95 55 A 35 35 0 0 0 130 90 A 35 35 0 0 0 165 55"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="18"
        strokeLinecap="round"
        className="logo-path-2"
      />
      {/* Right circle top arc (in front of left circle) */}
      <path
        d="M 165 55 A 35 35 0 0 0 130 20 A 35 35 0 0 0 95 55"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="18"
        strokeLinecap="round"
        className="logo-path-2"
      />
    </svg>
  );
};

export default SperoteckLogo;
