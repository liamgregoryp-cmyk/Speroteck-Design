import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import claudeLogo from "@/assets/claude-logo.png";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Zap,
  Smartphone,
  Code2,
  Target,
  FileText,
  Search,
} from "lucide-react";

/* ─── Important Tools data ─── */
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
    name: "Claude",
    description: "Anthropic's AI assistant for thoughtful analysis, writing, and coding tasks.",
    url: "https://claude.ai/",
    icon: claudeLogo,
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

const toolCategories = ["ALL", ...Array.from(new Set(tools.map((t) => t.category)))];

/* ─── eCommerce SEO data ─── */
const seoTips = [
  {
    icon: Globe,
    title: "Optimize Site Structure",
    description:
      "A clean, crawlable site structure helps search engines index your content efficiently. Well-organized navigation and internal linking boost discoverability and rankings.",
  },
  {
    icon: Zap,
    title: "Fast Loading Speed",
    description:
      "Page speed directly impacts user retention and search rankings. Compress images, leverage caching, and minimize code to keep your site lightning fast.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendliness",
    description:
      "With mobile traffic dominating the web, responsive design is non-negotiable. Google prioritizes mobile-first indexing, making this essential for rankings.",
  },
  {
    icon: Code2,
    title: "Schema Markup",
    description:
      "Structured data gives search engines rich context about your content. This can unlock rich snippets in results, significantly boosting click-through rates.",
  },
  {
    icon: Target,
    title: "Strategic Keyword Implementation",
    description:
      "Precise keyword placement across your site increases visibility in organic searches. Focus on intent-driven keywords that attract qualified, high-converting traffic.",
  },
  {
    icon: FileText,
    title: "Optimized Content Creation",
    description:
      "Engaging, keyword-rich content attracts users and satisfies search algorithms. We combine SEO expertise with AI tools to produce content that performs.",
  },
];

