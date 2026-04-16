import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Heart, Leaf, Users, HandHeart, Flag, PawPrint } from "lucide-react";
import socialCharity from "@/assets/social-charity.jpg";
import socialGreenIt from "@/assets/social-green-it.jpg";
import socialHealthcare from "@/assets/social-healthcare.jpg";
import socialEducation from "@/assets/social-education.jpg";
import socialUkraine from "@/assets/social-ukraine.jpg";
import socialAnimals from "@/assets/social-animals.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState<"about" | "social">("about");

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-16">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-8 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeTab === "about"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => setActiveTab("social")}
                className={`px-8 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeTab === "social"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                Social Responsibility
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Tab */}
      {activeTab === "about" && (
        <section className="pb-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <p className="text-minimal text-primary mb-4">ABOUT</p>
                  <h1 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                    eCommerce Excellence
                  </h1>

                  <div className="space-y-8">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We breathe eCommerce for over 25 years now! It is not just our specialty —
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
                    <h2 className="text-minimal text-primary mb-6">EXPERTISE</h2>
                    <div className="space-y-6">
                      <div className="border-l-2 border-primary pl-6">
                        <h3 className="text-lg font-medium mb-2">Platform Specialists</h3>
                        <p className="text-muted-foreground">Certified in Salesforce Commerce Cloud, Shopify, BigCommerce, Magento & Shopware</p>
                      </div>
                      <div className="border-l-2 border-primary pl-6">
                        <h3 className="text-lg font-medium mb-2">Full Lifecycle</h3>
                        <p className="text-muted-foreground">Architecture, development, design, optimization, and ongoing 24/7 support</p>
                      </div>
                      <div className="border-l-2 border-primary pl-6">
                        <h3 className="text-lg font-medium mb-2">Client Partnership</h3>
                        <p className="text-muted-foreground">Long-term relationships built on trust, transparency, and measurable results</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-minimal text-primary mb-2">EXPERIENCE</p>
                        <p className="text-xl">25+ Years</p>
                      </div>
                      <div>
                        <p className="text-minimal text-primary mb-2">CLIENTS</p>
                        <p className="text-xl">500+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Social Responsibility Tab */}
      {activeTab === "social" && (
        <section className="pb-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Intro */}
              <div className="max-w-3xl mb-20">
                <p className="text-minimal text-primary mb-4">GIVING BACK</p>
                <h1 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Social Responsibility
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Speroteck, we believe technology can be a force for good. Beyond building
                  exceptional eCommerce solutions, we are committed to making a meaningful
                  impact in our communities and protecting our planet for future generations.
                </p>
              </div>

              {/* Pillars */}
              <div className="grid md:grid-cols-2 gap-12 mb-24">
                {/* Charity */}
                <div className="rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={socialCharity} alt="Charity and community event" loading="lazy" width={1280} height={720} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="p-10 space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Heart className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-light">Charity & Community</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Together with the Chernihiv IT Cluster, we organize charity events to support
                      children affected by conflict. From funding medical equipment to providing
                      laptops for young patients' education, we help children like Sashko from
                      Mariupol continue learning and dreaming during their recovery.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">
                        "An ordinary laptop means new opportunities, online communication, and a
                        significant reduction in stress — it helps children move on, learn, and
                        try new things."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Green IT */}
                <div className="rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={socialGreenIt} alt="Green IT sustainability" loading="lazy" width={1280} height={720} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="p-10 space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Leaf className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-light">Green IT</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Digital technologies account for roughly 4% of global CO₂ emissions. We
                      champion Green IT practices — optimizing code efficiency, choosing
                      energy-conscious hosting, and building sustainable digital solutions that
                      minimize our environmental footprint while maximizing performance.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">
                        We are committed to reducing the environmental impact of every project
                        we deliver.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Supporting Children */}
                <div className="rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={socialHealthcare} alt="Healthcare support for children" loading="lazy" width={1280} height={720} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="p-10 space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <HandHeart className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-light">Healthcare Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We partner with St. Mykola's Lviv Children's Hospital to support young
                      patients in the hematological oncology department. Our fundraising efforts
                      provide essential tools for children's education and recovery, helping them
                      maintain hope and connection during treatment.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">
                        Supporting the next generation through their toughest battles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Community */}
                <div className="rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={socialEducation} alt="IT education and mentorship" loading="lazy" width={1280} height={720} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="p-10 space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-light">IT Community & Education</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Through partnerships with regional IT clusters, we invest in education and
                      mentorship programs. Our PWA Kit courses and knowledge-sharing initiatives
                      help cultivate the next wave of tech talent, ensuring a stronger, more
                      inclusive industry for everyone.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">
                        Growing the community that grows the future.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ukraine Support */}
                <div className="rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={socialUkraine} alt="Ukraine humanitarian support" loading="lazy" width={1280} height={720} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="p-10 space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Flag className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-light">Stand With Ukraine</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Since the beginning of the conflict, Speroteck has stood firmly with Ukraine.
                      We organize fundraisers, supply humanitarian aid, and support displaced
                      families with essential resources. Our team members actively volunteer,
                      coordinating logistics for medical supplies, food, and equipment for
                      communities in need.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">
                        Standing together for peace, resilience, and a brighter future.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Homeless Animals */}
                <div className="rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={socialAnimals} alt="Homeless animal shelter support" loading="lazy" width={1280} height={720} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="p-10 space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <PawPrint className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-light">Homeless Animals</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe compassion extends to all living beings. Our team regularly
                      supports local animal shelters through donations, volunteer work, and
                      awareness campaigns. From funding veterinary care to organizing adoption
                      drives, we help give homeless animals a second chance at a loving home.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">
                        Every life deserves care, comfort, and a place to call home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
