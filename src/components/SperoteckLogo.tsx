const SperoteckLogo = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  const width = size;
  const height = size * 0.75; // wider aspect ratio

  return (
    <svg
      viewBox="0 0 280 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 55%)" />
          <stop offset="50%" stopColor="hsl(82, 75%, 42%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 34%)" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82, 75%, 50%)" />
          <stop offset="100%" stopColor="hsl(82, 75%, 35%)" />
        </linearGradient>
      </defs>
      {/* Upper arc - opens right, curves from top-center down to mid-left */}
      <path
        d="M 150 10 C 60 10, 5 55, 5 100 C 5 145, 60 185, 140 160"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="30"
        strokeLinecap="round"
        className="logo-path-1"
      />
      {/* Lower arc - opens left, curves from mid-right up to bottom-center */}
      <path
        d="M 130 40 C 220 15, 275 55, 275 100 C 275 145, 220 190, 130 190"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="30"
        strokeLinecap="round"
        className="logo-path-2"
      />
    </svg>
  );
};

export default SperoteckLogo;
