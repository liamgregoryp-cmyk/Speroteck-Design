import { useEffect, useRef, useState } from "react";

const TrustedBy = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const platforms = [
    "Salesforce Commerce Cloud",
    "Shopify Plus",
    "BigCommerce",
    "Magento",
    "Adobe Commerce",
    "Shopware",
  ];

  // Double for seamless loop
  const tickerItems = [...platforms, ...platforms];

  return (
    <section ref={ref} className="py-16 bg-muted/30 border-y border-border/50 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-8">
        <p
          className={`text-center text-minimal text-muted-foreground transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          CERTIFIED ACROSS LEADING PLATFORMS
        </p>
      </div>
      <div
        className={`transition-all duration-1000 delay-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex animate-scroll-left whitespace-nowrap">
          {tickerItems.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-8 mx-8 flex-shrink-0"
            >
              <span className="text-xl md:text-2xl font-light text-muted-foreground/60 hover:text-primary transition-colors duration-500 whitespace-nowrap">
                {name}
              </span>
              <span className="w-1.5 h-1.5 bg-primary/30 rounded-full flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
