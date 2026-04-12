import { useEffect, useRef, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, clients: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Animate counters
          let frame = 0;
          const totalFrames = 60;
          const interval = setInterval(() => {
            frame++;
            setCounters({
              years: Math.round((frame / totalFrames) * 20),
              clients: Math.round((frame / totalFrames) * 500),
            });
            if (frame >= totalFrames) clearInterval(interval);
          }, 30);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const expertise = [
    { title: "Platform Specialists", desc: "Certified experts in Salesforce Commerce Cloud, Shopify, BigCommerce, Magento & Shopware" },
    { title: "Full Lifecycle", desc: "From architecture and development to design, optimization, and ongoing support" },
    { title: "Client Partnership", desc: "Long-term relationships built on trust, transparency, and measurable results" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary rounded-full" />
        <div className="absolute bottom-32 right-32 w-60 h-60 border border-primary rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-minimal text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                ABOUT
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                eCommerce{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)]">
                  Excellence
                </span>
              </h3>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We thrive to provide the latest and greatest in the most seamless way possible.
                  You run your business, expand your clientele, take care of the supply chain —
                  let us worry about running your online store.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't have a sales department — our clients are our best promoters and advocates.
                </p>
              </div>

              {/* Animated stats */}
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="relative p-6 border border-primary/10 rounded-lg bg-primary/[0.02]">
                  <h4 className="text-minimal text-primary mb-2">EXPERIENCE</h4>
                  <p className="text-4xl font-light text-foreground">
                    {counters.years}+ <span className="text-lg text-muted-foreground">Years</span>
                  </p>
                </div>
                <div className="relative p-6 border border-primary/10 rounded-lg bg-primary/[0.02]">
                  <h4 className="text-minimal text-primary mb-2">CLIENTS</h4>
                  <p className="text-4xl font-light text-foreground">
                    {counters.clients}+
                  </p>
                </div>
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h4 className="text-minimal text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                EXPERTISE
              </h4>
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className={`group border-l-2 border-primary/30 hover:border-primary pl-6 py-4 transition-all duration-500 hover:bg-primary/[0.02] rounded-r-lg`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
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
