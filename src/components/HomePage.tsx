import React from 'react';
import {
  TrendingUp,
  Target,
  Settings,
  Users,
  Check,
  Building2,
  Building,
  Store,
  Compass,
  ArrowRight,
  LogIn,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  PieChart as PieIcon,
  BarChart3,
  Calendar,
  Layers,
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { ERPModuleKey } from '../types';

interface HomePageProps {
  onOpenLogin: () => void;
  onOpenSchema?: () => void;
  onScrollToDemo: () => void;
  onSelectModule: (moduleKey: ERPModuleKey) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenLogin,
  onOpenSchema,
  onScrollToDemo,
  onSelectModule,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* ========================================================= */}
      {/* 1. HEADER / NAVBAR (Pixel-Perfect Nav)                    */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-1 text-2xl font-extrabold tracking-tight text-slate-900">
              <span>satupintu</span>
              <span className="text-[#1B6EF3]">.id</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#beranda" className="text-slate-900 font-semibold hover:text-[#1B6EF3] transition-colors">
              Beranda
            </a>
            <a href="#layanan" className="hover:text-[#1B6EF3] transition-colors">
              Layanan
            </a>
            <a href="#fitur" className="hover:text-[#1B6EF3] transition-colors">
              Fitur
            </a>
            <a href="#keunggulan" className="hover:text-[#1B6EF3] transition-colors">
              Keunggulan
            </a>
            <a href="#tentang-kami" className="hover:text-[#1B6EF3] transition-colors">
              Tentang Kami
            </a>
            <a href="#kontak" className="hover:text-[#1B6EF3] transition-colors">
              Kontak
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="btn-login-header"
              onClick={onOpenLogin}
              className="px-6 py-2.5 rounded-lg bg-[#1B6EF3] hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all active:scale-95"
            >
              Login Klien
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
              <a
                href="#beranda"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-slate-900 font-semibold"
              >
                Beranda
              </a>
              <a
                href="#layanan"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#1B6EF3]"
              >
                Layanan
              </a>
              <a
                href="#fitur"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#1B6EF3]"
              >
                Fitur
              </a>
              <a
                href="#keunggulan"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#1B6EF3]"
              >
                Keunggulan
              </a>
              <a
                href="#tentang-kami"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#1B6EF3]"
              >
                Tentang Kami
              </a>
              <a
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#1B6EF3]"
              >
                Kontak
              </a>
            </nav>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-3 rounded-lg bg-[#1B6EF3] text-white text-sm font-semibold text-center shadow-sm"
              >
                Login Klien
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. HERO SECTION (High Precision 2-Column with Laptop Mockup)*/}
      {/* ========================================================= */}
      <section id="beranda" className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        
        {/* Subtle Background Dot Patterns */}
        <div className="absolute top-10 right-10 w-64 h-64 opacity-25 pointer-events-none bg-[radial-gradient(#1B6EF3_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
        <div className="absolute bottom-10 left-10 w-72 h-72 opacity-20 pointer-events-none bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Manajemen Bisnis Terintegrasi dalam Satu Pintu Gerbang
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                satupintu.id adalah solusi software manajemen bisnis terintegrasi untuk mengelola seluruh aspek perusahaan Anda dalam satu platform.
              </p>

              {/* 2 Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="btn-hero-layanan"
                  onClick={() => {
                    const el = document.getElementById('layanan');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 rounded-lg bg-[#1B6EF3] hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-500/20 transition-all active:scale-95"
                >
                  Jelajahi Layanan
                </button>

                <button
                  id="btn-hero-login"
                  onClick={onOpenLogin}
                  className="px-6 py-3.5 rounded-lg bg-white border border-blue-200 hover:border-[#1B6EF3] text-[#1B6EF3] hover:bg-blue-50/50 font-semibold text-sm sm:text-base shadow-sm transition-all flex items-center gap-2 active:scale-95"
                >
                  <LogIn className="w-4 h-4 text-[#1B6EF3]" />
                  <span>Login Klien</span>
                </button>
              </div>
            </div>

            {/* Right Column: High-Fidelity Laptop Mockup */}
            <div className="lg:col-span-7 relative">
              
              {/* Laptop Shell Container */}
              <div className="relative mx-auto max-w-[620px] bg-slate-800 rounded-t-[20px] p-2.5 shadow-2xl border-4 border-slate-700">
                
                {/* Laptop Camera dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-600 mx-auto mb-2" />

                {/* Laptop Screen Content (ERP Dashboard) */}
                <div className="bg-[#F8FAFC] rounded-lg overflow-hidden border border-slate-200 text-slate-800 text-xs shadow-inner select-none">
                  
                  {/* Dashboard Header Bar */}
                  <div className="bg-white px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-slate-900">
                        satupintu<span className="text-[#1B6EF3]">.id</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-right">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[10px] text-slate-600">
                        PS
                      </div>
                      <div>
                        <div className="font-bold text-[11px] text-slate-800 leading-tight">PT. Sukses Bersama</div>
                        <div className="text-[9px] text-slate-500">Admin</div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Layout: Sidebar + Main Content */}
                  <div className="grid grid-cols-12 min-h-[340px]">
                    
                    {/* Left Sidebar */}
                    <div className="col-span-3 bg-white border-r border-slate-200 p-2.5 space-y-1 text-[11px]">
                      <div className="px-2.5 py-1.5 rounded-md bg-[#1B6EF3]/10 text-[#1B6EF3] font-bold flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Dashboard</span>
                      </div>
                      <div className="px-2.5 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 font-medium flex items-center gap-2">
                        <Target className="w-3.5 h-3.5 text-blue-500" />
                        <span>Marketing</span>
                      </div>
                      <div className="px-2.5 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 font-medium flex items-center gap-2">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Keuangan</span>
                      </div>
                      <div className="px-2.5 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 font-medium flex items-center gap-2">
                        <Settings className="w-3.5 h-3.5 text-amber-500" />
                        <span>Produksi</span>
                      </div>
                      <div className="px-2.5 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 font-medium flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-purple-500" />
                        <span>SDM</span>
                      </div>
                      <div className="px-2.5 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 font-medium flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>Laporan</span>
                      </div>
                      <div className="px-2.5 py-1.5 rounded-md text-slate-600 hover:bg-slate-50 font-medium flex items-center gap-2">
                        <Settings className="w-3.5 h-3.5 text-slate-400" />
                        <span>Pengaturan</span>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="col-span-9 p-3.5 space-y-3 bg-[#F8FAFC]">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-xs text-slate-900">Dashboard</h4>
                      </div>

                      {/* 4 Metric Summary Cards */}
                      <div className="grid grid-cols-4 gap-2">
                        
                        <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                          <div className="text-[9px] text-slate-500">Total Project</div>
                          <div className="text-sm font-extrabold text-slate-900 mt-0.5">24</div>
                        </div>

                        <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                          <div className="text-[9px] text-slate-500">Total Task</div>
                          <div className="text-sm font-extrabold text-slate-900 mt-0.5">120</div>
                        </div>

                        <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                          <div className="text-[9px] text-amber-500 font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            Anggaran
                          </div>
                          <div className="text-[11px] font-bold text-slate-900 mt-0.5">
                            Rp 250.000.000
                          </div>
                        </div>

                        <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                          <div className="text-[9px] text-emerald-600 font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Progress
                          </div>
                          <div className="text-sm font-extrabold text-emerald-600 mt-0.5">75%</div>
                        </div>

                      </div>

                      {/* Middle Widgets: Line Chart + Aktivitas Terbaru */}
                      <div className="grid grid-cols-12 gap-2">
                        
                        {/* Progress Project Line Chart */}
                        <div className="col-span-7 bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
                          <div className="text-[10px] font-bold text-slate-800 mb-2">Progress Project</div>
                          
                          {/* SVG Line Graph */}
                          <div className="h-28 w-full relative flex items-end">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 200 80">
                              <line x1="0" y1="20" x2="200" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                              <line x1="0" y1="40" x2="200" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                              <line x1="0" y1="60" x2="200" y2="60" stroke="#f1f5f9" strokeWidth="1" />
                              
                              {/* Blue trend line */}
                              <polyline
                                fill="none"
                                stroke="#1B6EF3"
                                strokeWidth="2.5"
                                points="10,65 40,55 70,60 100,45 130,30 160,35 190,15"
                              />
                              {/* Circle points */}
                              <circle cx="10" cy="65" r="3" fill="#1B6EF3" />
                              <circle cx="40" cy="55" r="3" fill="#1B6EF3" />
                              <circle cx="70" cy="60" r="3" fill="#1B6EF3" />
                              <circle cx="100" cy="45" r="3" fill="#1B6EF3" />
                              <circle cx="130" cy="30" r="3" fill="#1B6EF3" />
                              <circle cx="160" cy="35" r="3" fill="#1B6EF3" />
                              <circle cx="190" cy="15" r="3" fill="#1B6EF3" />
                            </svg>
                          </div>
                          
                          <div className="flex justify-between text-[8px] text-slate-400 mt-1">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>Mei</span>
                            <span>Jun</span>
                          </div>
                        </div>

                        {/* Aktivitas Terbaru */}
                        <div className="col-span-5 bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm space-y-1.5">
                          <div className="text-[10px] font-bold text-slate-800">Aktivitas Terbaru</div>
                          
                          <div className="space-y-1.5 text-[9px]">
                            <div className="flex items-start justify-between border-b border-slate-50 pb-1">
                              <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                <div>
                                  <div className="font-bold text-slate-800">Meeting Project</div>
                                  <div className="text-slate-400 text-[8px]">Marketing Campaign</div>
                                </div>
                              </div>
                              <span className="text-slate-400 text-[8px]">2 jam lalu</span>
                            </div>

                            <div className="flex items-start justify-between border-b border-slate-50 pb-1">
                              <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <div>
                                  <div className="font-bold text-slate-800">Pembayaran Invoice</div>
                                  <div className="text-slate-400 text-[8px]">INV-2024-001</div>
                                </div>
                              </div>
                              <span className="text-slate-400 text-[8px]">5 jam lalu</span>
                            </div>

                            <div className="flex items-start justify-between border-b border-slate-50 pb-1">
                              <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                <div>
                                  <div className="font-bold text-slate-800">Update Produksi</div>
                                  <div className="text-slate-400 text-[8px]">Project Website</div>
                                </div>
                              </div>
                              <span className="text-slate-400 text-[8px]">1 hari lalu</span>
                            </div>

                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                                <div>
                                  <div className="font-bold text-slate-800">Penambahan Karyawan</div>
                                  <div className="text-slate-400 text-[8px]">Tim Developer</div>
                                </div>
                              </div>
                              <span className="text-slate-400 text-[8px]">2 hari lalu</span>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Laptop Base Bottom Lip */}
              <div className="mx-auto max-w-[690px] h-3.5 bg-slate-700 rounded-b-[14px] shadow-2xl relative flex items-center justify-center">
                <div className="w-16 h-1 bg-slate-500 rounded-full" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CLIENT LOGOS SECTION                                   */}
      {/* ========================================================= */}
      <section className="py-10 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-500 mb-8">
            Dipercaya oleh berbagai perusahaan
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-65 grayscale hover:grayscale-0 transition-all">
            
            {/* Logo 1 */}
            <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm tracking-wider">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="9" fill="#64748b" />
                <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>LOGOIPSUM</span>
            </div>

            {/* Logo 2 */}
            <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm tracking-wider">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <rect x="5" y="5" width="14" height="14" rx="4" fill="#64748b" />
                <circle cx="12" cy="12" r="3" fill="white" />
              </svg>
              <span>logoipsum<sup className="text-[8px] font-normal">&reg;</sup></span>
            </div>

            {/* Logo 3 */}
            <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm tracking-wider">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" fill="#64748b" />
              </svg>
              <span>LOGOIPSUM</span>
            </div>

            {/* Logo 4 */}
            <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm tracking-wider">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#64748b" strokeWidth="2" fill="none" />
              </svg>
              <span>logo-ipsum</span>
            </div>

            {/* Logo 5 */}
            <div className="col-span-2 md:col-span-1 flex items-center gap-2 text-slate-800 font-extrabold text-sm tracking-wider">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" stroke="#64748b" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="5" fill="#64748b" />
              </svg>
              <span>LOGOIPSUM</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. LAYANAN SECTION (4 Cards Grid with Colored Icons)       */}
      {/* ========================================================= */}
      <section id="layanan" className="py-20 lg:py-28 bg-[#FAFCFF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1B6EF3] mb-2.5">
              SEMUA DALAM SATU PLATFORM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kelola Semua Divisi dalam Satu Platform
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              satupintu.id mengintegrasikan seluruh divisi bisnis Anda untuk efisiensi dan produktivitas yang lebih baik.
            </p>
          </div>

          {/* 4 Clean Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Marketing (Blue) */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#1B6EF3] text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Divisi Marketing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kelola kampanye, leads, customer, dan analitik marketing dalam satu dashboard terintegrasi.
                </p>
              </div>

              <button
                onClick={() => onSelectModule('marketing')}
                className="mt-6 text-[#1B6EF3] hover:text-blue-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all"
              >
                <span>Selengkapnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Keuangan (Green) */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#059669] text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Divisi Keuangan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kelola arus kas, invoice, laporan keuangan, dan anggaran dengan mudah dan akurat.
                </p>
              </div>

              <button
                onClick={() => onSelectModule('finance')}
                className="mt-6 text-[#1B6EF3] hover:text-blue-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all"
              >
                <span>Selengkapnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Produksi (Orange) */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#EA580C] text-white flex items-center justify-center mb-6 shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                  <Settings className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Divisi Produksi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pantau produksi, kelola inventori, quality control, dan jadwal produksi secara real-time.
                </p>
              </div>

              <button
                onClick={() => onSelectModule('production')}
                className="mt-6 text-[#1B6EF3] hover:text-blue-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all"
              >
                <span>Selengkapnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 4: SDM (Purple) */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#7C3AED] text-white flex items-center justify-center mb-6 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Divisi SDM
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kelola data karyawan, absensi, penggajian, dan performa tim dalam satu sistem.
                </p>
              </div>

              <button
                onClick={() => onSelectModule('hr')}
                className="mt-6 text-[#1B6EF3] hover:text-blue-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all"
              >
                <span>Selengkapnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. KEUNGGULAN SECTION (Checklist + Laptop & Phone Mockup)  */}
      {/* ========================================================= */}
      <section id="keunggulan" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        
        {/* Subtle Background Dot Patterns */}
        <div className="absolute right-10 top-1/3 w-64 h-64 opacity-20 pointer-events-none bg-[radial-gradient(#1B6EF3_1.5px,transparent_1.5px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: 5 Key Points List */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1B6EF3] mb-2.5">
                  KENAPA MEMILIH SATUPINTU.ID?
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Satu Platform, Semua Kendali di Tangan Anda
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                
                {/* Point 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#1B6EF3] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      Terintegrasi Penuh
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Semua data dan proses bisnis terhubung dalam satu sistem
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#1B6EF3] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      Mudah Digunakan
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Interface yang intuitif dan mudah dipelajari oleh semua tim
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#1B6EF3] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      Keamanan Terjamin
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Data perusahaan Anda aman dengan sistem keamanan berlapis
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#1B6EF3] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      Akses Real-time
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Pantau bisnis Anda kapan saja, di mana saja
                    </p>
                  </div>
                </div>

                {/* Point 5 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#1B6EF3] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      Support Profesional
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Tim support kami siap membantu kesuksesan implementasi
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Perspective Laptop + Smartphone Mockup */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              
              {/* Laptop Mockup */}
              <div className="relative w-full max-w-[540px] bg-slate-800 rounded-t-[18px] p-2 shadow-2xl border-4 border-slate-700 z-10">
                <div className="w-2 h-2 rounded-full bg-slate-900 mx-auto mb-1.5" />
                
                <div className="bg-[#F8FAFC] rounded-lg overflow-hidden border border-slate-200 p-3 min-h-[290px] text-xs">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                    <span className="font-extrabold text-[11px] text-slate-900">satupintu<span className="text-[#1B6EF3]">.id</span></span>
                    <span className="text-[9px] text-slate-500">PT. Sukses Bersama</span>
                  </div>

                  <div className="grid grid-cols-12 gap-2.5">
                    
                    {/* Donut Chart Widget */}
                    <div className="col-span-6 bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex flex-col items-center">
                      <div className="text-[10px] font-bold text-slate-800 mb-2">Alokasi Anggaran</div>
                      
                      {/* CSS Donut Chart */}
                      <div className="w-20 h-20 rounded-full border-8 border-t-[#1B6EF3] border-r-[#059669] border-b-[#EA580C] border-l-[#7C3AED] flex items-center justify-center my-1">
                        <span className="text-[10px] font-extrabold text-slate-800">100%</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[8px] text-slate-500 mt-1">
                        <span className="text-[#1B6EF3]">● Mkt: 35%</span>
                        <span className="text-[#059669]">● Keu: 25%</span>
                        <span className="text-[#EA580C]">● Prod: 20%</span>
                        <span className="text-[#7C3AED]">● SDM: 20%</span>
                      </div>
                    </div>

                    {/* Bar Chart Widget */}
                    <div className="col-span-6 bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex flex-col justify-between">
                      <div className="text-[10px] font-bold text-slate-800">Aktivitas Bulanan</div>
                      
                      {/* Bar graph */}
                      <div className="flex items-end justify-between h-24 pt-2 px-1">
                        <div className="w-3 bg-blue-200 rounded-t h-[40%]" />
                        <div className="w-3 bg-blue-300 rounded-t h-[65%]" />
                        <div className="w-3 bg-[#1B6EF3] rounded-t h-[85%]" />
                        <div className="w-3 bg-blue-400 rounded-t h-[70%]" />
                        <div className="w-3 bg-emerald-500 rounded-t h-[95%]" />
                      </div>

                      <div className="flex justify-between text-[8px] text-slate-400">
                        <span>P1</span>
                        <span>P2</span>
                        <span>P3</span>
                        <span>P4</span>
                        <span>P5</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Laptop Base */}
                <div className="h-3 bg-slate-700 rounded-b-[12px] -mx-2 -mb-2 mt-1 flex items-center justify-center">
                  <div className="w-14 h-1 bg-slate-500 rounded-full" />
                </div>
              </div>

              {/* Smartphone Mockup positioned in front on the right */}
              <div className="absolute right-0 -bottom-6 w-[160px] sm:w-[190px] bg-slate-900 rounded-[28px] p-2 border-4 border-slate-700 shadow-2xl z-20">
                {/* Phone Speaker Notch */}
                <div className="w-12 h-2.5 bg-slate-800 rounded-full mx-auto mb-1.5" />
                
                {/* Phone Screen */}
                <div className="bg-white rounded-[20px] p-2.5 space-y-2 text-slate-800 text-[9px] shadow-inner">
                  <div className="flex items-center justify-between font-bold text-[10px] pb-1 border-b border-slate-100">
                    <span>satupintu.id</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>

                  <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-100">
                    <div className="text-[8px] text-slate-500">Omzet Bulan Ini</div>
                    <div className="font-extrabold text-[11px] text-[#1B6EF3]">Rp 450.000.000</div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                    <div className="font-bold text-[8px] text-slate-700">Quick Actions</div>
                    <div className="grid grid-cols-2 gap-1 text-[7px] text-center">
                      <div className="p-1 rounded bg-white border border-slate-100 font-semibold">Approval</div>
                      <div className="p-1 rounded bg-white border border-slate-100 font-semibold">Invoice</div>
                    </div>
                  </div>

                  <div className="text-[7px] text-center text-slate-400">Mobile Real-Time Sync</div>
                </div>
                
                {/* Home Indicator bar */}
                <div className="w-10 h-1 bg-slate-600 rounded-full mx-auto mt-1.5" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SOLUSI BISNIS SECTION (4 Horizontal Pill/Cards)         */}
      {/* ========================================================= */}
      <section id="fitur" className="py-20 lg:py-24 bg-[#FAFCFF] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1B6EF3] mb-2.5">
              UNTUK SIAPA SATUPINTU.ID?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solusi untuk Berbagai Jenis Bisnis
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              satupintu.id dirancang untuk membantu berbagai jenis dan skala bisnis mengelola operasional mereka dengan lebih efisien.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Startup & SME */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all text-left">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1B6EF3] flex items-center justify-center mb-4">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Startup & SME
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kelola bisnis berkembang dengan sistem yang scalable
              </p>
            </div>

            {/* Card 2: Perusahaan Menengah */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all text-left">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1B6EF3] flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Perusahaan Menengah
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tingkatkan efisiensi dan kontrol operasional
              </p>
            </div>

            {/* Card 3: Enterprise */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all text-left">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1B6EF3] flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Enterprise
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Solusi enterprise untuk kebutuhan kompleks
              </p>
            </div>

            {/* Card 4: Berbagai Industri */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all text-left">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1B6EF3] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Berbagai Industri
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fleksibel untuk berbagai sektor industri
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. CTA SECTION (Large Blue Banner with 2 Buttons)         */}
      {/* ========================================================= */}
      <section id="tentang-kami" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-[#1B6EF3] p-8 sm:p-12 lg:p-14 shadow-2xl shadow-blue-500/25 flex flex-col lg:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
            
            {/* Background Decorative Rings */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute left-1/2 top-0 w-96 h-96 rounded-full bg-white/5 pointer-events-none blur-2xl" />

            {/* Left Content */}
            <div className="space-y-3 max-w-2xl relative z-10 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Siap Mengelola Bisnis Anda dengan Lebih Baik?
              </h2>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Bergabunglah dengan ratusan perusahaan yang telah mempercayakan manajemen bisnis mereka kepada satupintu.id
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0 relative z-10">
              <button
                id="btn-cta-consult"
                onClick={onScrollToDemo}
                className="px-6 sm:px-7 py-3.5 rounded-lg bg-white text-[#1B6EF3] hover:bg-blue-50 font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95 whitespace-nowrap"
              >
                Mulai Konsultasi Gratis
              </button>

              <button
                id="btn-cta-login"
                onClick={onOpenLogin}
                className="px-6 sm:px-7 py-3.5 rounded-lg bg-transparent border border-white/80 hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-all active:scale-95 whitespace-nowrap"
              >
                Login Klien
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. FOOTER (Dark Navy / Charcoal Background & Links)       */}
      {/* ========================================================= */}
      <footer id="kontak" className="bg-[#0D131F] text-slate-400 text-sm pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800">
            
            {/* Col 1 & 2: Brand, Desc & Socials */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="flex items-center gap-1 text-2xl font-extrabold tracking-tight text-white">
                <span>satupintu</span>
                <span className="text-[#1B6EF3]">.id</span>
              </a>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Software manajemen bisnis terintegrasi yang membantu Anda mengelola semua aspek bisnis dalam satu platform.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1B6EF3] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1B6EF3] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1B6EF3] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1B6EF3] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 3: Layanan */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wide">
                Layanan
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => onSelectModule('marketing')} className="hover:text-white transition-colors text-left">
                    Divisi Marketing
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectModule('finance')} className="hover:text-white transition-colors text-left">
                    Divisi Keuangan
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectModule('production')} className="hover:text-white transition-colors text-left">
                    Divisi Produksi
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectModule('hr')} className="hover:text-white transition-colors text-left">
                    Divisi SDM
                  </button>
                </li>
                <li>
                  <a href="#fitur" className="hover:text-white transition-colors">
                    Integrasi Sistem
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Perusahaan */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wide">
                Perusahaan
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#tentang-kami" className="hover:text-white transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#karir" className="hover:text-white transition-colors">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#partner" className="hover:text-white transition-colors">
                    Partner
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="hover:text-white transition-colors">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Support */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wide">
                Support
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#support" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <button onClick={onOpenSchema} className="hover:text-white transition-colors text-left">
                    Dokumentasi
                  </button>
                </li>
                <li>
                  <a href="#video-tutorial" className="hover:text-white transition-colors">
                    Video Tutorial
                  </a>
                </li>
                <li>
                  <a href="#syarat" className="hover:text-white transition-colors">
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <a href="#kebijakan-privasi" className="hover:text-white transition-colors">
                    Kebijakan Privasi
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 6: Hubungi Kami */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wide">
                Hubungi Kami
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1B6EF3] shrink-0" />
                  <span>info@satupintu.id</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1B6EF3] shrink-0" />
                  <span>+62 21 1234 5678</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1B6EF3] shrink-0 mt-0.5" />
                  <span>Jakarta, Indonesia</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Bottom */}
          <div className="pt-8 text-center text-xs text-slate-500">
            &copy; 2024 satupintu.id. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
};
