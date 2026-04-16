import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const RATE_LIMIT_MS = 15_000;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastAttempt = useRef<number>(0);
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

  const onSubmit = async (data: ContactFormValues) => {
    const now = Date.now();
    if (now - lastAttempt.current < RATE_LIMIT_MS) {
      toast({
        title: "Please wait",
        description: "You just submitted a message. Try again in a moment.",
        variant: "destructive",
      });
      return;
    }
    lastAttempt.current = now;

    setIsSubmitting(true);
    try {
      const { data: result, error } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone ?? "",
            message: data.message,
          },
        }
      );

      if (error || (result && (result as { error?: string }).error)) {
        const description =
          (result as { error?: string } | null)?.error ??
          "Something went wrong. Please try again.";
        toast({
          title: "Unable to send",
          description,
          variant: "destructive",
        });
        return;
      }

      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you shortly.",
      });
    } catch {
      toast({
        title: "Unable to send",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content">
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              {/* Left side - Info */}
              <div>
                <p className="text-minimal text-primary mb-4">GET IN TOUCH</p>
                <h1 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Let's Create the Next
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(82,75%,55%)]">
                    Big Thing Together
                  </span>
                </h1>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-minimal text-primary mb-2">EMAIL</h2>
                    <a href="mailto:info@speroteck.com" className="text-xl hover:text-primary transition-colors duration-300">
                      info@speroteck.com
                    </a>
                  </div>
                  <div>
                    <h2 className="text-minimal text-primary mb-2">PHONE</h2>
                    <a href="tel:18475089229" className="text-xl hover:text-primary transition-colors duration-300">
                      1 (847) 508-9229
                    </a>
                  </div>
                </div>

                <div className="pt-12 border-t border-border mt-12">
                  <h2 className="text-minimal text-primary mb-6">PLATFORMS WE WORK WITH</h2>
                  <div className="space-y-4">
                    <a href="https://business.adobe.com/products/magento/magento-commerce.html" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-primary transition-colors duration-300">Magento / Adobe Commerce</a>
                    <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-primary transition-colors duration-300">Shopify / Shopify Plus</a>
                    <a href="https://www.bigcommerce.com/" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-primary transition-colors duration-300">BigCommerce</a>
                    <a href="https://www.salesforce.com/commerce/" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-primary transition-colors duration-300">Salesforce Commerce Cloud</a>
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
                    <h2 className="text-2xl font-light">Thank you!</h2>
                    <p className="text-muted-foreground max-w-sm">
                      Your message has been received. We'll get back to you as soon as possible.
                    </p>
                    <Button variant="outline" onClick={() => { setSubmitted(false); form.reset(); }} className="mt-4">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-border p-8 md:p-10">
                    <h2 className="text-2xl font-light mb-8">Start a Conversation</h2>
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
                          disabled={isSubmitting}
                          className="w-full bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(82,75%,42%,0.4)] transition-all duration-300 uppercase tracking-wide font-semibold disabled:opacity-60"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
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
      </main>
    </div>
  );
};

export default Contact;
