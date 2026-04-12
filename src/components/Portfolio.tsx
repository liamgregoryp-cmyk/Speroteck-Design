import { useEffect, useRef, useState } from "react";
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
                  {/* Green overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Project number */}
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
