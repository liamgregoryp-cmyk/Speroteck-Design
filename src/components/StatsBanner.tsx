import { useEffect, useRef, useState } from "react";

const StatsBanner = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, uptime: 0, platforms: 0, satisfaction: 0 });
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          let frame = 0;
          const total = 50;
          const interval = setInterval(() => {
            frame++;
            const ease = 1 - Math.pow(1 - frame / total, 3);
            setCounts({
              projects: Math.round(ease * 500),
              uptime: Math.round(ease * 999) / 10,
              platforms: Math.round(ease * 6),
              satisfaction: Math.round(ease * 99),
            });
            if (frame >= total) clearInterval(interval);
          }, 30);
        } else {
          setVisible(false);
          setCounts({ projects: 0, uptime: 0, platforms: 0, satisfaction: 0 });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: `${counts.projects}+`, label: "Projects Delivered" },
    { value: `${counts.uptime.toFixed(1)}%`, label: "Uptime SLA" },
    { value: `${counts.platforms}+`, label: "Platforms Mastered" },
    { value: `${counts.satisfaction}%`, label: "Client Satisfaction" },
  ];

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center group transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <p className={`text-4xl md:text-5xl font-light text-foreground mb-2 group-hover:text-primary transition-colors duration-500 ${visible ? "counter-glow" : ""}`}>
                  {stat.value}
                </p>
                <div className={`w-8 h-px bg-primary mx-auto mb-3 transition-all duration-1000 ${visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} style={{ transitionDelay: `${i * 150 + 400}ms` }} />
                <p className="text-minimal text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
