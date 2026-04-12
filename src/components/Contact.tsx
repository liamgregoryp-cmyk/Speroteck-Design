import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/5 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-minimal text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                GET IN TOUCH
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Let's Create the Next
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)]">
                  Big Thing Together
                </span>
              </h3>

              <div className="space-y-8">
                {[
                  { label: "EMAIL", value: "info@speroteck.com", href: "mailto:info@speroteck.com" },
                  { label: "PHONE", value: "1 (847) 508-9229", href: "tel:18475089229" },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-minimal text-primary mb-2">{item.label}</h4>
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-xl hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      {item.value}
                      <span className="w-0 group-hover:w-6 h-px bg-primary transition-all duration-300" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className={`space-y-8 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                <h4 className="text-minimal text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  PLATFORMS
                </h4>
                <div className="space-y-3">
                  {[
                    "Magento / Adobe Commerce",
                    "Shopify / Shopify Plus",
                    "BigCommerce",
                    "Salesforce Commerce Cloud",
                  ].map((platform, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-primary/[0.03] transition-all duration-300 border border-transparent hover:border-primary/10"
                    >
                      <span className="w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(82,75%,42%,0.5)] transition-all duration-300" />
                      <span className="text-lg">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to providing great customer service to all of our clients.
                  Whether you're looking for a quote or wondering how to get started,
                  we are just a click away. Your success story starts with{" "}
                  <span className="text-primary font-medium">Speroteck</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
