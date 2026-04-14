import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (isNaN(index) || index === -1) {
              setHeaderVisible(true);
            } else {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: "01",
      title: "STORE IMPLEMENTATION",
      description: "We implement online stores from scratch — certified in all major eCommerce platforms, we'll help you pick the optimal one and walk you through the entire journey.",
      highlight: "From zero to launch",
    },
    {
      number: "02",
      title: "STORE IMPROVEMENT",
      description: "Is your website outdated and needs a fresh boost? Our designers and UX experts are ready for the mission to modernize and optimize your online presence.",
      highlight: "Modernize & optimize",
    },
    {
      number: "03",
      title: "PLATFORM MIGRATION",
      description: "Business expanded or changed its model? We'll make your platform transition smooth and seamless with paramount attention to details.",
      highlight: "Smooth transitions",
    },
    {
      number: "04",
      title: "24/7 MANAGED SUPPORT",
      description: "We always work. Literally. Our 24×7 staff shifts ensure your requests are addressed ASAP with constant monitoring and rapid response.",
      highlight: "Always on duty",
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent" />
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float-particle"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${6 + i * 2}s`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            ref={headerRef}
            className="mb-20"
            data-index="-1"
          >
            <h2
              className={`text-minimal text-primary mb-4 flex items-center gap-3 transition-all duration-700 ${
                headerVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className={`h-px bg-primary transition-all duration-1000 delay-200 ${headerVisible ? "w-8" : "w-0"}`} />
              SERVICES
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural overflow-hidden">
              {"What We ".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-500"
                  style={{
                    opacity: headerVisible ? 1 : 0,
                    transform: headerVisible ? "translateY(0) rotateX(0deg)" : "translateY(100%) rotateX(90deg)",
                    transitionDelay: `${i * 40 + 200}ms`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              {"Do".split("").map((char, i) => (
                <span
                  key={`do-${i}`}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)] transition-all duration-500"
                  style={{
                    opacity: headerVisible ? 1 : 0,
                    transform: headerVisible ? "translateY(0) rotateX(0deg)" : "translateY(100%) rotateX(90deg)",
                    transitionDelay: `${(i + 8) * 40 + 200}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                data-index={index}
                className={`group relative p-8 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 group-hover:border-primary/60 transition-all duration-500">
                    <span className="text-lg font-light text-primary">
                      {service.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-architectural group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-xs text-primary/60 mb-3 font-medium tracking-wider uppercase">
                      {service.highlight}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div
            className={`mt-16 flex justify-center transition-all duration-700 delay-700 ${
              visibleItems.length >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-primary/30 rounded-lg text-foreground hover:border-primary hover:text-primary hover:bg-primary/[0.03] transition-all duration-300"
            >
              <span className="text-minimal">EXPLORE ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
