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
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 55%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 38%)" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 50%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
      </defs>
      {/* Top arc - opens to the right */}
      <path
        d="M 105 100 C 105 55, 65 25, 40 40 C 15 55, 15 95, 55 100"
        fill="none"
        stroke="url(#logoGrad1)"
        strokeWidth="24"
        strokeLinecap="round"
      />
      {/* Bottom arc - opens to the left */}
      <path
        d="M 95 100 C 95 145, 135 175, 160 160 C 185 145, 185 105, 145 100"
        fill="none"
        stroke="url(#logoGrad2)"
        strokeWidth="24"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SperoteckLogo;
