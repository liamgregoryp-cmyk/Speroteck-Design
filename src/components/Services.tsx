const Services = () => {
  const services = [
    {
      number: "01",
      title: "STORE IMPLEMENTATION",
      description: "We implement online stores from scratch — certified in all major eCommerce platforms, we'll help you pick the optimal one and walk you through the entire journey."
    },
    {
      number: "02", 
      title: "STORE IMPROVEMENT",
      description: "Is your website outdated and needs a fresh boost? Our designers and UX experts are ready for the mission to modernize and optimize your online presence."
    },
    {
      number: "03",
      title: "PLATFORM MIGRATION",
      description: "Business expanded or changed its model? We'll make your platform transition smooth and seamless with paramount attention to details."
    },
    {
      number: "04",
      title: "24/7 MANAGED SUPPORT",
      description: "We always work. Literally. Our 24×7 staff shifts ensure your requests are addressed ASAP with constant monitoring and rapid response."
    }
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-primary mb-4">SERVICES</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              What We Do
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-primary font-medium">
                    {service.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
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

export default Services;
