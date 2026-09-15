import { ERPModuleInfo, Project, ProjectMilestone } from '../types';

export const ERP_MODULES: ERPModuleInfo[] = [
  {
    key: 'marketing',
    name: 'Marketing & Sales CRM',
    tagline: 'Otomasi Saluran Penjualan & Pipeline Prospek Omnichannel',
    icon: 'Megaphone',
    accentColor: 'from-blue-500 to-cyan-500',
    badge: 'Akuisisi & Retensi',
    description: 'Pantau setiap prospek dari lead masuk via WhatsApp/Website, integrasi penawaran harga (Quotation), komisi sales otomatis, hingga konversi menjadi pelanggan setia.',
    features: [
      'Omnichannel WhatsApp & Web Chat Inbox Terpadu',
      'Manajemen Pipeline Prospek (Kanban Lead Stages)',
      'Generator Surat Penawaran & Invoice Otomatis',
      'Perhitungan Komisi Sales Berdasarkan Target Omzet',
      'Customer Lifetime Value (LTV) & Churn Predictor'
    ],
    metrics: [
      { label: 'Konversi Lead to Deal', value: '+34.8%', trend: 'Meningkat' },
      { label: 'Response Time CS', value: '< 2 Menit', trend: 'Rata-rata' },
      { label: 'Pipeline Value', value: 'Rp 4.2 Miliar', trend: 'Aktif' }
    ],
    mockDataSnippet: {
      title: 'Active Deal Pipeline',
      items: [
        { label: 'PT Multi Karya (Tender Pabrik)', value: 'Rp 850.000.000 (Negosiasi)', status: 'info' },
        { label: 'CV Jaya Abadi (Distribusi Q3)', value: 'Rp 420.000.000 (SPK Terbit)', status: 'success' },
        { label: 'PT Sentosa Logistik (Add-on)', value: 'Rp 190.000.000 (Follow Up)', status: 'warning' }
      ]
    }
  },
  {
    key: 'finance',
    name: 'Keuangan & Akuntansi',
    tagline: 'Pusat Kontrol Finansial, Multi-Entity & Real-time Cashflow',
    icon: 'WalletCards',
    accentColor: 'from-emerald-500 to-teal-500',
    badge: 'Transparansi Kas',
    description: 'Pusat kendali arus kas (Cashflow), rekonsiliasi bank otomatis, approval berjenjang anggaran pengeluaran, General Ledger, serta laporan laba rugi real-time tanpa delay tutup buku.',
    features: [
      'Laporan Laba Rugi, Neraca, & Arus Kas Real-Time',
      'Multi-Level Approval Pengeluaran Kas (Petty Cash & OPEX)',
      'Integrasi Bank Statement & Auto-Reconciliation',
      'Manajemen Piutang Usaha (AR Aging) & Reminder Tagihan',
      'Kalkulasi Pajak Usaha Otomatis (PPN, PPh 23, PPh Final)'
    ],
    metrics: [
      { label: 'Waktu Tutup Buku Bulanan', value: '1 Hari', trend: 'Dari 14 Hari' },
      { label: 'Akurasi Rekonsiliasi', value: '99.9%', trend: 'Audit-ready' },
      { label: 'Net Cashflow Growth', value: '+28.4%', trend: 'MoM' }
    ],
    mockDataSnippet: {
      title: 'Financial Health Matrix',
      items: [
        { label: 'Total Pendapatan Bulan Ini', value: 'Rp 1.482.000.000', status: 'success' },
        { label: 'OPEX Terverifikasi', value: 'Rp 560.400.000 (Approved)', status: 'info' },
        { label: 'Piutang Jatuh Tempo < 7 Hari', value: 'Rp 84.000.000 (3 Klien)', status: 'warning' }
      ]
    }
  },
  {
    key: 'production',
    name: 'Produksi & Supply Chain',
    tagline: 'Kendali Efisiensi Pabrik, Gudang, & Bill of Materials',
    icon: 'Factory',
    accentColor: 'from-amber-500 to-orange-500',
    badge: 'Efisiensi Pabrik',
    description: 'Manajemen Surat Perintah Kerja (SPK), resep Bill of Materials (BOM), monitoring mesin & shift kerja pabrik, serta pelacakan stok multi-gudang dengan barcode scanner.',
    features: [
      'Bill of Materials (BOM) & Perhitungan HPP Otomatis',
      'Monitoring Real-time SPK & Work-in-Progress (WIP)',
      'Multi-Warehouse Inventory & Batch Expiry Tracking',
      'Sistem Quality Control (QC Gate) Bahan Baku & Barang Jadi',
      'Re-order Point Otomatis ke Vendor saat Stok Menipis'
    ],
    metrics: [
      { label: 'Efisiensi Waste Bahan Baku', value: '-22.5%', trend: 'Reduksi' },
      { label: 'On-Time In-Full (OTIF)', value: '96.2%', trend: 'Pengiriman' },
      { label: 'Kapasitas Utilitas Mesin', value: '88.4%', trend: 'Optimal' }
    ],
    mockDataSnippet: {
      title: 'Live Factory Floor & Inventory',
      items: [
        { label: 'SPK-2026/08/99 (Batch Packaging)', value: '92% Selesai (QC Passed)', status: 'success' },
        { label: 'Gudang Pusat Cikarang', value: '1.420 Unit (Kapasitas 84%)', status: 'info' },
        { label: 'Bahan Baku Polyethylene', value: 'Stok Kritis (Auto-PO Triggered)', status: 'warning' }
      ]
    }
  },
  {
    key: 'hr',
    name: 'SDM & Payroll',
    tagline: 'Otomatisasi Presensi GPS, Payroll, KPI & BPJS Terintegrasi',
    icon: 'Users',
    accentColor: 'from-purple-500 to-pink-500',
    badge: 'Manajemen Talenta',
    description: 'Otomatisasi absensi dengan verifikasi GPS & Face Recognition, kalkulasi payroll lengkap dengan potongan PPh 21 dan BPJS, pengajuan cuti instan, serta KPI tracking.',
    features: [
      'Presensi Mobile GPS Geofencing & Anti-Fake GPS',
      'Hitung Payroll 1-Klik (Gaji Pokok, Lembur, BPJS, PPh 21)',
      'Slip Gaji Digital Terenkripsi Terkirim via WhatsApp / Email',
      'Pengajuan Cuti, Izin, & Reimbursement Berjenjang',
      'Evaluasi Kinerja Karyawan & Key Performance Indicator (KPI)'
    ],
    metrics: [
      { label: 'Waktu Proses Penggajian', value: '15 Menit', trend: 'Ratusan Karyawan' },
      { label: 'Akurasi Potongan PPh 21 / BPJS', value: '100%', trend: 'Sesuai UU Terkini' },
      { label: 'Tingkat Kehadiran On-Time', value: '97.6%', trend: 'Disiplin Tinggi' }
    ],
    mockDataSnippet: {
      title: 'Human Capital Overview',
      items: [
        { label: 'Total Karyawan Aktif', value: '184 Personel (100% Verified)', status: 'info' },
        { label: 'Payroll Periode Agustus', value: 'Selesai Dihitung (Siap Disburs)', status: 'success' },
        { label: 'Pengajuan Cuti Pending', value: '4 Permintaan (Menunggu Manager)', status: 'warning' }
      ]
    }
  }
];

