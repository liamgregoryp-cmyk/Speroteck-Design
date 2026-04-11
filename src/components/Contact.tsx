const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-primary mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Let's Create the Next
                <br />
                Big Thing Together
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-primary mb-2">EMAIL</h4>
                  <a href="mailto:info@speroteck.com" className="text-xl hover:text-primary transition-colors duration-300">
                    info@speroteck.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-primary mb-2">PHONE</h4>
                  <a href="tel:18475089229" className="text-xl hover:text-primary transition-colors duration-300">
                    1 (847) 508-9229
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-primary mb-2">WEBSITE</h4>
                  <a href="https://www.speroteck.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors duration-300">
                    www.speroteck.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-primary mb-6">PLATFORMS</h4>
                <div className="space-y-4">
                  <span className="block text-xl">
                    Magento / Adobe Commerce
                  </span>
                  <span className="block text-xl">
                    Shopify / Shopify Plus
                  </span>
                  <span className="block text-xl">
                    BigCommerce
                  </span>
                  <span className="block text-xl">
                    Salesforce Commerce Cloud
                  </span>
                </div>
              </div>
              
              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground">
                  We are committed to providing great customer service to all of our clients. 
                  Whether you're looking for a quote or wondering how to get started, 
                  we are just a click away. Your success story starts with Speroteck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
