
-- ============ ENUMS ============
CREATE TYPE public.app_role AS ENUM ('user', 'shop_owner', 'moderator', 'admin', 'finance');
CREATE TYPE public.report_type AS ENUM ('lost', 'stolen', 'found', 'suspicious');
CREATE TYPE public.report_status AS ENUM ('draft', 'pending', 'approved', 'rejected', 'resolved', 'closed');
CREATE TYPE public.jewelry_category AS ENUM ('ring', 'necklace', 'bracelet', 'earring', 'chain', 'pendant', 'watch', 'coin', 'bar', 'other');
CREATE TYPE public.shop_verification AS ENUM ('pending', 'verified', 'suspended', 'rejected');
CREATE TYPE public.subscription_tier AS ENUM ('bronze', 'silver', 'gold');
CREATE TYPE public.subscription_status AS ENUM ('active', 'expired', 'cancelled', 'pending_payment');
CREATE TYPE public.payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
CREATE TYPE public.payment_kind AS ENUM ('subscription', 'boost');

-- ============ UTIL: updated_at trigger ============
CREATE OR REPLACE FUNCTION public.tg_set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

-- ============ PROFILES ============
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  governorate TEXT,
  city TEXT,
  avatar_url TEXT,
  locale TEXT NOT NULL DEFAULT 'en',
  is_verified BOOLEAN NOT NULL DEFAULT false,
  national_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_profiles_updated BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- ============ USER ROLES ============
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE OR REPLACE FUNCTION public.is_staff(_user_id UUID)
RETURNS BOOLEAN LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role IN ('admin','moderator','finance'));
$$;

-- ============ SHOPS ============
CREATE TABLE public.shops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  commercial_register TEXT,
  tax_id TEXT,
  governorate TEXT,
  city TEXT,
  address TEXT,
  phone TEXT,
  whatsapp TEXT,
  email TEXT,
  logo_url TEXT,
  cover_url TEXT,
  description TEXT,
  description_ar TEXT,
  license_doc_url TEXT,
  verification public.shop_verification NOT NULL DEFAULT 'pending',
  badge_tier public.subscription_tier,
  rating NUMERIC(3,2) NOT NULL DEFAULT 0,
  reports_handled INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.shops ENABLE ROW LEVEL SECURITY;
CREATE INDEX idx_shops_verification ON public.shops(verification);
CREATE INDEX idx_shops_governorate ON public.shops(governorate);
CREATE TRIGGER trg_shops_updated BEFORE UPDATE ON public.shops
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- ============ SUBSCRIPTION PLANS ============
CREATE TABLE public.subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tier public.subscription_tier NOT NULL UNIQUE,
  name TEXT NOT NULL,
  name_ar TEXT NOT NULL,
  price_egp NUMERIC(10,2) NOT NULL,
  duration_days INT NOT NULL DEFAULT 30,
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  features_ar JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;

