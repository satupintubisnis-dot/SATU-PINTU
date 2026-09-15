import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  LayoutDashboard, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Factory, 
  Users, 
  Lock,
  ChevronRight,
  Activity,
  Code2,
  Terminal,
  Server,
  Zap
} from 'lucide-react';
import { ERP_MODULES } from '../../data/mockData';
import { ERPModuleKey } from '../../types';

interface HeroSectionProps {
  onOpenLogin: () => void;
  onOpenSchema: () => void;
  onScrollToDemo: () => void;
  onSelectModule: (key: ERPModuleKey) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenLogin,
  onOpenSchema,
  onScrollToDemo,
  onSelectModule,
}) => {
  const [activeTab, setActiveTab] = useState<ERPModuleKey>('finance');
  const [schemaTab, setSchemaTab] = useState<'tree' | 'sql'>('tree');

  const currentModule = ERP_MODULES.find((m) => m.key === activeTab) || ERP_MODULES[0];

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0A0A0B]">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Bento Grid Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Bento Tile 1: Massive Headline & CTA (Span 7) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-blue-900/20 via-[#141417] to-[#141417]/80 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            {/* Background SVG Watermark */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-white transition-opacity group-hover:opacity-15">
              <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>

            <div>
              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>Bespoke ERP Software House</span>
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                <span className="text-blue-300">Indonesia</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Custom ERP <br />
                <span className="text-blue-500">Satu Pintu</span> Kontrol.
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                Integrasi divisi Marketing, Keuangan, Produksi, dan SDM dalam satu ekosistem software house premium dengan kepemilikan source code 100%.
              </p>
            </div>

            <div>
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <button
                  id="hero-btn-request-demo"
                  onClick={onScrollToDemo}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  id="hero-btn-open-portal"
                  onClick={onOpenLogin}
                  className="px-8 py-4 border border-white/20 rounded-2xl font-bold text-base sm:text-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-2"
                >
                  <LayoutDashboard className="w-5 h-5 text-blue-400" />
                  <span>Client Portal</span>
                </button>
              </div>

              {/* Value Guarantees */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  100% Kepemilikan Source Code
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Sesuai SOP Perusahaan
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Pantau via Client Portal
                </span>
              </div>
            </div>

          </div>

          {/* Bento Tile 2: Live Architecture & SQL Schema Terminal (Span 5) */}
          <div className="lg:col-span-5 bg-[#141417] border border-white/10 rounded-3xl p-6 font-mono text-xs overflow-hidden flex flex-col justify-between shadow-2xl">
            
            {/* Terminal Header with macOS dots */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-gray-500 uppercase tracking-widest text-[10px] font-bold">
                    Architecture / Schema v1.0
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-[#0A0A0B] p-1 rounded-lg border border-white/10 text-[10px]">
                  <button
                    onClick={() => setSchemaTab('tree')}
                    className={`px-2 py-0.5 rounded font-semibold transition-colors ${
                      schemaTab === 'tree' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Next.js
                  </button>
                  <button
                    onClick={() => setSchemaTab('sql')}
                    className={`px-2 py-0.5 rounded font-semibold transition-colors ${
                      schemaTab === 'sql' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    PostgreSQL
                  </button>
                </div>
              </div>

              {/* Code display */}
              <div className="p-3.5 rounded-2xl bg-[#0A0A0B] border border-white/5 text-[11px] leading-relaxed overflow-x-auto select-text max-h-[260px]">
                {schemaTab === 'tree' ? (
                  <div>
                    <div className="text-blue-400 mb-2">// Next.js App Router Structure</div>
                    <div className="pl-2 text-gray-400 space-y-0.5">
                      <div>app/</div>
                      <div className="pl-4 text-emerald-400">├── (public)/ <span className="text-gray-500 text-[10px]"># Landing & Leads</span></div>
                      <div className="pl-8 text-blue-300">├── page.tsx</div>
                      <div className="pl-4 text-purple-400">├── (portal)/ <span className="text-gray-500 text-[10px]"># Client Area (RLS)</span></div>
                      <div className="pl-8 text-blue-300">├── dashboard/page.tsx</div>
                      <div className="pl-8 text-blue-300">├── milestones/page.tsx</div>
                      <div className="pl-4 text-amber-400">├── api/leads/route.ts</div>
                      <div>components/ui/ & lib/supabase.ts</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-emerald-400 mb-2">-- Supabase SQL DDL & Strict RLS</div>
                    <div className="pl-2 text-gray-400 space-y-0.5">
                      <div><span className="text-blue-400">CREATE TABLE</span> <span className="text-yellow-300">public.projects</span> (</div>
                      <div className="pl-4">id <span className="text-cyan-300">UUID PRIMARY KEY</span>,</div>
                      <div className="pl-4">client_id <span className="text-cyan-300">UUID REFERENCES profiles</span>,</div>
                      <div className="pl-4">progress <span className="text-cyan-300">INT CHECK</span> (0..100)</div>
                      <div>);</div>
                      <div className="text-emerald-400 mt-2"><span className="text-blue-400">ALTER TABLE</span> projects <span className="text-blue-400">ENABLE ROW LEVEL SECURITY</span>;</div>
                      <div className="text-gray-500 mt-1">-- Policy: Client sees only own project</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick action button to trigger modal */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-gray-500">
                PostgreSQL • Next.js • Supabase
              </span>
              <button
                onClick={onOpenSchema}
                className="flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Lihat Skema Lengkap</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Bento Grid Row 2: 4 Core Modules & Quick CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          
          {/* Bento Tile 3: Marketing */}
          <div 
            onClick={() => onSelectModule('marketing')}
            className="bg-[#141417] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/40 hover:bg-[#1a1a1f] transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Modul 01
              </span>
            </div>
            <div className="mt-4">
              <div className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                Marketing & CRM
              </div>
              <div className="text-sm text-gray-400 leading-tight mt-1">
                Leads Automation, Pipeline & Sales Commission
              </div>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-purple-300 font-semibold">
                <span>Rp 4.28 M Pipeline</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Bento Tile 4: Finance */}
          <div 
            onClick={() => onSelectModule('finance')}
            className="bg-[#141417] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-green-500/40 hover:bg-[#1a1a1f] transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Modul 02
              </span>
            </div>
            <div className="mt-4">
              <div className="font-bold text-lg text-white group-hover:text-green-300 transition-colors">
                Keuangan & Akuntansi
              </div>
              <div className="text-sm text-gray-400 leading-tight mt-1">
                Real-time P&L, Cashflow & Rekonsiliasi Bank
              </div>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-green-300 font-semibold">
                <span>99.9% Akurasi Neraca</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Bento Tile 5: Production */}
          <div 
            onClick={() => onSelectModule('production')}
            className="bg-[#141417] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-orange-500/40 hover:bg-[#1a1a1f] transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Factory className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Modul 03
              </span>
            </div>
            <div className="mt-4">
              <div className="font-bold text-lg text-white group-hover:text-orange-300 transition-colors">
                Produksi & SPK
              </div>
              <div className="text-sm text-gray-400 leading-tight mt-1">
                Bill of Materials, Multi-Warehouse & Quality Control
              </div>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-orange-300 font-semibold">
                <span>-22.5% Waste Reduksi</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Bento Tile 6: Ready to Start / Hubungi Arsitek */}
          <div 
            onClick={onScrollToDemo}
            className="bg-blue-600 hover:bg-blue-500 transition-all rounded-3xl p-6 flex flex-col justify-between text-white shadow-lg shadow-blue-600/20 cursor-pointer group"
          >
            <div className="text-xs font-bold uppercase tracking-widest opacity-80">
              Ready to start?
            </div>
            <div>
              <div className="text-xl font-bold mb-2 leading-tight">
                Hubungi Arsitek Kami
              </div>
              <p className="text-xs text-blue-100/90 leading-relaxed mb-3">
                Konsultasikan alur kerja dan skema integrasi khusus bisnis Anda.
              </p>
              <div className="w-full h-px bg-white/20 mb-3" />
              <div className="text-xs font-bold flex items-center justify-between">
                <span>Request Prototype</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bento Grid Row 3: Live Executive Control Room Mockup */}
        <div className="mt-4 bg-[#141417] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Mockup Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-white/10 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-300">
                  satupintu.id / Executive Control Room
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE SYNC
                </span>
              </div>
            </div>

            {/* Switcher Tabs with Bento Pill Buttons */}
            <div className="flex items-center bg-[#0A0A0B] p-1 rounded-2xl border border-white/10 text-xs overflow-x-auto">
              {ERP_MODULES.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setActiveTab(m.key)}
                  className={`px-3.5 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === m.key
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {m.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Active Tab Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {currentModule.name}
                </span>
                <span className="text-xs text-gray-400 hidden sm:inline">
                  {currentModule.tagline}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentModule.description}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {currentModule.mockDataSnippet.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-[#0A0A0B] border border-white/5 flex items-center justify-between text-xs"
                  >
                    <span className="text-gray-300">{item.label}</span>
                    <span
                      className={`font-semibold px-2 py-0.5 rounded-lg text-[11px] ${
                        item.status === 'success'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : item.status === 'warning'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0A0A0B] border border-white/10 rounded-2xl p-5 space-y-3">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Spesifikasi Arsitektur Sistem
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <Database className="w-4 h-4 text-blue-400" />
                  <span>PostgreSQL Isolated Database Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Strict Row Level Security (RLS Multi-Tenant)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>Sub-second Query Speed with Redis Cache</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={() => onSelectModule(currentModule.key)}
                  className="w-full py-2.5 px-4 text-center text-xs font-bold text-blue-400 hover:text-white bg-blue-600/10 hover:bg-blue-600 border border-blue-500/30 rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Eksplorasi Modul {currentModule.name.split(' ')[0]}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