export const DEMO_PROJECT: Project = {
  id: 'proj_satupintu_8821',
  clientId: 'usr_client_demo_01',
  clientName: 'Ir. Hendra Gunawan',
  companyName: 'PT Nusantara Prima Industri',
  title: 'SatuPintu Core ERP v2.4 - Industrial & Distribution Suite',
  slug: 'pt-nusantara-prima-erp',
  description: 'Pengembangan sistem manajemen terpadu yang menghubungkan 3 pabrik manufaktur di Karawang dan 12 depo distribusi nasional dengan integrasi modul Keuangan, Produksi, dan Logistik.',
  modules: ['marketing', 'finance', 'production', 'hr'],
  status: 'development',
  progressPercentage: 68,
  startDate: '2026-06-15',
  targetLaunchDate: '2026-10-30',
  stagingUrl: 'https://staging-nusantara.satupintu.id',
  repositoryUrl: 'https://github.com/satupintu-org/client-nusantara-erp-v2',
  leadArchitect: {
    name: 'Bima Satria, S.Kom., M.T.',
    role: 'Principal Solutions Architect',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  }
};

export const DEMO_MILESTONES: ProjectMilestone[] = [
  {
    id: 'ms_01',
    projectId: 'proj_satupintu_8821',
    title: 'Phase 1: Business Requirement Document (BRD) & Workflow Mapping',
    description: 'Pemetaan proses bisnis lintas divisi Marketing, Keuangan, Produksi, dan HR serta perancangan Data Flow Diagram (DFD).',
    sequenceOrder: 1,
    status: 'completed',
    dueDate: '2026-06-30',
    completedAt: '2026-06-28',
    deliverables: ['Dokumen BRD Final v1.2 (Signed)', 'Entity Relationship Diagram (ERD)', 'User Story Matrix']
  },
  {
    id: 'ms_02',
    projectId: 'proj_satupintu_8821',
    title: 'Phase 2: Database Architecture, Security Rules & High-Fidelity UI/UX',
    description: 'Penyusunan skema PostgreSQL dengan Row Level Security, arsitektur micro-services, dan 48 halaman prototipe interaktif Figma.',
    sequenceOrder: 2,
    status: 'completed',
    dueDate: '2026-07-20',
    completedAt: '2026-07-18',
    deliverables: ['Supabase DB Schema DDL & RLS Verified', 'Design System & Figma Component Library', 'API Contract Specification']
  },
  {
    id: 'ms_03',
    projectId: 'proj_satupintu_8821',
    title: 'Phase 3: Core Module Development (Marketing CRM & Keuangan General Ledger)',
    description: 'Pengembangan backend & frontend modul CRM, invoice generation, approval kas berjenjang, dan laporan laba rugi real-time.',
    sequenceOrder: 3,
    status: 'completed',
    dueDate: '2026-08-15',
    completedAt: '2026-08-14',
    deliverables: ['Module CRM & Quotation Engine Live', 'General Ledger & Multi-Currency Engine', 'Bank Reconciliation Service']
  },
  {
    id: 'ms_04',
    projectId: 'proj_satupintu_8821',
    title: 'Phase 4: Factory Floor SPK, BOM & Multi-Warehouse Supply Chain Engine',
    description: 'Implementasi modul Surat Perintah Kerja, Bill of Materials otomatis, integrasi barcode scanner gudang, dan sinkronisasi stok.',
    sequenceOrder: 4,
    status: 'in_progress',
    dueDate: '2026-09-15',
    deliverables: ['BOM Recipe Engine (Testing in Progress)', 'Warehouse Barcode Scanner API', 'Work-in-Progress (WIP) Tracking']
  },
  {
    id: 'ms_05',
    projectId: 'proj_satupintu_8821',
    title: 'Phase 5: SDM GPS Geofencing, Payroll PPh 21 Engine & UAT Testing',
    description: 'Integrasi modul absensi mobile GPS, slip gaji terenkripsi, hitung BPJS & PPh 21, dilanjutkan tahap User Acceptance Test (UAT).',
    sequenceOrder: 5,
    status: 'pending',
    dueDate: '2026-10-10',
    deliverables: ['HR Mobile App Staging Build', 'Payroll Tax Engine Verification', 'User Acceptance Testing (UAT) Sign-off']
  },
  {
    id: 'ms_06',
    projectId: 'proj_satupintu_8821',
    title: 'Phase 6: Production Deployment, Data Migration & 24/7 SLA Guarantee',
    description: 'Migrasi data historis dari software lama, pelatihan operator & manajemen, live cutover server, serta garansi pemeliharaan.',
    sequenceOrder: 6,
    status: 'pending',
    dueDate: '2026-10-30',
    deliverables: ['Live Cloud Deployment & Load Balancer', 'Data Migration Verification Report', 'SLA Contract & On-site Training']
  }
];

