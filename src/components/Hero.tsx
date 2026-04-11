import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white text-architectural mb-8 reveal">
          Tailored Solutions
          <br />
          <span className="text-primary">for Online Success</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-3xl mx-auto mb-12 reveal-delayed">
          We breathe eCommerce for over 20 years. It's not just our specialty — it's our passion.
        </p>
        <a 
          href="/contact" 
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium tracking-wide uppercase text-sm hover:opacity-90 transition-opacity duration-300 reveal-delayed"
        >
          Get in Touch
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-primary/40" />
        <div className="text-minimal text-primary/60 mt-4 rotate-90 origin-center">
          SCROLL
        </div>
      </div>
    </section>
  );
};

export default Hero;
