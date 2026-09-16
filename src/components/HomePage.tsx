import React, { useState } from 'react';
import {
  TrendingUp,
  Settings,
  Users,
  Check,
  ArrowRight,
  User,
  Play,
  BarChart3,
  Layers,
  FileText,
  Clock,
  ShieldCheck,
  Menu,
  X,
  Database,
  GitBranch,
  AlertCircle,
  FileSpreadsheet,
  Target,
  Search,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { ERPModuleKey } from '../types';

export interface HomePageProps {
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white flex flex-col">
      {/* ========================================================= */}
      {/* 1. NAVBAR                                                 */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center text-2xl font-extrabold tracking-tight text-slate-900">
            <span>satupintu</span>
            <span className="text-[#1B6EF3]">.id</span>
          </a>

          {/* Desktop Nav Menu */}
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

          {/* Right Login Button */}
          <div className="hidden md:flex items-center">
            <button
              id="btn-nav-login"
              onClick={onOpenLogin}
              className="px-5 py-2.5 rounded-lg bg-[#1B6EF3] hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <User className="w-4 h-4 fill-white/20" />
              <span>Login Klien</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
              <a href="#beranda" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-900 font-semibold">
                Beranda
              </a>
              <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#1B6EF3]">
                Layanan
              </a>
              <a href="#fitur" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#1B6EF3]">
                Fitur
              </a>
              <a href="#keunggulan" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#1B6EF3]">
                Keunggulan
              </a>
              <a href="#tentang-kami" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#1B6EF3]">
                Tentang Kami
              </a>
              <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#1B6EF3]">
                Kontak
              </a>
            </nav>
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-3 rounded-lg bg-[#1B6EF3] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <User className="w-4 h-4" />
                <span>Login Klien</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section id="beranda" className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Badge Pill */}
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#1B6EF3]">
                  SATU SISTEM, SEMUA LEBIH MUDAH
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Bisnis Owner Bahagia Melihat Bisnis Berjalan{' '}
                <span className="text-[#1B6EF3]">Optimal.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Satu pintu Hadir Untuk Optimalisasi Bisnis Jadi Lebih Baik.
              </p>

              {/* 3 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-blue-50/70 border border-blue-100/60">
                  <div className="w-8 h-8 rounded-lg bg-[#1B6EF3] text-white flex items-center justify-center shrink-0">
                    <Settings className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 leading-snug">
                    Terintegrasi Semua Divisi
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-blue-50/70 border border-blue-100/60">
                  <div className="w-8 h-8 rounded-lg bg-[#1B6EF3] text-white flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 leading-snug">
                    Data Real-time dan Akurat
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-blue-50/70 border border-blue-100/60">
                  <div className="w-8 h-8 rounded-lg bg-[#1B6EF3] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 leading-snug">
                    Aman & Terpercaya
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  id="btn-hero-mulai"
                  onClick={onScrollToDemo}
                  className="px-7 py-3.5 rounded-lg bg-[#1B6EF3] hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2.5 active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Mulai Sekarang</span>
                </button>

                <button
                  id="btn-hero-video"
                  onClick={onOpenSchema}
                  className="px-6 py-3.5 rounded-lg bg-blue-50 hover:bg-blue-100/80 text-[#1B6EF3] border border-blue-200/80 font-semibold text-sm sm:text-base transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-[#1B6EF3]" />
                  <span>Lihat Video</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual with Happy Business Owners & Floating UI Cards */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-[540px]">
                
                {/* Main Photo with soft rounded frame & drop shadow */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3.3] sm:aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                    alt="Pebisnis Bahagia satupintu.id"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle inner gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                  {/* Cup & books label badge at desk bottom */}
                  <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-700 shadow-sm border border-slate-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>BISNIS LEBIH MUDAH</span>
                  </div>
                </div>

                {/* Floating Card 1: Top Dashboard Header & Metrics */}
                <div className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100/80 max-w-[280px] sm:max-w-[310px] z-20">
                  <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
                    <div className="px-2 py-0.5 rounded bg-blue-100 text-[#1B6EF3] text-[9px] font-bold flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      <span>Dashboard</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-800 ml-auto">
                      satupintu<span className="text-[#1B6EF3]">.id</span>
                    </span>
                  </div>

                  {/* Mini metrics bar */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                      <div className="text-[8px] text-slate-500">Total Project</div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-800">24</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                      <div className="text-[8px] text-slate-500">Proses Berjalan</div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-800 flex items-center justify-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5 text-emerald-500" />
                        <span>120</span>
                      </div>
                    </div>
                    <div className="bg-blue-50/80 p-1.5 rounded-lg border border-blue-100">
                      <div className="text-[8px] text-[#1B6EF3]">Efisiensi</div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#1B6EF3]">+75%</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2: Top Right Growing Business Chart */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100/80 z-20 hidden sm:block">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1B6EF3] flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800 leading-tight">Bisnis</div>
                      <div className="text-[8px] text-slate-500">Semakin Bertumbuh</div>
                    </div>
                  </div>
                  {/* Ascending mini bars */}
                  <div className="flex items-end gap-1.5 h-10 w-24 px-1 pt-1 bg-slate-50 rounded-lg">
                    <div className="w-2 bg-blue-200 rounded-t h-[30%]" />
                    <div className="w-2 bg-blue-300 rounded-t h-[45%]" />
                    <div className="w-2 bg-blue-400 rounded-t h-[60%]" />
                    <div className="w-2 bg-blue-500 rounded-t h-[80%]" />
                    <div className="w-2 bg-[#1B6EF3] rounded-t h-[100%]" />
                  </div>
                </div>

                {/* Floating Card 3: Bottom Right Trust Seal */}
                <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-100/80 flex items-center gap-3 z-20 max-w-[240px]">
                  <div className="w-9 h-9 rounded-xl bg-[#1B6EF3] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">Satu Pintu</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                      Solusi Manajemen Bisnis Untuk Masa Depan
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SECTION 2 - TANTANGAN YANG SERING DIALAMI              */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Problem Copy */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#1B6EF3]">
                TANTANGAN YANG SERING DIALAMI
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Seringkali Bisnis Owner Merasakan Betapa Sulitnya Mengatur Management Bisnis
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Banyak proses yang harus diawasi, data tersebar di banyak tempat, komunikasi tidak terstruktur, dan sulit mendapatkan laporan yang akurat dan cepat.
              </p>
            </div>

            {/* Right Column: Photo of thinking businessman + 6 Problem Badges */}
            <div className="lg:col-span-7 relative">
              <div className="relative mx-auto max-w-[560px] flex items-center justify-center py-6">
                
                {/* Center Businessman Stressed Photo */}
                <div className="relative w-[280px] sm:w-[320px] aspect-[4/4.5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 z-10">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
                    alt="Pebisnis Menghadapi Masalah Management"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Thought Scribble / Tangled Cloud Above Head */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-md border border-slate-200">
                    <svg className="w-8 h-8 text-slate-700 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C7 2 3 5 3 9c0 2.5 1.5 4.5 3.5 5.5-.5 1-1.5 2-3 2.5 2 0 4-1 5-2 1 .5 2.2.8 3.5.8 5 0 9-3 9-7s-4-6.8-9-6.8z" />
                    </svg>
                  </div>
                </div>

                {/* 6 Floating Problem Badges surrounding the businessman */}
                
                {/* 1. Top Left Badge */}
                <div className="absolute top-0 left-0 sm:-left-4 bg-white rounded-xl p-2.5 shadow-lg border border-slate-100 flex items-center gap-2 max-w-[190px] z-20">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1B6EF3] flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">
                    Data tersebar di banyak tempat
                  </span>
                </div>

                {/* 2. Top Right Badge */}
                <div className="absolute top-2 right-0 sm:-right-4 bg-white rounded-xl p-2.5 shadow-lg border border-slate-100 flex items-center gap-2 max-w-[200px] z-20">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1B6EF3] flex items-center justify-center shrink-0">
                    <GitBranch className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">
                    Koordinasi antar divisi tidak terstruktur
                  </span>
                </div>

                {/* 3. Middle Left Badge */}
                <div className="absolute top-1/2 -translate-y-8 -left-2 sm:-left-8 bg-white rounded-xl p-2.5 shadow-lg border border-slate-100 flex items-center gap-2 max-w-[190px] z-20">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1B6EF3] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">
                    Sulit memantau kinerja tim
                  </span>
                </div>

                {/* 4. Middle Right Badge */}
                <div className="absolute top-1/2 -translate-y-8 -right-2 sm:-right-8 bg-white rounded-xl p-2.5 shadow-lg border border-slate-100 flex items-center gap-2 max-w-[190px] z-20">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1B6EF3] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">
                    Proses manual memakan waktu
                  </span>
                </div>

                {/* 5. Bottom Left Badge */}
                <div className="absolute bottom-2 left-0 sm:-left-4 bg-white rounded-xl p-2.5 shadow-lg border border-slate-100 flex items-center gap-2 max-w-[180px] z-20">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1B6EF3] flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">
                    Laporan tidak real-time
                  </span>
                </div>

                {/* 6. Bottom Right Badge */}
                <div className="absolute bottom-0 right-0 sm:-right-4 bg-white rounded-xl p-2.5 shadow-lg border border-slate-100 flex items-center gap-2 max-w-[210px] z-20">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1B6EF3] flex items-center justify-center shrink-0">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">
                    Pengambilan keputusan sering terlambat
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SECTION 3 - SOLUSI TERBAIK UNTUK BISNIS ANDA           */}
      {/* ========================================================= */}
      <section id="layanan" className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row with Script Tag */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#1B6EF3]">
              SOLUSI TERBAIK UNTUK BISNIS ANDA
            </span>
            <span className="text-lg sm:text-xl font-bold italic text-[#1B6EF3] font-serif">
              Satu Sistem Semua Lebih Mudah
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Satu Pintu Hadir Membantu Bisnis Owner Untuk Optimalisasi Bisnis dengan Sistem Satu Pintu Terintegrasi
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <span className="font-semibold text-slate-900">satupintu.id</span> mengintegrasikan seluruh aspek manajemen bisnis dalam <span className="font-semibold text-slate-900">satu</span> platform, sehingga semua proses menjadi lebih mudah, cepat, terstruktur dan efisien.
              </p>

              {/* 3 Benefit Cards */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50 border border-blue-100/60">
                  <div className="w-9 h-9 rounded-lg bg-[#1B6EF3] text-white flex items-center justify-center shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-800">
                    Menyatukan Semua Proses
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50 border border-blue-100/60">
                  <div className="w-9 h-9 rounded-lg bg-[#1B6EF3] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-800">
                    Hemat Waktu dan Biaya
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50 border border-blue-100/60">
                  <div className="w-9 h-9 rounded-lg bg-[#1B6EF3] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-800">
                    Data Aman dan Terpusat
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  id="btn-jelajahi-fitur"
                  onClick={onScrollToDemo}
                  className="px-7 py-3.5 rounded-lg bg-[#1B6EF3] hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Jelajahi Fitur</span>
                </button>
              </div>
            </div>

            {/* Right Content: Dual Mockup Laptop & Smartphone */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              
              {/* Laptop Shell */}
              <div className="relative w-full max-w-[560px] bg-slate-900 rounded-t-[18px] p-2 sm:p-2.5 shadow-2xl border-4 border-slate-800 z-10">
                <div className="w-2 h-2 rounded-full bg-slate-700 mx-auto mb-1.5" />
                
                {/* Laptop Screen */}
                <div className="bg-[#F8FAFC] rounded-lg overflow-hidden border border-slate-200 text-xs shadow-inner">
                  
                  {/* Top Bar */}
                  <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between">
                    <span className="font-extrabold text-xs text-slate-900">
                      satupintu<span className="text-[#1B6EF3]">.id</span>
                    </span>
                    <div className="flex items-center gap-1.5 text-[9px] text-slate-500">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      <span>Sistem Aktif</span>
                    </div>
                  </div>

                  {/* Body Layout */}
                  <div className="grid grid-cols-12 min-h-[300px]">
                    
                    {/* Left Mini Sidebar */}
                    <div className="col-span-3 bg-white border-r border-slate-200 p-2 space-y-1 text-[10px]">
                      <div className="px-2 py-1 rounded bg-blue-50 text-[#1B6EF3] font-bold flex items-center gap-1.5">
                        <Layers className="w-3 h-3" />
                        <span>Dashboard</span>
                      </div>
                      <div className="px-2 py-1 text-slate-600 font-medium flex items-center gap-1.5">
                        <Target className="w-3 h-3 text-blue-500" />
                        <span>Marketing</span>
                      </div>
                      <div className="px-2 py-1 text-slate-600 font-medium flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                        <span>Keuangan</span>
                      </div>
                      <div className="px-2 py-1 text-slate-600 font-medium flex items-center gap-1.5">
                        <Settings className="w-3 h-3 text-amber-500" />
                        <span>Produksi</span>
                      </div>
                      <div className="px-2 py-1 text-slate-600 font-medium flex items-center gap-1.5">
                        <Users className="w-3 h-3 text-purple-500" />
                        <span>SDM</span>
                      </div>
                      <div className="px-2 py-1 text-slate-600 font-medium flex items-center gap-1.5">
                        <FileText className="w-3 h-3 text-slate-400" />
                        <span>Laporan</span>
                      </div>
                      <div className="px-2 py-1 text-slate-600 font-medium flex items-center gap-1.5">
                        <Settings className="w-3 h-3 text-slate-400" />
                        <span>Pengaturan</span>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="col-span-9 p-3 space-y-2.5 bg-[#F8FAFC]">
                      {/* Metric Row */}
                      <div className="grid grid-cols-4 gap-1.5">
                        <div className="p-1.5 bg-white rounded border border-slate-100 shadow-sm text-center">
                          <div className="text-[8px] text-slate-500">Total Project</div>
                          <div className="text-xs font-bold text-slate-800">24</div>
                        </div>
                        <div className="p-1.5 bg-white rounded border border-slate-100 shadow-sm text-center">
                          <div className="text-[8px] text-slate-500">Total Task</div>
                          <div className="text-xs font-bold text-slate-800">120</div>
                        </div>
                        <div className="p-1.5 bg-white rounded border border-slate-100 shadow-sm text-center">
                          <div className="text-[8px] text-amber-600">Anggaran</div>
                          <div className="text-[9px] font-bold text-slate-800">250.000.000</div>
                        </div>
                        <div className="p-1.5 bg-white rounded border border-slate-100 shadow-sm text-center">
                          <div className="text-[8px] text-emerald-600">Progress</div>
                          <div className="text-xs font-bold text-emerald-600">75%</div>
                        </div>
                      </div>

                      {/* Charts and Activities */}
                      <div className="grid grid-cols-12 gap-2">
                        {/* Line chart */}
                        <div className="col-span-7 bg-white p-2 rounded border border-slate-100 shadow-sm">
                          <div className="text-[9px] font-bold text-slate-800 mb-1">Progress Project</div>
                          <div className="h-20 w-full flex items-end">
                            <svg className="w-full h-full" viewBox="0 0 160 60">
                              <polyline
                                fill="none"
                                stroke="#1B6EF3"
                                strokeWidth="2"
                                points="10,50 35,40 60,45 85,30 110,20 135,25 155,10"
                              />
                              <circle cx="10" cy="50" r="2.5" fill="#1B6EF3" />
                              <circle cx="35" cy="40" r="2.5" fill="#1B6EF3" />
                              <circle cx="60" cy="45" r="2.5" fill="#1B6EF3" />
                              <circle cx="85" cy="30" r="2.5" fill="#1B6EF3" />
                              <circle cx="110" cy="20" r="2.5" fill="#1B6EF3" />
                              <circle cx="135" cy="25" r="2.5" fill="#1B6EF3" />
                              <circle cx="155" cy="10" r="2.5" fill="#1B6EF3" />
                            </svg>
                          </div>
                          <div className="flex justify-between text-[7px] text-slate-400 mt-0.5">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>Mei</span>
                            <span>Jun</span>
                          </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="col-span-5 bg-white p-2 rounded border border-slate-100 shadow-sm space-y-1">
                          <div className="text-[9px] font-bold text-slate-800">Aktivitas Terbaru</div>
                          <div className="space-y-1 text-[8px]">
                            <div className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                              <span className="truncate font-semibold text-slate-700">Meeting Project</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span className="truncate font-semibold text-slate-700">Pembayaran Inv</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                              <span className="truncate font-semibold text-slate-700">Update Produksi</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                              <span className="truncate font-semibold text-slate-700">Karyawan Baru</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Laptop Base Bottom Lip */}
                <div className="h-3 bg-slate-800 rounded-b-[12px] -mx-2 -mb-2 mt-1 flex items-center justify-center">
                  <div className="w-14 h-1 bg-slate-600 rounded-full" />
                </div>
              </div>

              {/* Smartphone Mockup positioned in front on the right */}
              <div className="absolute right-0 sm:-right-4 -bottom-6 w-[150px] sm:w-[170px] bg-slate-900 rounded-[28px] p-2 border-4 border-slate-700 shadow-2xl z-20">
                {/* Notch */}
                <div className="w-10 h-2 bg-slate-800 rounded-full mx-auto mb-1.5" />
                
                {/* Screen Content */}
                <div className="bg-white rounded-[20px] p-2.5 space-y-2 text-slate-800 shadow-inner">
                  {/* App Header */}
                  <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                    <span className="text-[10px] font-extrabold text-slate-900">
                      satupintu<span className="text-[#1B6EF3]">.id</span>
                    </span>
                    <Search className="w-3 h-3 text-slate-400" />
                  </div>

                  {/* Greeting */}
                  <div>
                    <div className="text-[9px] text-slate-500">Halo,</div>
                    <div className="text-[10px] font-bold text-slate-900 leading-tight">Selamat Datang!</div>
                  </div>

                  {/* 4 App Grid Buttons */}
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <button
                      onClick={() => onSelectModule('marketing')}
                      className="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-center flex flex-col items-center justify-center cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#1B6EF3] text-white flex items-center justify-center mb-0.5">
                        <BarChart3 className="w-3 h-3" />
                      </div>
                      <span className="text-[8px] font-bold text-slate-800">Marketing</span>
                    </button>

                    <button
                      onClick={() => onSelectModule('finance')}
                      className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-center flex flex-col items-center justify-center cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-0.5">
                        <TrendingUp className="w-3 h-3" />
                      </div>
                      <span className="text-[8px] font-bold text-slate-800">Keuangan</span>
                    </button>

                    <button
                      onClick={() => onSelectModule('production')}
                      className="p-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-center flex flex-col items-center justify-center cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mb-0.5">
                        <Settings className="w-3 h-3" />
                      </div>
                      <span className="text-[8px] font-bold text-slate-800">Produksi</span>
                    </button>

                    <button
                      onClick={() => onSelectModule('hr')}
                      className="p-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-center flex flex-col items-center justify-center cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center mb-0.5">
                        <Users className="w-3 h-3" />
                      </div>
                      <span className="text-[8px] font-bold text-slate-800">SDM</span>
                    </button>
                  </div>

                  {/* Bottom nav mock */}
                  <div className="pt-2 border-t border-slate-100 flex justify-between text-[7px] text-slate-400">
                    <span className="text-[#1B6EF3] font-bold">Dashboard</span>
                    <span>Laporan</span>
                    <span>Akun</span>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-8 h-1 bg-slate-600 rounded-full mx-auto mt-1" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SECTION 4 - SEMUA DALAM SATU PLATFORM                  */}
      {/* ========================================================= */}
      <section id="fitur" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#1B6EF3]">
              SEMUA DALAM SATU PLATFORM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
              Semua Divisi, Semua Karyawan, Semua Tim Management, Cukup Pakai Satu Sistem
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Kelola seluruh divisi perusahaan dalam satu platform terintegrasi dengan akses sesuai peran dan kebutuhan.
            </p>
          </div>

          {/* 4 Vertical Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Marketing (Blue) */}
            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#1B6EF3] text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                  <Settings className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  Divisi Marketing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kelola prospek, customer dan aktivitas penjualan.
                </p>
              </div>

              <button
                id="btn-module-marketing"
                onClick={() => onSelectModule('marketing')}
                className="mt-6 w-10 h-10 rounded-full bg-blue-50 hover:bg-[#1B6EF3] text-[#1B6EF3] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Pilih Divisi Marketing"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Keuangan (Green) */}
            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#00B074] text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  Divisi Keuangan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kelola laporan keuangan, tagihan dan pembayaran.
                </p>
              </div>

              <button
                id="btn-module-finance"
                onClick={() => onSelectModule('finance')}
                className="mt-6 w-10 h-10 rounded-full bg-blue-50 hover:bg-[#1B6EF3] text-[#1B6EF3] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Pilih Divisi Keuangan"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Produksi (Orange) */}
            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#F26522] text-white flex items-center justify-center mb-6 shadow-md shadow-orange-500/20">
                  <Settings className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  Divisi Produksi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pantau proyek, stock alat dan operasional.
                </p>
              </div>

              <button
                id="btn-module-production"
                onClick={() => onSelectModule('production')}
                className="mt-6 w-10 h-10 rounded-full bg-blue-50 hover:bg-[#1B6EF3] text-[#1B6EF3] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Pilih Divisi Produksi"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 4: SDM (Purple) */}
            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#7F56D9] text-white flex items-center justify-center mb-6 shadow-md shadow-purple-500/20">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  Divisi SDM
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kelola data karyawan, rekrutmen dan pengembangan tim.
                </p>
              </div>

              <button
                id="btn-module-hr"
                onClick={() => onSelectModule('hr')}
                className="mt-6 w-10 h-10 rounded-full bg-blue-50 hover:bg-[#1B6EF3] text-[#1B6EF3] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Pilih Divisi SDM"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SECTION 5 - HASIL YANG ANDA RASAKAN                     */}
      {/* ========================================================= */}
      <section id="keunggulan" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#1B6EF3]">
                HASIL YANG ANDA RASAKAN
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Optimalisasi Semua Divisi, KPI Real Time, Cepat Melakukan Evaluasi Management
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Dengan adanya Satu Pintu, pengambilan keputusan bisnis owner jadi lebih tepat, proses lebih efisien, tim lebih produktif, dan <span className="font-semibold text-slate-900">bisnis Anda siap untuk terus meningkat.</span>
              </p>

              <div className="pt-2">
                <button
                  id="btn-transformasi-bisnis"
                  onClick={onScrollToDemo}
                  className="px-7 py-3.5 rounded-lg bg-[#1B6EF3] hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Mulai Transformasi Bisnis</span>
                </button>
              </div>
            </div>

            {/* Right Column: 4 Mini Stat Cards + Growth Graphic Bar Visual */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 4 Mini Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Stat 1 */}
                <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm text-left">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1B6EF3] flex items-center justify-center mb-2.5">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">
                    KPI Real Time
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Pantau kinerja tim dan pencapaian target secara real-time.
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm text-left">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1B6EF3] flex items-center justify-center mb-2.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">
                    Evaluasi Lebih Cepat
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Identifikasi masalah dan ambil tindakan lebih cepat.
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm text-left">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1B6EF3] flex items-center justify-center mb-2.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">
                    Keputusan Lebih Tepat
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Data akurat untuk pengambilan keputusan yang lebih baik.
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm text-left">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1B6EF3] flex items-center justify-center mb-2.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">
                    Pertumbuhan Bisnis
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Efisiensi meningkat, profit dan pertumbuhan bisnis lebih tinggi.
                  </p>
                </div>

              </div>

              {/* Dynamic Growth Graphic Visual (Ascending blue bars with arrow & floating banner) */}
              <div className="relative pt-12 pb-6 px-4 sm:px-8 bg-gradient-to-t from-blue-50/50 to-white rounded-3xl border border-blue-100/60 overflow-hidden">
                
                {/* Floating Banner */}
                <div className="relative z-10 mx-auto max-w-sm mb-6 bg-white rounded-full py-2.5 px-6 shadow-md border border-blue-100 text-center">
                  <span className="text-xs sm:text-sm font-extrabold text-[#1B6EF3]">
                    Bisnis Anda Siap Naik ke Level Berikutnya!
                  </span>
                </div>

                {/* Growth Bars & Arrow Graphic */}
                <div className="relative h-44 flex items-end justify-between gap-2 sm:gap-3 px-2 sm:px-6">
                  {/* Ascending Columns */}
                  <div className="flex-1 bg-blue-100 rounded-t-lg h-[22%]" />
                  <div className="flex-1 bg-blue-200 rounded-t-lg h-[34%]" />
                  <div className="flex-1 bg-blue-300 rounded-t-lg h-[46%]" />
                  <div className="flex-1 bg-blue-400 rounded-t-lg h-[60%]" />
                  <div className="flex-1 bg-blue-500 rounded-t-lg h-[75%]" />
                  <div className="flex-1 bg-[#1B6EF3] rounded-t-lg h-[92%]" />
                  <div className="flex-1 bg-blue-700 rounded-t-lg h-[100%]" />

                  {/* Upward Diagonal Swoosh Arrow */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 160" preserveAspectRatio="none">
                      <path
                        d="M 20 140 Q 250 120 470 20"
                        fill="none"
                        stroke="#1B6EF3"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <polygon
                        points="460,10 485,15 475,38"
                        fill="#1B6EF3"
                      />
                    </svg>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FOOTER CTA BANNER                                      */}
      {/* ========================================================= */}
      <section id="tentang-kami" className="relative bg-[#1B6EF3] text-white py-16 lg:py-20 overflow-hidden">
        {/* Architectural City Background Overlay */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80')`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            {/* Left Headline */}
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Siap Mengoptimalkan Bisnis Anda Bersama Satu Pintu?
              </h2>
              <p className="text-sm sm:text-base text-blue-100 font-normal">
                Bergabunglah sekarang dan rasakan kemudahan mengelola bisnis dalam satu sistem terintegrasi.
              </p>
            </div>

            {/* Right Button & 3 Checkmarks */}
            <div className="flex flex-col items-center lg:items-end gap-4 shrink-0">
              <button
                id="btn-footer-cta-mulai"
                onClick={onScrollToDemo}
                className="px-8 py-4 rounded-xl bg-white text-[#1B6EF3] hover:bg-blue-50 font-bold text-base shadow-xl transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 text-[#1B6EF3]" />
                <span>Mulai Sekarang</span>
              </button>

              {/* 3 Checkmarks underneath */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/95">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Lebih Efisien</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Lebih Terstruktur</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Lebih Berkembang</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. FOOTER LINKS & COPYRIGHT                               */}
      {/* ========================================================= */}
      <footer id="kontak" className="bg-[#0D131F] text-slate-400 text-sm pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800 text-left">
            
            {/* Col 1 & 2: Brand Info & Socials */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="flex items-center text-2xl font-extrabold tracking-tight text-white">
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
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1B6EF3] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1B6EF3] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1B6EF3] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Youtube"
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
                  <button onClick={() => onSelectModule('marketing')} className="hover:text-white transition-colors text-left cursor-pointer">
                    Divisi Marketing
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectModule('finance')} className="hover:text-white transition-colors text-left cursor-pointer">
                    Divisi Keuangan
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectModule('production')} className="hover:text-white transition-colors text-left cursor-pointer">
                    Divisi Produksi
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectModule('hr')} className="hover:text-white transition-colors text-left cursor-pointer">
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
                  <a href="#tentang-kami" className="hover:text-white transition-colors">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#tentang-kami" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#tentang-kami" className="hover:text-white transition-colors">
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
                  <a href="#tentang-kami" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <button onClick={onOpenSchema} className="hover:text-white transition-colors text-left cursor-pointer">
                    Dokumentasi
                  </button>
                </li>
                <li>
                  <button onClick={onOpenSchema} className="hover:text-white transition-colors text-left cursor-pointer">
                    Video Tutorial
                  </button>
                </li>
                <li>
                  <a href="#tentang-kami" className="hover:text-white transition-colors">
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <a href="#tentang-kami" className="hover:text-white transition-colors">
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