export const SQL_DDL_SCHEMA = `-- ====================================================================
-- satupintu.id - PostgreSQL / Supabase Database Architecture Schema
-- Description: Custom ERP Software House & Client Portal Foundation
-- Security: Strict Row Level Security (RLS) enabled on all tables
-- ====================================================================

-- 1. Enable Required Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Custom ENUM Types
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('admin', 'client');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE project_status AS ENUM ('discovery', 'design', 'development', 'testing', 'deployed', 'maintenance');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE milestone_status AS ENUM ('pending', 'in_progress', 'completed', 'blocked');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'demo_scheduled', 'proposal_sent', 'won', 'lost');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. Utility Function: Automatically Update updated_at Timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ====================================================================
-- TABLE 1: profiles (User Profile & Role Definition)
-- Linked to Supabase auth.users with Strict RLS
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    company_name TEXT NOT NULL DEFAULT '',
    phone_number TEXT,
    role user_role NOT NULL DEFAULT 'client',
    avatar_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for Fast Role and Email Lookups
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);

-- Trigger: Update updated_at
DROP TRIGGER IF EXISTS trg_profiles_updated_at ON public.profiles;
CREATE TRIGGER trg_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ====================================================================
-- TABLE 2: projects (Client ERP Development Projects)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL DEFAULT '',
    modules TEXT[] NOT NULL DEFAULT ARRAY['marketing', 'finance', 'production', 'hr']::TEXT[],
    status project_status NOT NULL DEFAULT 'discovery',
    progress_percentage INTEGER NOT NULL DEFAULT 0 CHECK (progress_percentage BETWEEN 0 AND 100),
    start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    target_launch_date DATE NOT NULL,
    staging_url TEXT,
    repository_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_projects_client_id ON public.projects(client_id);
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);

DROP TRIGGER IF EXISTS trg_projects_updated_at ON public.projects;
CREATE TRIGGER trg_projects_updated_at
    BEFORE UPDATE ON public.projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ====================================================================
-- TABLE 3: project_milestones (Milestone & Progress Tracking)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.project_milestones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    sequence_order INTEGER NOT NULL DEFAULT 1,
    status milestone_status NOT NULL DEFAULT 'pending',
    due_date DATE NOT NULL,
    completed_at TIMESTAMPTZ,
    deliverables TEXT[] DEFAULT ARRAY[]::TEXT[],
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_milestones_project_id ON public.project_milestones(project_id);
CREATE INDEX IF NOT EXISTS idx_milestones_sequence ON public.project_milestones(project_id, sequence_order);

DROP TRIGGER IF EXISTS trg_project_milestones_updated_at ON public.project_milestones;
CREATE TRIGGER trg_project_milestones_updated_at
    BEFORE UPDATE ON public.project_milestones
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ====================================================================
-- TABLE 4: leads (Public Contact & Demo Request Submissions)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company_name TEXT NOT NULL,
    business_type TEXT NOT NULL DEFAULT 'Umum',
    needed_modules TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    notes TEXT NOT NULL DEFAULT '',
    status lead_status NOT NULL DEFAULT 'new',
    ip_address TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);

DROP TRIGGER IF EXISTS trg_leads_updated_at ON public.leads;
CREATE TRIGGER trg_leads_updated_at
    BEFORE UPDATE ON public.leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ====================================================================
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- Strict Data Isolation: Clients see ONLY their own projects and data.
-- ====================================================================

-- Helper Function: Check if current authenticated user is an Admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 4.1. PROFILES POLICIES
-- Users can view their own profile; Admins can view all profiles
CREATE POLICY "Profiles viewable by self or admin"
    ON public.profiles
    FOR SELECT
    USING (auth.uid() = id OR public.is_admin());

-- Users can update their own profile; Admins can update any profile
CREATE POLICY "Profiles editable by self or admin"
    ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id OR public.is_admin());

-- 4.2. PROJECTS POLICIES
-- Clients can ONLY view projects assigned to their client_id
CREATE POLICY "Clients can view only own projects"
    ON public.projects
    FOR SELECT
    USING (client_id = auth.uid() OR public.is_admin());

-- Only Admins can insert, update, or delete projects
CREATE POLICY "Admins have full write access to projects"
    ON public.projects
    FOR ALL
    USING (public.is_admin());

-- 4.3. PROJECT MILESTONES POLICIES
-- Clients can view milestones of their own projects
CREATE POLICY "Clients can view milestones of own projects"
    ON public.project_milestones
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.projects
            WHERE projects.id = project_milestones.project_id
            AND (projects.client_id = auth.uid() OR public.is_admin())
        )
    );

-- Only Admins can insert, update, delete milestones
CREATE POLICY "Admins have full write access to milestones"
    ON public.project_milestones
    FOR ALL
    USING (public.is_admin());

-- 4.4. LEADS POLICIES
-- Public (anonymous or authenticated) can submit new leads
CREATE POLICY "Anyone can insert leads"
    ON public.leads
    FOR INSERT
    WITH CHECK (true);

-- Only Admins can view and manage leads
CREATE POLICY "Only admins can view leads"
    ON public.leads
    FOR SELECT
    USING (public.is_admin());

CREATE POLICY "Only admins can update leads"
    ON public.leads
    FOR UPDATE
    USING (public.is_admin());

-- ====================================================================
-- 5. AUTOMATIC PROFILE CREATION TRIGGER (Supabase Auth Hook)
-- Automatically inserts a record into public.profiles on user signup
-- ====================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', 'Client Member'),
        COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'client'::user_role)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
`;

