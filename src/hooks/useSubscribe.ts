import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const RATE_LIMIT_MS = 10_000; // 10 seconds between attempts
const MAX_ATTEMPTS = 5; // max attempts per session

export const useSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const lastAttempt = useRef<number>(0);
  const attemptCount = useRef<number>(0);

  const subscribe = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email.trim()) return;

    // Client-side rate limiting
    const now = Date.now();
    if (now - lastAttempt.current < RATE_LIMIT_MS) {
      toast({ title: "Too fast", description: "Please wait a moment before trying again.", variant: "destructive" });
      return;
    }
    if (attemptCount.current >= MAX_ATTEMPTS) {
      toast({ title: "Limit reached", description: "Too many attempts. Please refresh and try again.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const sanitizedEmail = email.trim().toLowerCase().slice(0, 255);
    if (!emailRegex.test(sanitizedEmail)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    lastAttempt.current = now;
    attemptCount.current += 1;
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: sanitizedEmail });

      if (error) {
        if (error.code === "23505") {
          toast({ title: "Already subscribed", description: "This email is already on our list!" });
        } else {
          throw error;
        }
      } else {
        toast({ title: "Subscribed!", description: "You'll receive updates from Speroteck." });
        setEmail("");
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return { email, setEmail, isLoading, subscribe };
};
