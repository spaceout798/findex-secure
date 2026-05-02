
-- Fix function search_path
CREATE OR REPLACE FUNCTION public.tg_set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

-- Lock down SECURITY DEFINER helpers
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.is_staff(uuid) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- Restrict public buckets so users can't list arbitrary files
DROP POLICY IF EXISTS "Avatars public read" ON storage.objects;
DROP POLICY IF EXISTS "Shop assets public read" ON storage.objects;
DROP POLICY IF EXISTS "Evidence public read" ON storage.objects;

-- Seed subscription plans
INSERT INTO public.subscription_plans (tier, name, name_ar, price_egp, duration_days, features, features_ar) VALUES
  ('bronze','Bronze','برونزي', 299, 30,
    '["Verified badge","Listed in directory","Up to 20 alerts/month","Basic analytics"]'::jsonb,
    '["شارة موثوق","الظهور في الدليل","حتى 20 تنبيه شهرياً","تحليلات أساسية"]'::jsonb),
  ('silver','Silver','فضي', 599, 30,
    '["All Bronze features","Unlimited alerts","Report on behalf of customers","Advanced analytics","Priority support"]'::jsonb,
    '["كل مزايا البرونزي","تنبيهات غير محدودة","بلاغات نيابة عن العملاء","تحليلات متقدمة","دعم ذو أولوية"]'::jsonb),
  ('gold','Gold','ذهبي', 1199, 30,
    '["All Silver features","Featured placement","Printable certificate","Pro dashboard","Dedicated account manager"]'::jsonb,
    '["كل مزايا الفضي","ظهور مميز","شهادة اعتماد قابلة للطباعة","لوحة احترافية","مدير حساب مخصص"]'::jsonb)
ON CONFLICT (tier) DO NOTHING;
