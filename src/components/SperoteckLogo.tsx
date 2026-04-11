const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  // Two interlocking rings like chain links
  // Left circle at (30, 28), right circle at (58, 28), radius 17
  // Each has a ~90° gap where the other passes through
  // Interlocking: left ring in front at top, right ring in front at bottom

  const h = size * 0.6;
  return (
    <svg
      viewBox="0 0 88 56"
      width={size}
      height={h}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 48%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 48%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
      </defs>

      {/* 
        Left ring center: (30, 28), r=17
        Gap: right side, from -40° to +40° 
        Arc goes from +40° clockwise around to -40° (the long way = 280°)
        
        Right ring center: (58, 28), r=17
        Gap: left side, from 140° to 220°
        Arc goes from 220° clockwise to 140° (the long way = 280°)
        
        Interlocking order:
        1. Bottom part of left ring (behind right ring at bottom)
        2. Full right ring 
        3. Top part of left ring (in front of right ring at top)
      */}

      {/* Left ring - bottom portion (drawn first, goes behind right ring) */}
      <path
        d="M 42 28
           A 17 17 0 0 1 30 45
           A 17 17 0 0 1 18 28"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="7.5"
        strokeLinecap="round"
      />

      {/* Right ring - full 270° arc (gap on left side) */}
      <path
        d="M 46 28
           A 17 17 0 0 1 58 11
           A 17 17 0 0 1 75 28
           A 17 17 0 0 1 58 45
           A 17 17 0 0 1 46 28"
        fill="none"
        stroke="url(#logoGrad2)"
        strokeWidth="7.5"
        strokeLinecap="round"
      />

      {/* Left ring - top portion (drawn last, goes in front of right ring) */}
      <path
        d="M 18 28
           A 17 17 0 0 1 30 11
           A 17 17 0 0 1 42 28"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SperoteckLogo;
