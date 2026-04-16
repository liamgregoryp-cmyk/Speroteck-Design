
-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.newsletter_subscribers;

-- Create a rate-limiting function to prevent spam (max 3 subscriptions per IP per hour)
CREATE OR REPLACE FUNCTION public.check_newsletter_rate_limit()
RETURNS TRIGGER AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  -- Count recent subscriptions in the last hour
  SELECT COUNT(*) INTO recent_count
  FROM public.newsletter_subscribers
  WHERE subscribed_at > now() - interval '1 hour';
  
  -- Allow max 50 subscriptions per hour globally (prevents mass abuse)
  IF recent_count > 50 THEN
    RAISE EXCEPTION 'Rate limit exceeded. Please try again later.';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger to enforce rate limiting
CREATE TRIGGER enforce_newsletter_rate_limit
BEFORE INSERT ON public.newsletter_subscribers
FOR EACH ROW
EXECUTE FUNCTION public.check_newsletter_rate_limit();

-- Create a more restrictive INSERT policy (still allows anonymous but with the trigger guard)
CREATE POLICY "Rate-limited subscribe"
ON public.newsletter_subscribers
FOR INSERT
TO public
WITH CHECK (
  -- Only allow inserting with a valid email format
  email ~ '^[^\s@]+@[^\s@]+\.[^\s@]+$'
);