/* ─── Reusable stagger hook ─── */
function useStaggerReveal(count: number, deps: unknown[]) {
  const [visible, setVisible] = useState<number[]>([]);
  useEffect(() => {
    setVisible([]);
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < count; i++) {
      timers.push(
        setTimeout(() => setVisible((prev) => [...prev, i]), 120 * i + 150)
      );
    }
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return visible;
}

/* ─── Main component ─── */
const Tools = () => {
  const [activeSection, setActiveSection] = useState<"tools" | "seo">("tools");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [headerVisible, setHeaderVisible] = useState(false);
  const [sectionSwitching, setSectionSwitching] = useState(false);

  const filteredTools =
    activeCategory === "ALL" ? tools : tools.filter((t) => t.category === activeCategory);

  const toolsVisible = useStaggerReveal(filteredTools.length, [activeCategory, activeSection]);
  const seoVisible = useStaggerReveal(seoTips.length, [activeSection]);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionSwitch = (section: "tools" | "seo") => {
    if (section === activeSection) return;
    setSectionSwitching(true);
    setTimeout(() => {
      setActiveSection(section);
      setSectionSwitching(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block text-primary text-minimal tracking-widest uppercase mb-4">
              Resources
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              {activeSection === "tools" ? "Important Tools" : "eCommerce SEO"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {activeSection === "tools"
                ? "Empower your website using these essential tools — ensure optimal speed, establish a standout brand, engage users, and harness powerful insights."
                : "Boost your organic traffic with proven on-page optimization strategies. Our comprehensive SEO approach blends technical precision with data-driven decision-making."}
            </p>
          </div>
        </div>
      </section>

      {/* Section Tabs */}
      <section className="container mx-auto px-6 pb-10">
        <div
          className={`flex justify-center gap-2 transition-all duration-700 delay-200 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => handleSectionSwitch("tools")}
            className={`relative px-8 py-3 rounded-full text-sm tracking-widest uppercase font-semibold transition-all duration-500 cursor-pointer overflow-hidden ${
              activeSection === "tools"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-[1.02]"
            }`}
          >
            {activeSection === "tools" && (
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full animate-pulse opacity-20" />
            )}
            <span className="relative z-10">Important Tools</span>
          </button>
          <button
            onClick={() => handleSectionSwitch("seo")}
            className={`relative px-8 py-3 rounded-full text-sm tracking-widest uppercase font-semibold transition-all duration-500 cursor-pointer overflow-hidden ${
              activeSection === "seo"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-[1.02]"
            }`}
          >
            {activeSection === "seo" && (
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full animate-pulse opacity-20" />
            )}
            <span className="relative z-10">eCommerce SEO</span>
          </button>
        </div>
      </section>

      {/* Content area with crossfade */}
      <div
        className={`transition-all duration-300 ${
          sectionSwitching ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {/* ═══ IMPORTANT TOOLS SECTION ═══ */}
        {activeSection === "tools" && (
          <>
            {/* Category Filter */}
            <section className="container mx-auto px-6 pb-8">
              <div className="flex flex-wrap justify-center gap-3">
                {toolCategories.map((cat) => (
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
            <section className="container mx-auto px-6 pb-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTools.map((tool, index) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative rounded-2xl border border-border bg-card p-6 cursor-pointer transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 ${
                      toolsVisible.includes(index)
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-8 scale-95"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 inline-block text-[10px] tracking-widest uppercase text-primary/70 font-medium mb-4">
                      {tool.category}
                    </span>
                    <div className="relative z-10 w-16 h-16 mb-5 rounded-xl bg-background/80 border border-border/50 flex items-center justify-center p-3 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-500">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="relative z-10 text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <p className="relative z-10 text-sm text-muted-foreground leading-relaxed mb-4">
                      {tool.description}
                    </p>
                    <div className="relative z-10 flex items-center gap-2 text-xs text-primary/60 group-hover:text-primary transition-all duration-300">
                      <span className="tracking-wide uppercase">Visit Tool</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ═══ eCOMMERCE SEO SECTION ═══ */}
        {activeSection === "seo" && (
          <>
            {/* Intro */}
            <section className="container mx-auto px-6 pb-12">
              <div
                className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
                  seoVisible.length > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  SEO is the number one activity of successful online businesses. Partnering with Speroteck gives you a comprehensive approach that blends technical precision, content strategy, and data-driven insights for sustained search success.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary font-medium">
                  <Search className="w-4 h-4" />
                  <span className="tracking-wider uppercase">On-Page Optimization Focus</span>
                </div>
              </div>
            </section>

            {/* SEO Tips Grid */}
            <section className="container mx-auto px-6 pb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seoTips.map((tip, index) => {
                  const Icon = tip.icon;
                  const isVisible = seoVisible.includes(index);
                  // Alternate entrance directions for variety
                  const entranceClass = index % 3 === 0
                    ? "translate-x-[-30px]"
                    : index % 3 === 1
                    ? "translate-y-8"
                    : "translate-x-[30px]";

                  return (
                    <div
                      key={tip.title}
                      className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-700 ease-out hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 ${
                        isVisible
                          ? "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0"
                          : `opacity-0 ${entranceClass} scale-90`
                      }`}
                      style={{ transitionDelay: `${index * 120}ms` }}
                    >
                      {/* Top accent bar */}
                      <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                      <div className="p-8">
                        {/* Number + Icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            {/* Floating number */}
                            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                              {index + 1}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {tip.title}
                          </h3>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tip.description}
                        </p>

                        {/* Decorative corner glow */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}
      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative rounded-3xl border border-border bg-card/50 p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
          <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-foreground mb-4">
            {activeSection === "tools"
              ? "Need help choosing the right tools?"
              : "Ready to boost your search rankings?"}
          </h2>
          <p className="relative z-10 text-muted-foreground mb-8 max-w-lg mx-auto">
            {activeSection === "tools"
              ? "Our team can help you select and integrate the best tools for your business."
              : "Let our SEO experts craft a strategy tailored to your eCommerce goals."}
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
      </main>
    </div>
  );
};

export default Tools;
