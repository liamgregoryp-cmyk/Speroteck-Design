const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const width = size;
  const height = size * 0.55;

  // Two circles: left at (70,55) r=35, right at (130,55) r=35
  // They intersect at ~(100, 37) and (100, 73)
  // Gap angle from each center: acos(30/35) ≈ 31°
  // We break each circle into two arcs with gaps at intersection points

  const r = 35;
  const sw = 18;

  // Left circle center (70,55), gap on right side from -31° to +31°
  // Arc 1: from +38° to 322° (going clockwise, the big arc avoiding the gap)
  const lg = 38; // gap half-angle in degrees + a little extra
  const toRad = (d: number) => (d * Math.PI) / 180;

  // Left circle: gap at 0° (right side). Draw arc from lg° around to -lg° (i.e., 360-lg)
  const lx1 = 70 + r * Math.cos(toRad(lg));
  const ly1 = 55 + r * Math.sin(toRad(lg));
  const lx2 = 70 + r * Math.cos(toRad(-lg));
  const ly2 = 55 + r * Math.sin(toRad(-lg));

  // Right circle: gap at 180° (left side). Draw arc from (180+lg)° to (180-lg)°
  const rx1 = 130 + r * Math.cos(toRad(180 + lg));
  const ry1 = 55 + r * Math.sin(toRad(180 + lg));
  const rx2 = 130 + r * Math.cos(toRad(180 - lg));
  const ry2 = 55 + r * Math.sin(toRad(180 - lg));

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

      {/* Left circle - large arc avoiding the right-side gap */}
      <path
        d={`M ${lx1} ${ly1} A ${r} ${r} 0 1 1 ${lx2} ${ly2}`}
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth={sw}
        strokeLinecap="round"
        className="logo-path-1"
      />

      {/* Right circle - large arc avoiding the left-side gap */}
      <path
        d={`M ${rx1} ${ry1} A ${r} ${r} 0 1 1 ${rx2} ${ry2}`}
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth={sw}
        strokeLinecap="round"
        className="logo-path-2"
      />
    </svg>
  );
};

export default SperoteckLogo;
