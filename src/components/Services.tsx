import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: "01",
      title: "STORE IMPLEMENTATION",
      description: "We implement online stores from scratch — certified in all major eCommerce platforms, we'll help you pick the optimal one and walk you through the entire journey.",
      icon: "🚀"
    },
    {
      number: "02",
      title: "STORE IMPROVEMENT",
      description: "Is your website outdated and needs a fresh boost? Our designers and UX experts are ready for the mission to modernize and optimize your online presence.",
      icon: "✨"
    },
    {
      number: "03",
      title: "PLATFORM MIGRATION",
      description: "Business expanded or changed its model? We'll make your platform transition smooth and seamless with paramount attention to details.",
      icon: "🔄"
    },
    {
      number: "04",
      title: "24/7 MANAGED SUPPORT",
      description: "We always work. Literally. Our 24×7 staff shifts ensure your requests are addressed ASAP with constant monitoring and rapid response.",
      icon: "🛡️"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20" data-index="-1">
            <h2 className="text-minimal text-primary mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              SERVICES
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)]">Do</span>
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
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-3xl block mb-2">{service.icon}</span>
                    <span className="text-minimal text-primary font-bold">
                      {service.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-3 text-architectural group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h4>
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
        </div>
      </div>
    </section>
  );
};

export default Services;
