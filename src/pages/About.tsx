import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="text-minimal text-primary mb-4">ABOUT</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  eCommerce Excellence
                </h2>
                
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We breathe eCommerce for over 20 years now! It is not just our specialty — 
                    it is our passion. We thrive to provide the latest and greatest in the most 
                    seamless way possible.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    You run your business, expand your clientele, take care of the supply chain — 
                    let us worry about running your online store! We don't have a sales department — 
                    our clients are our best promoters and advocates.
                  </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-minimal text-primary mb-6">EXPERTISE</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-6">
                      <h4 className="text-lg font-medium mb-2">Platform Specialists</h4>
                      <p className="text-muted-foreground">Certified in Magento, Shopify, BigCommerce & Salesforce Commerce Cloud</p>
                    </div>
                    <div className="border-l-2 border-primary pl-6">
                      <h4 className="text-lg font-medium mb-2">Full Lifecycle</h4>
                      <p className="text-muted-foreground">Architecture, development, design, optimization, and ongoing 24/7 support</p>
                    </div>
                    <div className="border-l-2 border-primary pl-6">
                      <h4 className="text-lg font-medium mb-2">Client Partnership</h4>
                      <p className="text-muted-foreground">Long-term relationships built on trust, transparency, and measurable results</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-minimal text-primary mb-2">EXPERIENCE</h3>
                      <p className="text-xl">20+ Years</p>
                    </div>
                    <div>
                      <h3 className="text-minimal text-primary mb-2">CLIENTS</h3>
                      <p className="text-xl">100+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
