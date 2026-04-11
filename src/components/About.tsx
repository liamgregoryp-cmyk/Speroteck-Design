const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-primary mb-4">ABOUT</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                eCommerce Excellence
              </h3>
              
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We thrive to provide the latest and greatest in the most seamless way possible. 
                  You run your business, expand your clientele, take care of the supply chain — 
                  let us worry about running your online store.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't have a sales department — our clients are our best promoters and advocates. 
                  With over 20 years of experience, we've built a reputation for delivering results 
                  that speak for themselves.
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-minimal text-primary mb-6">EXPERTISE</h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6">
                    <h5 className="text-lg font-medium mb-2">Platform Specialists</h5>
                    <p className="text-muted-foreground">Certified experts in Magento, Shopify, BigCommerce & Salesforce Commerce Cloud</p>
                  </div>
                  <div className="border-l-2 border-primary pl-6">
                    <h5 className="text-lg font-medium mb-2">Full Lifecycle</h5>
                    <p className="text-muted-foreground">From architecture and development to design, optimization, and ongoing support</p>
                  </div>
                  <div className="border-l-2 border-primary pl-6">
                    <h5 className="text-lg font-medium mb-2">Client Partnership</h5>
                    <p className="text-muted-foreground">Long-term relationships built on trust, transparency, and measurable results</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-minimal text-primary mb-2">EXPERIENCE</h4>
                    <p className="text-xl">20+ Years</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-primary mb-2">CLIENTS</h4>
                    <p className="text-xl">100+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
