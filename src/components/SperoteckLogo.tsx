const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const width = size;
  const height = size * 0.6;

  // Two interlocking C-shapes (like chain links)
  // Left C: center (58,55), opens right. Right C: center (102,55), opens left.
  const r = 30;
  const sw = 14;
  const lcx = 52, rcx = 108, cy = 55;
  const gap = 40; // degrees from opening direction
  const toRad = (d: number) => (d * Math.PI) / 180;

  // Left C opens right (0°): arc from +gap to -gap (going the long way around)
  const ls = { x: lcx + r * Math.cos(toRad(gap)), y: cy + r * Math.sin(toRad(gap)) };
  const le = { x: lcx + r * Math.cos(toRad(-gap)), y: cy + r * Math.sin(toRad(-gap)) };

  // Right C opens left (180°): arc from (180-gap) to (180+gap) (going the long way)
  const rs = { x: rcx + r * Math.cos(toRad(180 - gap)), y: cy + r * Math.sin(toRad(180 - gap)) };
  const re = { x: rcx + r * Math.cos(toRad(180 + gap)), y: cy + r * Math.sin(toRad(180 + gap)) };

  return (
    <svg
      viewBox="0 0 160 110"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 80%, 55%)" />
          <stop offset="50%" stopColor="hsl(82, 75%, 45%)" />
          <stop offset="100%" stopColor="hsl(82, 70%, 32%)" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 80%, 52%)" />
          <stop offset="50%" stopColor="hsl(82, 75%, 42%)" />
          <stop offset="100%" stopColor="hsl(82, 70%, 28%)" />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="topClip">
          <rect x="0" y="0" width="160" height="55" />
        </clipPath>
        <clipPath id="bottomClip">
          <rect x="0" y="55" width="160" height="55" />
        </clipPath>
      </defs>

      <g filter="url(#logoGlow)">
        {/* TOP HALF: right C in front */}
        <path
          d={`M ${ls.x.toFixed(1)} ${ls.y.toFixed(1)} A ${r} ${r} 0 1 0 ${le.x.toFixed(1)} ${le.y.toFixed(1)}`}
          fill="none"
          stroke="url(#logoGrad1)"
          strokeWidth={sw}
          strokeLinecap="round"
          clipPath="url(#topClip)"
          className="logo-path-1"
        />
        <path
          d={`M ${rs.x.toFixed(1)} ${rs.y.toFixed(1)} A ${r} ${r} 0 1 1 ${re.x.toFixed(1)} ${re.y.toFixed(1)}`}
          fill="none"
          stroke="url(#logoGrad2)"
          strokeWidth={sw}
          strokeLinecap="round"
          clipPath="url(#topClip)"
          className="logo-path-2"
        />

        {/* BOTTOM HALF: left C in front */}
        <path
          d={`M ${rs.x.toFixed(1)} ${rs.y.toFixed(1)} A ${r} ${r} 0 1 1 ${re.x.toFixed(1)} ${re.y.toFixed(1)}`}
          fill="none"
          stroke="url(#logoGrad2)"
          strokeWidth={sw}
          strokeLinecap="round"
          clipPath="url(#bottomClip)"
          className="logo-path-2"
        />
        <path
          d={`M ${ls.x.toFixed(1)} ${ls.y.toFixed(1)} A ${r} ${r} 0 1 0 ${le.x.toFixed(1)} ${le.y.toFixed(1)}`}
          fill="none"
          stroke="url(#logoGrad1)"
          strokeWidth={sw}
          strokeLinecap="round"
          clipPath="url(#bottomClip)"
          className="logo-path-1"
        />
      </g>
    </svg>
  );
};

export default SperoteckLogo;
