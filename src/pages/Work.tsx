import { useState } from "react";
import Navigation from "@/components/Navigation";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const projects = [
    {
      image: project1,
      title: "CANDYFAVORITES.COM",
      location: "eCOMMERCE IMPLEMENTATION",
      category: "IMPLEMENTATION",
      description: "Full-scale Magento implementation for the Internet's first candy store. Backed by McKeesport Candy Co., the oldest wholesale candy company in the nation.",
      platform: "MAGENTO",
      year: "ONGOING"
    },
    {
      image: project2,
      title: "CRUISEDIRECT.COM",
      location: "SERVER & PLATFORM",
      category: "MANAGED SERVICES",
      description: "Comprehensive server administration and platform optimization for one of the leading online cruise booking platforms.",
      platform: "CUSTOM",
      year: "ONGOING"
    },
    {
      image: project3,
      title: "SPOTIX.COM",
      location: "DEVELOPMENT & SUPPORT",
      category: "MANAGED SERVICES",
      description: "Reliable web server maintenance and full development support, freeing the in-house team to focus on strategic growth.",
      platform: "MAGENTO",
      year: "ONGOING"
    },
    {
      image: project1,
      title: "SOUNDOFTRISTATE.COM",
      location: "STORE OVERHAUL",
      category: "MIGRATION",
      description: "Major overhauls including security updates and platform modernization for an open source Magento store.",
      platform: "MAGENTO",
      year: "COMPLETED"
    },
    {
      image: project2,
      title: "OFFICE DESIGNS",
      location: "PLATFORM OPTIMIZATION",
      category: "IMPLEMENTATION",
      description: "Complete eCommerce solution for office furniture retailer, optimizing the shopping experience and boosting conversions.",
      platform: "SHOPIFY",
      year: "COMPLETED"
    },
    {
      image: project3,
      title: "PANDORA US",
      location: "ENTERPRISE SOLUTION",
      category: "IMPLEMENTATION",
      description: "Enterprise-grade eCommerce solution for the global jewelry brand's US operations.",
      platform: "SALESFORCE",
      year: "COMPLETED"
    }
  ];

  const categories = ["ALL", "IMPLEMENTATION", "MIGRATION", "MANAGED SERVICES"];

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                OUR WORK
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A selection of our eCommerce projects, each showcasing our commitment to 
                delivering exceptional online shopping experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {category}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-primary transition-transform duration-300 origin-left ${
                    activeCategory === category 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-minimal text-primary">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">
                        {project.location}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-primary mb-1">PLATFORM</p>
                        <p className="text-foreground">{project.platform}</p>
                      </div>
                      <div>
                        <p className="text-minimal text-primary mb-1">STATUS</p>
                        <p className="text-foreground">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Ready to Start
              <br />
              Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss how we can bring your eCommerce vision to life
            </p>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium tracking-wide uppercase text-sm hover:opacity-90 transition-opacity duration-300"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
