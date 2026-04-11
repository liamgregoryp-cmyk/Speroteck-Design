const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const width = size;
  const height = size * 0.5;

  // Two circles that interlink like chain links
  // Left circle center: (62, 50), Right circle center: (138, 50), radius: 34
  // Each is a ~270° arc (C-shape). Left opens right, right opens left.
  // They weave: at top right passes over left, at bottom left passes over right.

  const r = 34;
  const lcx = 62, rcy = 50, rcx = 138;
  const cy = 50;
  // Gap angle: 45° each side of opening = 90° total gap
  const gap = 45;
  const toRad = (d: number) => (d * Math.PI) / 180;

  // Left C opens to the right (0°). Arc from +gap° to (360 - gap)° clockwise
  const l_start_x = lcx + r * Math.cos(toRad(-gap));
  const l_start_y = cy + r * Math.sin(toRad(-gap));
  const l_end_x = lcx + r * Math.cos(toRad(gap));
  const l_end_y = cy + r * Math.sin(toRad(gap));

  // Right C opens to the left (180°). Arc from (180-gap)° to (180+gap)° counterclockwise
  const r_start_x = rcx + r * Math.cos(toRad(180 + gap));
  const r_start_y = cy + r * Math.sin(toRad(180 + gap));
  const r_end_x = rcx + r * Math.cos(toRad(180 - gap));
  const r_end_y = cy + r * Math.sin(toRad(180 - gap));

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
        <clipPath id="topHalf">
          <rect x="0" y="0" width="200" height="50" />
        </clipPath>
        <clipPath id="bottomHalf">
          <rect x="0" y="50" width="200" height="50" />
        </clipPath>
      </defs>

      {/* === TOP HALF: Right C in front of Left C === */}
      <path
        d={`M ${l_start_x.toFixed(1)} ${l_start_y.toFixed(1)} A ${r} ${r} 0 1 0 ${l_end_x.toFixed(1)} ${l_end_y.toFixed(1)}`}
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        clipPath="url(#topHalf)"
        className="logo-path-1"
      />
      <path
        d={`M ${r_start_x.toFixed(1)} ${r_start_y.toFixed(1)} A ${r} ${r} 0 1 0 ${r_end_x.toFixed(1)} ${r_end_y.toFixed(1)}`}
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="16"
        strokeLinecap="round"
        clipPath="url(#topHalf)"
        className="logo-path-2"
      />

      {/* === BOTTOM HALF: Left C in front of Right C === */}
      <path
        d={`M ${r_start_x.toFixed(1)} ${r_start_y.toFixed(1)} A ${r} ${r} 0 1 0 ${r_end_x.toFixed(1)} ${r_end_y.toFixed(1)}`}
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="16"
        strokeLinecap="round"
        clipPath="url(#bottomHalf)"
        className="logo-path-2"
      />
      <path
        d={`M ${l_start_x.toFixed(1)} ${l_start_y.toFixed(1)} A ${r} ${r} 0 1 0 ${l_end_x.toFixed(1)} ${l_end_y.toFixed(1)}`}
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        clipPath="url(#bottomHalf)"
        className="logo-path-1"
      />
    </svg>
  );
};

export default SperoteckLogo;
