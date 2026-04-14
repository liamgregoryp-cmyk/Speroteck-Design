import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import projectDiorCologne from "@/assets/project-dior-cologne.jpg";

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialAnimating, setTestimonialAnimating] = useState(false);
  const [testimonialDirection, setTestimonialDirection] = useState<'left' | 'right'>('right');
  const [activeProject, setActiveProject] = useState(0);
  const [isProjectTransitioning, setIsProjectTransitioning] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [reviewsHeaderVisible, setReviewsHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const reviewsHeaderRef = useRef<HTMLDivElement>(null);

  const navigateTestimonial = (direction: 'left' | 'right', target?: number) => {
    if (testimonialAnimating) return;
    setTestimonialDirection(direction);
    setTestimonialAnimating(true);
    setTimeout(() => {
      if (target !== undefined) {
        setActiveTestimonial(target);
      } else if (direction === 'right') {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      } else {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
      setTimeout(() => setTestimonialAnimating(false), 50);
    }, 400);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setHeaderVisible(true);
            else if (entry.target === reviewsHeaderRef.current) setReviewsHeaderVisible(true);
            else {
              const index = Number(entry.target.getAttribute("data-index"));
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));
    if (headerRef.current) observer.observe(headerRef.current);
    if (reviewsHeaderRef.current) observer.observe(reviewsHeaderRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      image: projectDiorCologne,
      title: "DIOR",
      location: "eCOMMERCE IMPLEMENTATION",
      description: "Enterprise-level Salesforce Commerce Cloud implementation for the iconic luxury fashion house, delivering a premium digital shopping experience.",
      url: "https://www.dior.com/en_us/beauty/fragrance"
    },
    {
      image: project1,
      title: "CANDYFAVORITES.COM",
      location: "eCOMMERCE PLATFORM",
      description: "Full-scale Magento implementation for the Internet's first candy store, backed by the oldest wholesale candy company in the nation.",
      url: "https://www.candyfavorites.com"
    },
    {
      image: project2,
      title: "CRUISEDIRECT.COM",
      location: "PLATFORM MIGRATION",
      description: "Comprehensive server administration and platform optimization for one of the leading online cruise booking platforms.",
      url: "https://www.cruisedirect.com"
    },
    {
      image: project3,
      title: "SPOTIX.COM",
      location: "MANAGED SERVICES",
      description: "Reliable web server maintenance and development support, freeing the in-house team to focus on strategic growth initiatives.",
      url: "https://www.spotix.com"
    }
  ];

  const testimonials = [
    {
      quote: "CandyFavorites.com, the Internet's First Candy Store, backed by McKeesport Candy Co., the Oldest Wholesale Candy Company in the nation, has utilized Speroteck for several years. Their dedication and expertise have been instrumental in our online success.",
      name: "Jon H. Prince",
      title: "President",
      company: "CandyFavorites.com",
      rating: 5
    },
    {
      quote: "I am writing to express my sincere gratitude for the excellent service Speroteck has provided to our company. Your team of server administrators has been exceptional in maintaining our infrastructure and ensuring seamless operations.",
      name: "John Maguire",
      title: "President | CEO",
      company: "CruiseDirect.com",
      rating: 5
    },
    {
      quote: "We had an open source Magento store and it needed major overhauls, as well as updates for security and more. We had a bad experience with another company before finding Speroteck, and they turned everything around for us.",
      name: "Joy Woodruff",
      title: "eCommerce Director",
      company: "SoundOfTristate.com",
      rating: 5
    },
    {
      quote: "Before partnering with Speroteck, we faced a two-fold challenge. First, we needed a reliable team to maintain our webserver. Second, our in-house developer was swamped and needed backup. Enter Speroteck – a company with a culture that genuinely cares about our success.",
      name: "Tom Altman",
      title: "Director of Technology",
      company: "Spotix.com",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} id="work" className="py-32 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={headerRef} className="mb-20">
            <h2
              className={`text-minimal text-primary mb-4 flex items-center gap-3 transition-all duration-700 ${
                headerVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className={`h-px bg-primary transition-all duration-1000 delay-200 ${headerVisible ? "w-8" : "w-0"}`} />
              CLIENT STORIES
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural overflow-hidden">
              {"Our ".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-500"
                  style={{
                    opacity: headerVisible ? 1 : 0,
                    transform: headerVisible ? "translateY(0)" : "translateY(100%)",
                    transitionDelay: `${i * 40 + 200}ms`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              {"Work".split("").map((char, i) => (
                <span
                  key={`w-${i}`}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)] transition-all duration-500"
                  style={{
                    opacity: headerVisible ? 1 : 0,
                    transform: headerVisible ? "translateY(0)" : "translateY(100%)",
                    transitionDelay: `${(i + 4) * 40 + 200}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </h3>
          </div>

          <div className="relative">
            <div className="group">
              <div className="relative overflow-hidden rounded-lg h-[60vh]">
                {/* All images stacked, crossfade via opacity */}
                {projects.map((project, index) => (
                  <img
                    key={index}
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === activeProject ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                <div className="absolute top-6 right-6 w-12 h-12 border border-primary/30 rounded-full flex items-center justify-center text-primary text-sm font-bold backdrop-blur-sm bg-background/20 z-20">
                  {String(activeProject + 1).padStart(2, '0')}
                </div>
                {/* Navigation arrows */}
                <button
                  onClick={() => setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary bg-background/30 backdrop-blur-sm transition-all duration-300 z-20"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveProject((prev) => (prev + 1) % projects.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary bg-background/30 backdrop-blur-sm transition-all duration-300 z-20"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-8 transition-opacity duration-500 ease-in-out">
                <div>
                  <a href={projects[activeProject].url} target="_blank" rel="noopener noreferrer" className="text-2xl font-light text-architectural mb-2 group-hover:text-primary transition-colors duration-500 hover:underline inline-block">
                    {projects[activeProject].title}
                  </a>
                  <p className="text-minimal text-primary flex items-center gap-2">
                    <span className="w-4 h-px bg-primary" />
                    {projects[activeProject].location}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {projects[activeProject].description}
                  </p>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center gap-2 mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeProject ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div ref={reviewsHeaderRef} className="mt-32">
            <h2
              className={`text-minimal text-primary mb-4 flex items-center gap-3 transition-all duration-700 ${
                reviewsHeaderVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className={`h-px bg-primary transition-all duration-1000 delay-200 ${reviewsHeaderVisible ? "w-8" : "w-0"}`} />
              WHAT OUR CLIENTS SAY
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-architectural mb-16 overflow-hidden">
              {"Client ".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-500"
                  style={{
                    opacity: reviewsHeaderVisible ? 1 : 0,
                    transform: reviewsHeaderVisible ? "translateY(0)" : "translateY(100%)",
                    transitionDelay: `${i * 40 + 200}ms`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              {"Reviews".split("").map((char, i) => (
                <span
                  key={`r-${i}`}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)] transition-all duration-500"
                  style={{
                    opacity: reviewsHeaderVisible ? 1 : 0,
                    transform: reviewsHeaderVisible ? "translateY(0)" : "translateY(100%)",
                    transitionDelay: `${(i + 7) * 40 + 200}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </h3>
          </div>

            <div className="relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                {[0, 1].map((offset) => {
                  const index = (activeTestimonial + offset) % testimonials.length;
                  const testimonial = testimonials[index];
                  // When navigating right: left card (offset 0) exits first, right card (offset 1) follows
                  // When navigating left: right card exits first, left card follows
                  const isLeading = testimonialDirection === 'right' ? offset === 0 : offset === 1;
                  const delay = isLeading ? '0ms' : '150ms';
                  return (
                    <div 
                      key={`${activeTestimonial}-${offset}`} 
                      className={`p-8 border border-border rounded-lg bg-background/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400 ease-out ${
                        testimonialAnimating
                          ? isLeading
                            ? testimonialDirection === 'right' ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
                            : 'opacity-0 scale-95'
                          : 'opacity-100 translate-x-0 scale-100'
                      }`}
                      style={{ transitionDelay: testimonialAnimating ? delay : '0ms' }}
                    >
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <div className="text-primary text-4xl mb-4 opacity-30">"</div>
                      <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-foreground font-medium text-sm">{testimonial.name}</p>
                          <p className="text-minimal text-muted-foreground">
                            {testimonial.title}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => navigateTestimonial(index > activeTestimonial ? 'right' : 'left', index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === activeTestimonial ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigateTestimonial('left')}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
                    aria-label="Previous reviews"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateTestimonial('right')}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
                    aria-label="Next reviews"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
