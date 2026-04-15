import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ArrowRight, ExternalLink } from "lucide-react";

const tools = [
  {
    name: "Selecting Platform for a Website",
    description: "Compare and choose the right eCommerce platform for your business needs.",
    url: "https://www.speroteck.com/platforms/",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/10/sf-m.png",
    category: "Platform",
  },
  {
    name: "Business Name Generator",
    description: "Generate creative and memorable business name ideas instantly.",
    url: "https://businessnamegenerator.com/",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/10/image-20.png",
    category: "Branding",
  },
  {
    name: "Logo Maker",
    description: "Design a professional logo for your brand in minutes.",
    url: "https://www.shopify.com/tools/logo-maker",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/10/Group-998.png",
    category: "Branding",
  },
  {
    name: "QR Code Generator",
    description: "Create custom QR codes to engage users and drive traffic.",
    url: "https://www.qr-code-generator.com/",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/08/logo-icon-blue-1.png",
    category: "Marketing",
  },
  {
    name: "PageSpeed Insights",
    description: "Measure and optimize the performance of your web pages.",
    url: "https://pagespeed.web.dev/",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/08/google-pagespeed-insights-seeklogo.com-1.png",
    category: "Performance",
  },
  {
    name: "Moz Link Explorer",
    description: "Analyze backlinks and improve your search ranking authority.",
    url: "https://moz.com/link-explorer",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/08/Moz_logo.png",
    category: "SEO",
  },
  {
    name: "Ahrefs",
    description: "Discover which sites are linking to you and track your SEO progress.",
    url: "https://ahrefs.com/",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/08/ahrefs-logos-id4XvvhUCP-1.png",
    category: "SEO",
  },
  {
    name: "Google Analytics",
    description: "Track website traffic, user behavior, and conversion insights.",
    url: "https://marketingplatform.google.com/about/analytics/",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/08/Logo_Google_Analytics.png",
    category: "Analytics",
  },
  {
    name: "Mobile-Friendly Test",
    description: "Ensure your website delivers a great experience on mobile devices.",
    url: "https://search.google.com/test/mobile-friendly",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/08/Mobile-Test-logo-1.png",
    category: "Performance",
  },
  {
    name: "Google Trends",
    description: "Explore trending topics and search interest over time.",
    url: "https://trends.google.com/trends/",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/08/Google-Trends-e1691742462384-1-1024x327.png",
    category: "Analytics",
  },
  {
    name: "ChatGPT",
    description: "Leverage AI to generate content, brainstorm ideas, and automate tasks.",
    url: "https://chat.openai.com/",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/08/ChatGPT_logo-1.png",
    category: "AI",
  },
  {
    name: "Google Webmaster Tools",
    description: "Monitor and troubleshoot your site's presence in Google Search.",
    url: "https://developers.google.com/search",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/08/google-webmaster-tools-1024x910.png",
    category: "SEO",
  },
  {
    name: "Google Search Console",
    description: "Optimize your site's visibility and fix indexing issues.",
    url: "https://search.google.com/search-console/about",
    icon: "https://www.speroteck.com/wp-content/uploads/2023/08/google-webmaster-tools-1024x910.png",
    category: "SEO",
  },
];

const categories = ["ALL", ...Array.from(new Set(tools.map((t) => t.category)))];

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const filteredTools = activeCategory === "ALL" ? tools : tools.filter((t) => t.category === activeCategory);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisibleItems([]);
    filteredTools.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, 100 * i + 100);
    });
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div
            ref={headerRef}
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block text-primary text-minimal tracking-widest uppercase mb-4">
              Resources
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Important Tools
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Empower your website using these essential tools — ensure optimal speed, establish a standout brand, engage users, and harness powerful insights.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-6 pb-8">
        <div
          className={`flex flex-wrap justify-center gap-3 transition-all duration-700 delay-300 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <section ref={sectionRef} className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl border border-border bg-card p-6 cursor-pointer transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category badge */}
              <span className="relative z-10 inline-block text-[10px] tracking-widest uppercase text-primary/70 font-medium mb-4">
                {tool.category}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 mb-5 rounded-xl bg-background/80 border border-border/50 flex items-center justify-center p-3 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-500">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {tool.name}
              </h3>
              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed mb-4">
                {tool.description}
              </p>

              {/* Link indicator */}
              <div className="relative z-10 flex items-center gap-2 text-xs text-primary/60 group-hover:text-primary transition-all duration-300">
                <span className="tracking-wide uppercase">Visit Tool</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative rounded-3xl border border-border bg-card/50 p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
          <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need help choosing the right tools?
          </h2>
          <p className="relative z-10 text-muted-foreground mb-8 max-w-lg mx-auto">
            Our team can help you select and integrate the best tools for your business.
          </p>
          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tools;
