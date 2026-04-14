import { useEffect, useRef, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, clients: 0 });
  const [statsVisible, setStatsVisible] = useState(false);
  const [clientsPop, setClientsPop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setVisible(true);
            }
            if (entry.target === statsRef.current) {
              setStatsVisible(true);
              setClientsPop(false);
              let frame = 0;
              const totalFrames = 60;
              const interval = setInterval(() => {
                frame++;
                const ease = 1 - Math.pow(1 - frame / totalFrames, 3);
                setCounters({
                  years: Math.round(ease * 25),
                  clients: Math.round(ease * 500),
                });
                if (frame >= totalFrames) {
                  clearInterval(interval);
                  setClientsPop(true);
                  setTimeout(() => setClientsPop(false), 400);
                }
              }, 30);
            }
          } else {
            if (entry.target === sectionRef.current) {
              setVisible(false);
            }
            if (entry.target === statsRef.current) {
              setStatsVisible(false);
              setCounters({ years: 0, clients: 0 });
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const expertise = [
    { title: "Platform Specialists", desc: "Certified experts in Salesforce Commerce Cloud, Shopify, BigCommerce, Magento & Shopware" },
    { title: "Full Lifecycle", desc: "From architecture and development to design, optimization, and ongoing support" },
    { title: "Client Partnership", desc: "Long-term relationships built on trust, transparency, and measurable results" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-muted/20 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-20 w-40 h-40 border border-primary/[0.06] rounded-full transition-all duration-[2s] ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-32 right-32 w-60 h-60 border border-primary/[0.04] rounded-full transition-all duration-[2s] delay-500 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.015] rounded-full blur-[100px] transition-all duration-[2.5s] ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2
                className={`text-minimal text-primary mb-4 flex items-center gap-3 transition-all duration-700 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <span className={`h-px bg-primary transition-all duration-1000 delay-200 ${visible ? "w-8" : "w-0"}`} />
                ABOUT
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12 overflow-hidden">
                {"eCommerce ".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-all duration-500"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(100%)",
                      transitionDelay: `${i * 30 + 300}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
                <br />
                {"Excellence".split("").map((char, i) => (
                  <span
                    key={`ex-${i}`}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)] transition-all duration-500"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(100%)",
                      transitionDelay: `${(i + 10) * 30 + 300}ms`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </h3>

              <div className="space-y-6">
                <p
                  className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  We thrive to provide the latest and greatest in the most seamless way possible.
                  You run your business, expand your clientele, take care of the supply chain —
                  let us worry about running your online store.
                </p>
                <p
                  className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  We don't have a sales department — our clients are our best promoters and advocates.
                </p>
              </div>

              {/* Animated stats */}
              <div ref={statsRef} className="mt-12 grid grid-cols-2 gap-8">
                <div
                  className={`relative p-6 border border-primary/10 rounded-lg bg-primary/[0.02] overflow-hidden transition-all duration-700 ${
                    statsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <h4 className="text-minimal text-primary mb-2">EXPERIENCE</h4>
                  <p className={`text-4xl font-light text-foreground ${statsVisible ? "counter-glow" : ""}`}>
                    {counters.years}+ <span className="text-lg text-muted-foreground">Years</span>
                  </p>
                </div>
                <div
                  className={`relative p-6 border border-primary/10 rounded-lg bg-primary/[0.02] overflow-hidden transition-all duration-700 delay-200 ${
                    statsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <h4 className="text-minimal text-primary mb-2">CLIENTS</h4>
                  <p className={`text-4xl font-light text-foreground transition-transform duration-300 ease-out ${statsVisible ? "counter-glow" : ""} ${clientsPop ? "scale-125" : "scale-100"}`}>
                    {counters.clients}+
                  </p>
                </div>
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h4 className="text-minimal text-primary mb-6 flex items-center gap-3">
                <span className={`h-px bg-primary transition-all duration-1000 delay-500 ${visible ? "w-8" : "w-0"}`} />
                EXPERTISE
              </h4>
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className={`group border-l-2 border-primary/30 hover:border-primary pl-6 py-4 transition-all duration-500 hover:bg-primary/[0.02] rounded-r-lg ${
                    visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 700}ms` }}
                >
                  <h5 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h5>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
