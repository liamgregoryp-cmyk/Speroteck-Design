-- Contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  submitter_ip TEXT
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Reads are denied by default (no policy). Only service_role can read.
-- Inserts are handled exclusively by the send-contact-email edge function
-- using the service role key; no anon insert policy is created.
CREATE POLICY "No public reads" ON public.contact_messages
  FOR SELECT USING (false);

-- Rate-limit: max 30 contact submissions per hour globally to block spam floods
CREATE OR REPLACE FUNCTION public.check_contact_rate_limit()
RETURNS TRIGGER AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO recent_count
  FROM public.contact_messages
  WHERE submitted_at > now() - interval '1 hour';

  IF recent_count > 30 THEN
    RAISE EXCEPTION 'Rate limit exceeded. Please try again later.';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER enforce_contact_rate_limit
BEFORE INSERT ON public.contact_messages
FOR EACH ROW
EXECUTE FUNCTION public.check_contact_rate_limit();

CREATE INDEX IF NOT EXISTS idx_contact_messages_submitted_at
  ON public.contact_messages (submitted_at DESC);
