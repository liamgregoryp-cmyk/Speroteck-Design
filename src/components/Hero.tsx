import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import SperoteckLogo from "./SperoteckLogo";

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(82, 75%, 42%) 1px, transparent 1px), linear-gradient(90deg, hsl(82, 75%, 42%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
          transition: 'transform 0.3s ease-out',
        }} />
      </div>

      {/* Animated glow orbs */}
      <div
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow"
        style={{
          top: `calc(25% + ${mousePos.y * 40}px)`,
          right: `calc(25% - ${mousePos.x * 40}px)`,
          transition: 'top 0.5s ease-out, right 0.5s ease-out',
        }}
      />
      <div
        className="absolute w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow-delayed"
        style={{
          bottom: `calc(25% - ${mousePos.y * 30}px)`,
          left: `calc(25% + ${mousePos.x * 30}px)`,
          transition: 'bottom 0.5s ease-out, left 0.5s ease-out',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px] animate-breathe" />

      {/* Floating code symbols */}
      {['</', '/>', '{}', '()', '[]', '&&', '=>', '**'].map((symbol, i) => (
        <div
          key={`symbol-${i}`}
          className="absolute text-primary/[0.08] font-mono text-lg select-none"
          style={{
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 4) * 20}%`,
            animation: `float-symbol ${6 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            transform: `rotate(${i * 15}deg)`,
            opacity: showText ? undefined : 0,
            transition: 'opacity 1s ease-out',
          }}
        >
          {symbol}
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center mt-16">
        {/* Logo - static, no animation */}
        <div className="relative flex items-center justify-center" style={{ width: 364, height: 364 }}>
          <SperoteckLogo size={364} />
        </div>

        {/* Hero Text - appears after logo settles */}
        <div className="text-center mt-12 max-w-4xl mx-auto px-6">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-architectural mb-6"
            style={{
              opacity: showText ? 1 : 0,
              transform: showText ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
            }}
          >
            <span className="inline-block animate-text-shimmer bg-[length:200%_100%] bg-clip-text">
              Tailored Solutions
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[hsl(82,75%,55%)] to-primary bg-[length:200%_100%] animate-gradient-flow">
              for Online Success
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto mb-10"
            style={{
              opacity: showText ? 1 : 0,
              transform: showText ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.4s ease-out 0.1s, transform 0.4s ease-out 0.1s',
            }}
          >
            We breathe eCommerce for over 25 years. It's not just our specialty — it's our passion.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              opacity: showText ? 1 : 0,
              transform: showText ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.4s ease-out 0.2s, transform 0.4s ease-out 0.2s',
            }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center px-10 py-4 bg-primary text-primary-foreground font-semibold tracking-wide uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(82,75%,42%,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(82,75%,50%)] to-[hsl(82,75%,35%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
            <Link
              to="/work"
              className="group inline-flex items-center px-10 py-4 border border-primary/30 text-foreground font-medium tracking-wide uppercase text-sm hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(82,75%,42%,0.15)]"
            >
              View Our Work
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