export const NEXTJS_FOLDER_TREE = `satupintu.id/
├── app/
│   ├── (public)/                      # Area Publik (Company Profile & Lead Generation)
│   │   ├── layout.tsx                 # Header, Navbar & Footer Publik
│   │   ├── page.tsx                   # Landing Page Utama (Hero, Solusi 4 Pilar, Demo, Leads Form)
│   │   ├── solusi/
│   │   │   ├── marketing/page.tsx     # Deep Dive Modul Marketing & Sales CRM
│   │   │   ├── keuangan/page.tsx      # Deep Dive Modul Keuangan & Akuntansi
│   │   │   ├── produksi/page.tsx      # Deep Dive Modul Produksi & SPK
│   │   │   └── sdm/page.tsx           # Deep Dive Modul SDM & Payroll
│   │   ├── studi-kasus/page.tsx       # Portfolio Implementasi Klien ERP
│   │   ├── tentang-kami/page.tsx      # Profil Software House & Standar Rekayasa
│   │   └── kontak/page.tsx            # Form Request Demo & Konsultasi Arsitektur
│   │
│   ├── (auth)/                        # Area Autentikasi Klien & Admin
│   │   ├── layout.tsx                 # Minimalist Auth Layout (Security First)
│   │   ├── login/page.tsx             # Login Client Portal (Magic Link / Password)
│   │   ├── forgot-password/page.tsx   # Reset Password Client
│   │   └── callback/route.ts          # Supabase Auth Exchange Token Handler
│   │
│   ├── (portal)/                      # Area Private: Client Portal (Dashboard Proyek)
│   │   ├── layout.tsx                 # Client Sidebar, Project Selector & Header
│   │   ├── dashboard/page.tsx         # Ringkasan Progres Proyek, Status Modul & Timeline
│   │   ├── milestones/page.tsx        # Detail Sprint, Deliverables & UAT Sign-off
│   │   ├── staging-preview/page.tsx   # Akses Langsung Server Staging / Test Flight
│   │   ├── dokumen-kontrak/page.tsx   # BRD, Schema DB, Invoice & User Manual Vault
│   │   ├── support-tiket/page.tsx     # Direct Communication ke Lead Software Architect
│   │   └── settings/page.tsx          # Konfigurasi Profil & Manajemen Tim Klien
│   │
│   ├── api/                           # Route Handlers / Backend Endpoints
│   │   ├── leads/route.ts             # POST: Validasi & Simpan Request Demo ke Supabase
│   │   ├── projects/route.ts          # GET: Fetch Data Proyek Berdasarkan Session User
│   │   └── webhooks/whatsapp/route.ts # Notifikasi Instant Update Progres ke WhatsApp Klien
│   │
│   ├── favicon.ico
│   ├── globals.css                    # Tailwind CSS Directives & Custom Fonts
│   └── layout.tsx                     # Root HTML & Metadata SEO Config
│
├── components/
│   ├── layout/
│   │   ├── navbar.tsx                 # Sticky Glassmorphism Navigation Bar
│   │   ├── footer.tsx                 # Enterprise Footer & Company Credentials
│   │   └── portal-sidebar.tsx         # Sidebar Navigasi Khusus Client Dashboard
│   ├── sections/
│   │   ├── hero-section.tsx           # Headline Persuasif & Real-time Live Control Preview
│   │   ├── solutions-grid.tsx         # 4 Pilar Solusi (Marketing, Keuangan, Produksi, SDM)
│   │   ├── client-portal-preview.tsx  # Showcase Transparansi Pengerjaan Proyek Klien
│   │   ├── methodology-timeline.tsx   # 6 Tahap Rekayasa Software House
│   │   └── leads-capture-form.tsx     # Form Permintaan Demo & Konsultasi Sistem
│   └── ui/                            # Shadcn UI Design System
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       └── tabs.tsx
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts                  # Browser Client (createBrowserClient)
│   │   ├── server.ts                  # Server Client (createServerClient dengan Cookies)
│   │   └── middleware.ts              # Route Guard Session & RLS Protected Routes
│   ├── utils.ts                       # Helper Format Rupiah, Tanggal, & Classnames
│   └── validations/
│       └── lead-schema.ts             # Zod Validation Schema untuk Form Leads
│
├── types/
│   ├── database.types.ts              # Auto-generated Supabase TypeScript Definitions
│   └── index.ts                       # Domain Interfaces (Project, Milestone, ERPModule)
│
├── public/
│   ├── brand/                         # Logo satupintu.id SVG & Vector Icons
│   └── og-image.png                   # Social Media Open Graph Banner
│
├── supabase/
│   ├── migrations/
│   │   └── 20260830_initial_schema.sql # Skema Lengkap Tables, RLS, Indexes & Triggers
│   └── seed.sql                       # Sample Demo Data untuk Staging & Local Testing
│
├── .env.example                       # NEXT_PUBLIC_SUPABASE_URL & ANON_KEY
├── next.config.mjs                    # Next.js Build & Optimization Config
├── package.json                       # Dependencies & Scripts
├── tailwind.config.ts                 # Tailwind Theme Colors & Font Variables
└── tsconfig.json                      # Strict TypeScript Configuration`;
