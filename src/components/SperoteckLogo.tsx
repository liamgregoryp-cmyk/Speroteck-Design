const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const width = size;
  const height = size * 0.5;

  return (
    <svg
      viewBox="0 0 200 100"
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
        {/* Clip to only show top half */}
        <clipPath id="topHalf">
          <rect x="0" y="0" width="200" height="50" />
        </clipPath>
        {/* Clip to only show bottom half */}
        <clipPath id="bottomHalf">
          <rect x="0" y="50" width="200" height="50" />
        </clipPath>
      </defs>

      {/*
        Two interlinking C-shapes:
        - Left circle at (65, 50), r=32, opens to the right (~90° gap)
        - Right circle at (135, 50), r=32, opens to the left (~90° gap)
        
        Interlocking: At top, right is in front of left.
                      At bottom, left is in front of right.
        
        Draw order matters for layering within each clip region.
      */}

      {/* === TOP HALF === */}
      {/* Left C - top half (behind) */}
      <path
        d="M 97 50 A 32 32 0 1 0 97 50.01"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        clipPath="url(#topHalf)"
        strokeDasharray="155 46"
        strokeDashoffset="-23"
        className="logo-path-1"
      />
      {/* Right C - top half (in front) */}
      <path
        d="M 103 50 A 32 32 0 1 1 103 50.01"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="16"
        strokeLinecap="round"
        clipPath="url(#topHalf)"
        strokeDasharray="155 46"
        strokeDashoffset="-23"
        className="logo-path-2"
      />

      {/* === BOTTOM HALF === */}
      {/* Right C - bottom half (behind) */}
      <path
        d="M 103 50 A 32 32 0 1 1 103 50.01"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="16"
        strokeLinecap="round"
        clipPath="url(#bottomHalf)"
        strokeDasharray="155 46"
        strokeDashoffset="-23"
        className="logo-path-2"
      />
      {/* Left C - bottom half (in front) */}
      <path
        d="M 97 50 A 32 32 0 1 0 97 50.01"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        clipPath="url(#bottomHalf)"
        strokeDasharray="155 46"
        strokeDashoffset="-23"
        className="logo-path-1"
      />
    </svg>
  );
};

export default SperoteckLogo;
