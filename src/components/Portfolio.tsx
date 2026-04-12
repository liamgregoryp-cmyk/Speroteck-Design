import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Portfolio = () => {
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
      { threshold: 0.15 }
    );
    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      image: project4,
      title: "DIOR",
      location: "eCOMMERCE IMPLEMENTATION",
      description: "Enterprise-level Salesforce Commerce Cloud implementation for the iconic luxury fashion house, delivering a premium digital shopping experience.",
      url: "https://www.dior.com"
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
          <div className="mb-20">
            <h2 className="text-minimal text-primary mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              CLIENT STORIES
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)]">Work</span>
            </h3>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                data-index={index}
                className={`group transition-all duration-1000 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 right-6 w-12 h-12 border border-primary/30 rounded-full flex items-center justify-center text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-background/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-2xl font-light text-architectural mb-2 group-hover:text-primary transition-colors duration-500 hover:underline inline-block">
                      {project.title}
                    </a>
                    <p className="text-minimal text-primary flex items-center gap-2">
                      <span className="w-4 h-px bg-primary" />
                      {project.location}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonials */}
          <div className="mt-32">
            <h2 className="text-minimal text-primary mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              WHAT OUR CLIENTS SAY
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-architectural mb-16">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)]">Reviews</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  data-index={projects.length + index}
                  className={`group p-8 border border-border rounded-lg bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 ${
                    visibleItems.includes(projects.length + index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="text-primary text-4xl mb-4 opacity-30">"</div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
