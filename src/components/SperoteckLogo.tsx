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
        <clipPath id="clipTop">
          <rect x="0" y="0" width="200" height="55" />
        </clipPath>
        <clipPath id="clipBottom">
          <rect x="0" y="55" width="200" height="55" />
        </clipPath>
      </defs>

      {/* Layer 1: Left circle top half (behind) */}
      <circle
        cx="70" cy="55" r="35"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="18"
        clipPath="url(#clipTop)"
        className="logo-path-1"
      />

      {/* Layer 2: Right circle full (on top of left-top) */}
      <circle
        cx="130" cy="55" r="35"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="18"
        clipPath="url(#clipTop)"
        className="logo-path-2"
      />

      {/* Layer 3: Right circle bottom half (behind) */}
      <circle
        cx="130" cy="55" r="35"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="18"
        clipPath="url(#clipBottom)"
        className="logo-path-2"
      />

      {/* Layer 4: Left circle bottom half (on top of right-bottom) */}
      <circle
        cx="70" cy="55" r="35"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="18"
        clipPath="url(#clipBottom)"
        className="logo-path-1"
      />
    </svg>
  );
};

export default SperoteckLogo;
