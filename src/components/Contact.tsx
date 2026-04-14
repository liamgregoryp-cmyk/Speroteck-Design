import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import platformSalesforce from "@/assets/platform-salesforce.png";
import platformShopify from "@/assets/platform-shopify.png";
import platformBigcommerce from "@/assets/platform-bigcommerce.png";
import platformMagento from "@/assets/platform-magento.png";
import platformShopware from "@/assets/platform-shopware.png";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [platformsVisible, setPlatformsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const platformsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) setVisible(true);
            if (entry.target === platformsRef.current) setPlatformsVisible(true);
          } else {
            if (entry.target === sectionRef.current) setVisible(false);
            if (entry.target === platformsRef.current) setPlatformsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (platformsRef.current) observer.observe(platformsRef.current);
    return () => observer.disconnect();
  }, []);

  const platforms = [
    { name: "Salesforce Commerce Cloud", url: "https://www.salesforce.com/commerce/" },
    { name: "Shopify / Shopify Plus", url: "https://www.shopify.com/" },
    { name: "BigCommerce", url: "https://www.bigcommerce.com/" },
    { name: "Magento / Adobe Commerce", url: "https://business.adobe.com/products/magento/magento-commerce.html" },
    { name: "Shopware", url: "https://www.shopware.com/" },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-all duration-[2s] ${visible ? "w-full" : "w-0"}`} />
      <div
        className={`absolute top-20 right-20 w-32 h-32 border border-primary/5 rounded-full transition-all duration-[1.5s] ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <div
        className={`absolute bottom-40 left-10 w-20 h-20 border border-primary/[0.03] rounded-full transition-all duration-[1.5s] delay-500 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2
                className={`text-minimal text-primary mb-4 flex items-center gap-3 transition-all duration-700 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <span className={`h-px bg-primary transition-all duration-1000 delay-200 ${visible ? "w-8" : "w-0"}`} />
                GET IN TOUCH
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12 overflow-hidden">
                {"Let's Create the Next".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-all duration-500"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(100%)",
                      transitionDelay: `${i * 25 + 200}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
                <br />
                {"Big Thing Together".split("").map((char, i) => (
                  <span
                    key={`b-${i}`}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)] transition-all duration-500"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(100%)",
                      transitionDelay: `${(i + 20) * 25 + 200}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h3>

              <div className="space-y-8">
                {[
                  { label: "EMAIL", value: "info@speroteck.com", href: "mailto:info@speroteck.com" },
                  { label: "PHONE", value: "1 (847) 508-9229", href: "tel:18475089229" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group transition-all duration-700 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${i * 150 + 800}ms` }}
                  >
                    <h4 className="text-minimal text-primary mb-2">{item.label}</h4>
                    <a
                      href={item.href}
                      className="text-xl hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      {item.value}
                      <span className="w-0 group-hover:w-6 h-px bg-primary transition-all duration-300" />
                    </a>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div
                className={`mt-12 transition-all duration-700 delay-[1200ms] ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(82,75%,42%,0.4)] hover:scale-105 relative"
                >
                  <span className="relative z-10">Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(82,75%,50%)] to-[hsl(82,75%,35%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                </Link>
              </div>
            </div>

            <div ref={platformsRef}>
              <h4
                className={`text-minimal text-primary mb-6 flex items-center gap-3 transition-all duration-700 ${
                  platformsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <span className={`h-px bg-primary transition-all duration-1000 delay-300 ${platformsVisible ? "w-8" : "w-0"}`} />
                PLATFORMS
              </h4>
              <div className="space-y-3">
                {platforms.map((platform, i) => (
                  <a
                    key={i}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-primary/[0.03] transition-all duration-500 border border-transparent hover:border-primary/10 cursor-pointer ${
                      platformsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 200}ms` }}
                  >
                    <span className="w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(82,75%,42%,0.5)] transition-all duration-300" />
                    <span className="text-lg cursor-pointer">{platform.name}</span>
                  </a>
                ))}
              </div>

              <div
                className={`pt-8 mt-8 border-t border-border transition-all duration-700 ${
                  platformsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
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
