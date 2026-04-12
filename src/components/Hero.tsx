import { useEffect, useState, useRef } from "react";
import SperoteckLogo from "./SperoteckLogo";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
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

      {/* Animated glow orbs - react to mouse */}
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

      {/* Orbiting particles around logo */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`orbit-${i}`}
          className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full"
          style={{
            background: i % 3 === 0 
              ? 'hsl(82, 75%, 55%)' 
              : i % 3 === 1 
              ? 'hsl(82, 75%, 42%)' 
              : 'hsl(82, 50%, 65%)',
            boxShadow: `0 0 ${6 + i * 2}px hsl(82, 75%, 42%, 0.5)`,
            animation: `orbit-particle ${8 + i * 1.5}s linear infinite`,
            animationDelay: `${i * -0.7}s`,
            opacity: loaded ? 0.7 : 0,
            transition: 'opacity 1s ease-out',
            transitionDelay: `${1 + i * 0.1}s`,
            transformOrigin: '0 0',
            // Each particle orbits at a different radius
            ['--orbit-radius' as string]: `${180 + i * 15}px`,
          }}
        />
      ))}

      {/* Floating code-like symbols */}
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
          }}
        >
          {symbol}
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center mt-16">
        {/* Animated Logo with parallax */}
        <div className={`transition-all duration-[1.5s] ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div
            className="relative"
            style={{
              transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <SperoteckLogo size={364} className="animate-logo-spin drop-shadow-[0_0_80px_hsl(82,75%,42%,0.4)]" />
            {/* Multiple rings */}
            <div className="absolute inset-0 border border-primary/10 rounded-full scale-[1.6] animate-ring-pulse" />
            <div className="absolute inset-0 border border-primary/5 rounded-full scale-[2.0] animate-ring-pulse-slow" />
            <div className="absolute inset-0 border border-dashed border-primary/[0.07] rounded-full scale-[2.3] animate-ring-reverse" />
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mt-12 max-w-4xl mx-auto px-6">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light text-architectural mb-6 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block animate-text-shimmer bg-[length:200%_100%] bg-clip-text">
              Tailored Solutions
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[hsl(82,75%,55%)] to-primary bg-[length:200%_100%] animate-gradient-flow">
              for Online Success
            </span>
          </h1>
          <p className={`text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We breathe eCommerce for over 20 years. It's not just our specialty — it's our passion.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="/contact"
              className="group relative inline-flex items-center px-10 py-4 bg-primary text-primary-foreground font-semibold tracking-wide uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(82,75%,42%,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(82,75%,50%)] to-[hsl(82,75%,35%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </a>
            <a
              href="/work"
              className="group inline-flex items-center px-10 py-4 border border-primary/30 text-foreground font-medium tracking-wide uppercase text-sm hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(82,75%,42%,0.15)]"
            >
              View Our Work
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