-- ============ SHOP SUBSCRIPTIONS ============
CREATE TABLE public.shop_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shop_id UUID NOT NULL REFERENCES public.shops(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES public.subscription_plans(id),
  status public.subscription_status NOT NULL DEFAULT 'pending_payment',
  starts_at TIMESTAMPTZ,
  ends_at TIMESTAMPTZ,
  auto_renew BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.shop_subscriptions ENABLE ROW LEVEL SECURITY;
CREATE INDEX idx_shopsub_shop ON public.shop_subscriptions(shop_id);
CREATE TRIGGER trg_shopsub_updated BEFORE UPDATE ON public.shop_subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- ============ REPORTS ============
CREATE TABLE public.reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  shop_id UUID REFERENCES public.shops(id) ON DELETE SET NULL,
  type public.report_type NOT NULL,
  category public.jewelry_category NOT NULL,
  status public.report_status NOT NULL DEFAULT 'pending',
  title TEXT NOT NULL,
  description TEXT,
  weight_grams NUMERIC(8,2),
  karat INT,
  estimated_value_egp NUMERIC(12,2),
  governorate TEXT,
  city TEXT,
  incident_date DATE,
  contact_phone TEXT,
  is_boosted BOOLEAN NOT NULL DEFAULT false,
  boost_expires_at TIMESTAMPTZ,
  views_count INT NOT NULL DEFAULT 0,
  reference_code TEXT UNIQUE NOT NULL DEFAULT ('FX-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8))),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
CREATE INDEX idx_reports_status ON public.reports(status);
CREATE INDEX idx_reports_type ON public.reports(type);
CREATE INDEX idx_reports_governorate ON public.reports(governorate);
CREATE INDEX idx_reports_boosted ON public.reports(is_boosted) WHERE is_boosted = true;
CREATE TRIGGER trg_reports_updated BEFORE UPDATE ON public.reports
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

-- ============ REPORT EVIDENCE ============
CREATE TABLE public.report_evidence (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id UUID NOT NULL REFERENCES public.reports(id) ON DELETE CASCADE,
  file_url TEXT NOT NULL,
  file_type TEXT,
  caption TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.report_evidence ENABLE ROW LEVEL SECURITY;

-- ============ PAYMENTS ============
CREATE TABLE public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  shop_id UUID REFERENCES public.shops(id) ON DELETE SET NULL,
  subscription_id UUID REFERENCES public.shop_subscriptions(id) ON DELETE SET NULL,
  report_id UUID REFERENCES public.reports(id) ON DELETE SET NULL,
  kind public.payment_kind NOT NULL,
  amount_egp NUMERIC(10,2) NOT NULL,
  status public.payment_status NOT NULL DEFAULT 'pending',
  provider TEXT,
  provider_ref TEXT,
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
CREATE INDEX idx_payments_user ON public.payments(user_id);
CREATE INDEX idx_payments_shop ON public.payments(shop_id);

-- ============ ALERTS & NOTIFICATIONS ============
CREATE TABLE public.alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shop_id UUID NOT NULL REFERENCES public.shops(id) ON DELETE CASCADE,
  report_id UUID NOT NULL REFERENCES public.reports(id) ON DELETE CASCADE,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(shop_id, report_id)
);
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body TEXT,
  link TEXT,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
CREATE INDEX idx_notifications_user ON public.notifications(user_id, is_read);

-- ============ HANDLE NEW USER (auto profile + default role) ============
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (user_id, first_name, last_name, locale)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name',
    COALESCE(NEW.raw_user_meta_data->>'locale','en')
  )
  ON CONFLICT (user_id) DO NOTHING;

  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user')
  ON CONFLICT DO NOTHING;
  RETURN NEW;
END; $$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============ RLS POLICIES ============

-- profiles
CREATE POLICY "Profiles viewable by self and staff" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id OR public.is_staff(auth.uid()));
CREATE POLICY "Users insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Admins update any profile" ON public.profiles
  FOR UPDATE USING (public.has_role(auth.uid(),'admin'));

-- user_roles
CREATE POLICY "Users view their own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id OR public.is_staff(auth.uid()));
CREATE POLICY "Admins manage roles" ON public.user_roles
  FOR ALL USING (public.has_role(auth.uid(),'admin'))
  WITH CHECK (public.has_role(auth.uid(),'admin'));

-- shops
CREATE POLICY "Verified shops are public" ON public.shops
  FOR SELECT USING (verification = 'verified' OR auth.uid() = owner_id OR public.is_staff(auth.uid()));
CREATE POLICY "Owners insert their shop" ON public.shops
  FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Owners update their shop" ON public.shops
  FOR UPDATE USING (auth.uid() = owner_id OR public.is_staff(auth.uid()));
CREATE POLICY "Admins delete shops" ON public.shops
  FOR DELETE USING (public.has_role(auth.uid(),'admin'));

-- subscription_plans (public)
CREATE POLICY "Plans are public" ON public.subscription_plans
  FOR SELECT USING (true);
