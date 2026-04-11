import { useEffect, useState } from "react";
import SperoteckLogo from "./SperoteckLogo";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(82, 75%, 42%) 1px, transparent 1px), linear-gradient(90deg, hsl(82, 75%, 42%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px] animate-breathe" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo */}
        <div className={`transition-all duration-[1.5s] ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="relative">
            <SperoteckLogo size={280} className="animate-logo-spin drop-shadow-[0_0_60px_hsl(82,75%,42%,0.3)]" />
            {/* Logo ring */}
            <div className="absolute inset-0 border border-primary/10 rounded-full scale-[1.6] animate-ring-pulse" />
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mt-12 max-w-4xl mx-auto px-6">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light text-architectural mb-6 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Tailored Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)]">
              for Online Success
            </span>
          </h1>
          <p className={`text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We breathe eCommerce for over 20 years. It's not just our specialty — it's our passion.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="/contact"
              className="group relative inline-flex items-center px-10 py-4 bg-primary text-primary-foreground font-semibold tracking-wide uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(82,75%,42%,0.4)]"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(82,75%,50%)] to-[hsl(82,75%,35%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/work"
              className="inline-flex items-center px-10 py-4 border border-primary/30 text-foreground font-medium tracking-wide uppercase text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-[1.5s] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent animate-scroll-line" />
        <span className="text-minimal text-primary/50 mt-3 text-[10px]">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
