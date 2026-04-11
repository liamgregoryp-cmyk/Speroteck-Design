import Navigation from "@/components/Navigation";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "STORE IMPLEMENTATION",
      description: "We implement online stores from scratch — certified in all major eCommerce platforms, we'll help you pick the optimal one and walk you through the entire journey to make sure you're ready to sell."
    },
    {
      number: "02", 
      title: "STORE IMPROVEMENT",
      description: "Is your website outdated and needs a fresh boost? Our designers and UX experts are ready to modernize your online presence with cutting-edge design and optimized user experiences."
    },
    {
      number: "03",
      title: "PLATFORM MIGRATION",
      description: "Business expanded or changed its model? We'll make your platform transition smooth and seamless. Attention to details is paramount — no data left behind."
    },
    {
      number: "04",
      title: "MOBILE APPS",
      description: "If you believe having a mobile app is something your business needs, we are here to take the requirements and deliver a polished, high-performing shopping experience."
    },
    {
      number: "05",
      title: "24/7 MANAGED SUPPORT",
      description: "We always work. Literally. Our 24×7 staff shifts ensure your requests are addressed ASAP with constant monitoring, rapid response, and proactive maintenance."
    },
    {
      number: "06",
      title: "CUSTOM DEVELOPMENT",
      description: "Need custom integrations, extensions, or bespoke functionality? Our development team builds tailored solutions that perfectly fit your business requirements."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h1 className="text-minimal text-primary mb-4">SERVICES</h1>
              <h2 className="text-4xl md:text-6xl font-light text-architectural">
                What We Do
              </h2>
              <p className="text-xl text-muted-foreground mt-8 max-w-3xl">
                We offer an array of services to fit your eCommerce needs and budget. 
                From large-scale implementations to small ad-hoc break/fix requests.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-6">
                    <span className="text-minimal text-primary font-medium">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl font-light mb-4 text-architectural group-hover:text-primary transition-colors duration-500">
                        {service.title}
                      </h3>
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
    </div>
  );
};

export default Services;