CREATE POLICY "Admins manage plans" ON public.subscription_plans
  FOR ALL USING (public.has_role(auth.uid(),'admin'))
  WITH CHECK (public.has_role(auth.uid(),'admin'));

-- shop_subscriptions
CREATE POLICY "Shop owners view their subs" ON public.shop_subscriptions
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.shops s WHERE s.id = shop_id AND s.owner_id = auth.uid())
    OR public.is_staff(auth.uid())
  );
CREATE POLICY "Shop owners create subs" ON public.shop_subscriptions
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.shops s WHERE s.id = shop_id AND s.owner_id = auth.uid())
  );
CREATE POLICY "Staff manage subs" ON public.shop_subscriptions
  FOR UPDATE USING (public.is_staff(auth.uid()));

-- reports
CREATE POLICY "Approved reports are public" ON public.reports
  FOR SELECT USING (status IN ('approved','resolved') OR auth.uid() = reporter_id OR public.is_staff(auth.uid()));
CREATE POLICY "Users create their reports" ON public.reports
  FOR INSERT WITH CHECK (auth.uid() = reporter_id);
CREATE POLICY "Authors update their reports" ON public.reports
  FOR UPDATE USING (auth.uid() = reporter_id OR public.is_staff(auth.uid()));
CREATE POLICY "Admins delete reports" ON public.reports
  FOR DELETE USING (public.has_role(auth.uid(),'admin'));

-- report_evidence
CREATE POLICY "Evidence visible with report" ON public.report_evidence
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.reports r WHERE r.id = report_id
      AND (r.status IN ('approved','resolved') OR r.reporter_id = auth.uid() OR public.is_staff(auth.uid())))
  );
CREATE POLICY "Reporters add evidence" ON public.report_evidence
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.reports r WHERE r.id = report_id AND r.reporter_id = auth.uid())
  );
CREATE POLICY "Reporters delete evidence" ON public.report_evidence
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.reports r WHERE r.id = report_id AND r.reporter_id = auth.uid())
    OR public.is_staff(auth.uid())
  );

-- payments
CREATE POLICY "Users view their payments" ON public.payments
  FOR SELECT USING (auth.uid() = user_id OR public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'finance'));
CREATE POLICY "Users create their payments" ON public.payments
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Finance updates payments" ON public.payments
  FOR UPDATE USING (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'finance'));

-- alerts
CREATE POLICY "Shop owners view their alerts" ON public.alerts
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.shops s WHERE s.id = shop_id AND s.owner_id = auth.uid())
    OR public.is_staff(auth.uid())
  );
CREATE POLICY "Shop owners update their alerts" ON public.alerts
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.shops s WHERE s.id = shop_id AND s.owner_id = auth.uid())
  );

-- notifications
CREATE POLICY "Users view their notifications" ON public.notifications
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users update their notifications" ON public.notifications
  FOR UPDATE USING (auth.uid() = user_id);

-- ============ STORAGE BUCKETS ============
INSERT INTO storage.buckets (id, name, public) VALUES
  ('avatars','avatars',true),
  ('shop-assets','shop-assets',true),
  ('report-evidence','report-evidence',true),
  ('shop-licenses','shop-licenses',false)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Avatars public read" ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
CREATE POLICY "Users upload own avatar" ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users update own avatar" ON storage.objects FOR UPDATE
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Shop assets public read" ON storage.objects FOR SELECT USING (bucket_id = 'shop-assets');
CREATE POLICY "Shop owners upload assets" ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'shop-assets' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Shop owners update assets" ON storage.objects FOR UPDATE
  USING (bucket_id = 'shop-assets' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Evidence public read" ON storage.objects FOR SELECT USING (bucket_id = 'report-evidence');
CREATE POLICY "Users upload evidence" ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'report-evidence' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users update own evidence" ON storage.objects FOR UPDATE
  USING (bucket_id = 'report-evidence' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Owners read own license" ON storage.objects FOR SELECT
  USING (bucket_id = 'shop-licenses' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Owners upload license" ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'shop-licenses' AND auth.uid()::text = (storage.foldername(name))[1]);
