export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      alerts: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          report_id: string
          shop_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          report_id: string
          shop_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          report_id?: string
          shop_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "alerts_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alerts_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string
          id: string
          is_read: boolean
          link: string | null
          title: string
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          title: string
          user_id: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount_egp: number
          created_at: string
          id: string
          kind: Database["public"]["Enums"]["payment_kind"]
          paid_at: string | null
          provider: string | null
          provider_ref: string | null
          report_id: string | null
          shop_id: string | null
          status: Database["public"]["Enums"]["payment_status"]
          subscription_id: string | null
          user_id: string
        }
        Insert: {
          amount_egp: number
          created_at?: string
          id?: string
          kind: Database["public"]["Enums"]["payment_kind"]
          paid_at?: string | null
          provider?: string | null
          provider_ref?: string | null
          report_id?: string | null
          shop_id?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          subscription_id?: string | null
          user_id: string
        }
        Update: {
          amount_egp?: number
          created_at?: string
          id?: string
          kind?: Database["public"]["Enums"]["payment_kind"]
          paid_at?: string | null
          provider?: string | null
          provider_ref?: string | null
          report_id?: string | null
          shop_id?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          subscription_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "shop_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          city: string | null
          created_at: string
          first_name: string | null
          governorate: string | null
          id: string
          is_verified: boolean
          last_name: string | null
          locale: string
          national_id: string | null
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          first_name?: string | null
          governorate?: string | null
          id?: string
          is_verified?: boolean
          last_name?: string | null
          locale?: string
          national_id?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          first_name?: string | null
          governorate?: string | null
          id?: string
          is_verified?: boolean
          last_name?: string | null
          locale?: string
          national_id?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      report_evidence: {
        Row: {
          caption: string | null
          created_at: string
          file_type: string | null
          file_url: string
          id: string
          report_id: string
        }
        Insert: {
          caption?: string | null
          created_at?: string
          file_type?: string | null
          file_url: string
          id?: string
          report_id: string
        }
        Update: {
          caption?: string | null
          created_at?: string
          file_type?: string | null
          file_url?: string
          id?: string
          report_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_evidence_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "reports"
            referencedColumns: ["id"]
          },
        ]
      }
      reports: {
        Row: {
          boost_expires_at: string | null
          category: Database["public"]["Enums"]["jewelry_category"]
          city: string | null
          contact_phone: string | null
          created_at: string
          description: string | null
          estimated_value_egp: number | null
          governorate: string | null
          id: string
          incident_date: string | null
          is_boosted: boolean
          karat: number | null
          reference_code: string
          reporter_id: string
          shop_id: string | null
          status: Database["public"]["Enums"]["report_status"]
          title: string
          type: Database["public"]["Enums"]["report_type"]
          updated_at: string
          views_count: number
          weight_grams: number | null
        }
        Insert: {
          boost_expires_at?: string | null
          category: Database["public"]["Enums"]["jewelry_category"]
          city?: string | null
          contact_phone?: string | null
          created_at?: string
          description?: string | null
          estimated_value_egp?: number | null
          governorate?: string | null
          id?: string
          incident_date?: string | null
          is_boosted?: boolean
          karat?: number | null
          reference_code?: string
          reporter_id: string
          shop_id?: string | null
          status?: Database["public"]["Enums"]["report_status"]
          title: string
          type: Database["public"]["Enums"]["report_type"]
          updated_at?: string
          views_count?: number
          weight_grams?: number | null
        }
        Update: {
          boost_expires_at?: string | null
          category?: Database["public"]["Enums"]["jewelry_category"]
          city?: string | null
          contact_phone?: string | null
          created_at?: string
          description?: string | null
          estimated_value_egp?: number | null
          governorate?: string | null
          id?: string
          incident_date?: string | null
          is_boosted?: boolean
          karat?: number | null
          reference_code?: string
          reporter_id?: string
          shop_id?: string | null
          status?: Database["public"]["Enums"]["report_status"]
          title?: string
          type?: Database["public"]["Enums"]["report_type"]
          updated_at?: string
          views_count?: number
          weight_grams?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reports_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shop_subscriptions: {
        Row: {
          auto_renew: boolean
          created_at: string
          ends_at: string | null
          id: string
          plan_id: string
          shop_id: string
          starts_at: string | null
          status: Database["public"]["Enums"]["subscription_status"]
          updated_at: string
        }
        Insert: {
          auto_renew?: boolean
          created_at?: string
          ends_at?: string | null
          id?: string
          plan_id: string
          shop_id: string
          starts_at?: string | null
          status?: Database["public"]["Enums"]["subscription_status"]
          updated_at?: string
        }
        Update: {
          auto_renew?: boolean
          created_at?: string
          ends_at?: string | null
          id?: string
          plan_id?: string
          shop_id?: string
          starts_at?: string | null
          status?: Database["public"]["Enums"]["subscription_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shop_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shop_subscriptions_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops: {
        Row: {
          address: string | null
          badge_tier: Database["public"]["Enums"]["subscription_tier"] | null
          city: string | null
          commercial_register: string | null
          cover_url: string | null
          created_at: string
          description: string | null
          description_ar: string | null
          email: string | null
          governorate: string | null
          id: string
          license_doc_url: string | null
          logo_url: string | null
          name: string
          owner_id: string
          phone: string | null
          rating: number
          reports_handled: number
          slug: string | null
          tax_id: string | null
          updated_at: string
          verification: Database["public"]["Enums"]["shop_verification"]
          whatsapp: string | null
        }
        Insert: {
          address?: string | null
          badge_tier?: Database["public"]["Enums"]["subscription_tier"] | null
          city?: string | null
          commercial_register?: string | null
          cover_url?: string | null
          created_at?: string
          description?: string | null
          description_ar?: string | null
          email?: string | null
          governorate?: string | null
          id?: string
          license_doc_url?: string | null
          logo_url?: string | null
          name: string
          owner_id: string
          phone?: string | null
          rating?: number
          reports_handled?: number
          slug?: string | null
          tax_id?: string | null
          updated_at?: string
          verification?: Database["public"]["Enums"]["shop_verification"]
          whatsapp?: string | null
        }
        Update: {
          address?: string | null
          badge_tier?: Database["public"]["Enums"]["subscription_tier"] | null
          city?: string | null
          commercial_register?: string | null
          cover_url?: string | null
          created_at?: string
          description?: string | null
          description_ar?: string | null
          email?: string | null
          governorate?: string | null
          id?: string
          license_doc_url?: string | null
          logo_url?: string | null
          name?: string
          owner_id?: string
          phone?: string | null
          rating?: number
          reports_handled?: number
          slug?: string | null
          tax_id?: string | null
          updated_at?: string
          verification?: Database["public"]["Enums"]["shop_verification"]
          whatsapp?: string | null
        }
        Relationships: []
      }
      subscription_plans: {
        Row: {
          created_at: string
          duration_days: number
          features: Json
          features_ar: Json
          id: string
          is_active: boolean
          name: string
          name_ar: string
          price_egp: number
          tier: Database["public"]["Enums"]["subscription_tier"]
        }
        Insert: {
          created_at?: string
          duration_days?: number
          features?: Json
          features_ar?: Json
          id?: string
          is_active?: boolean
          name: string
          name_ar: string
          price_egp: number
          tier: Database["public"]["Enums"]["subscription_tier"]
        }
        Update: {
          created_at?: string
          duration_days?: number
          features?: Json
          features_ar?: Json
          id?: string
          is_active?: boolean
          name?: string
          name_ar?: string
          price_egp?: number
          tier?: Database["public"]["Enums"]["subscription_tier"]
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_staff: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "user" | "shop_owner" | "moderator" | "admin" | "finance"
      jewelry_category:
        | "ring"
        | "necklace"
        | "bracelet"
        | "earring"
        | "chain"
        | "pendant"
        | "watch"
        | "coin"
        | "bar"
        | "other"
      payment_kind: "subscription" | "boost"
      payment_status: "pending" | "completed" | "failed" | "refunded"
      report_status:
        | "draft"
        | "pending"
        | "approved"
        | "rejected"
        | "resolved"
        | "closed"
      report_type: "lost" | "stolen" | "found" | "suspicious"
      shop_verification: "pending" | "verified" | "suspended" | "rejected"
      subscription_status:
        | "active"
        | "expired"
        | "cancelled"
        | "pending_payment"
      subscription_tier: "bronze" | "silver" | "gold"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["user", "shop_owner", "moderator", "admin", "finance"],
      jewelry_category: [
        "ring",
        "necklace",
        "bracelet",
        "earring",
        "chain",
        "pendant",
        "watch",
        "coin",
        "bar",
        "other",
      ],
      payment_kind: ["subscription", "boost"],
      payment_status: ["pending", "completed", "failed", "refunded"],
      report_status: [
        "draft",
        "pending",
        "approved",
        "rejected",
        "resolved",
        "closed",
      ],
      report_type: ["lost", "stolen", "found", "suspicious"],
      shop_verification: ["pending", "verified", "suspended", "rejected"],
      subscription_status: [
        "active",
        "expired",
        "cancelled",
        "pending_payment",
      ],
      subscription_tier: ["bronze", "silver", "gold"],
    },
  },
} as const
