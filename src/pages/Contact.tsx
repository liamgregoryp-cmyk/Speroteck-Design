import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form submitted:", { ...data, phone: data.phone ? "[provided]" : "[not provided]" });
    setSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you shortly.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              {/* Left side - Info */}
              <div>
                <h1 className="text-minimal text-primary mb-4">GET IN TOUCH</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Let's Create the Next
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)]">
                    Big Thing Together
                  </span>
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-minimal text-primary mb-2">EMAIL</h3>
                    <a href="mailto:info@speroteck.com" className="text-xl hover:text-primary transition-colors duration-300">
                      info@speroteck.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-minimal text-primary mb-2">PHONE</h3>
                    <a href="tel:18475089229" className="text-xl hover:text-primary transition-colors duration-300">
                      1 (847) 508-9229
                    </a>
                  </div>
                </div>

                <div className="pt-12 border-t border-border mt-12">
                  <h3 className="text-minimal text-primary mb-6">PLATFORMS WE WORK WITH</h3>
                  <div className="space-y-4">
                    <span className="block text-xl">Magento / Adobe Commerce</span>
                    <span className="block text-xl">Shopify / Shopify Plus</span>
                    <span className="block text-xl">BigCommerce</span>
                    <span className="block text-xl">Salesforce Commerce Cloud</span>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Send className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-light">Thank you!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Your message has been received. We'll get back to you as soon as possible.
                    </p>
                    <Button variant="outline" onClick={() => { setSubmitted(false); form.reset(); }} className="mt-4">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-border p-8 md:p-10">
                    <h3 className="text-2xl font-light mb-8">Start a Conversation</h3>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (optional)</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Tell us about your project..." rows={5} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(82,75%,42%,0.4)] transition-all duration-300 uppercase tracking-wide font-semibold"
                        >
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </Button>
                      </form>
                    </Form>

                    <p className="text-muted-foreground text-sm mt-6 text-center">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
