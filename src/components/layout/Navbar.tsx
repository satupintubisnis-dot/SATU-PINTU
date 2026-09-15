import React, { useState, useEffect } from 'react';
import { ShieldCheck, LogIn, Menu, X, Code2, Sparkles, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenSchema: () => void;
  onScrollToDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLogin,
  onOpenSchema,
  onScrollToDemo,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '4 Pilar Solusi', href: '#solusi' },
    { label: 'Client Portal', href: '#client-portal' },
    { label: 'Alur Rekayasa', href: '#metodologi' },
    { label: 'Konsultasi Demo', href: '#request-demo' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-[#0A0A0B]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  satupintu<span className="text-blue-500">.id</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                  ERP House
                </span>
              </div>
              <span className="text-[11px] text-gray-500 hidden sm:inline">
                Sistem Manajemen Terpadu & Client Portal
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-150 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}

            {/* Architecture / Schema Viewer Trigger */}
            <button
              id="btn-nav-architecture"
              onClick={onOpenSchema}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 bg-[#141417] hover:bg-[#1c1c21] border border-white/10 hover:border-emerald-500/40 rounded-full transition-all"
              title="Lihat Arsitektur Folder Next.js & Supabase SQL DDL"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Arsitektur & Skema SQL</span>
            </button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Client Portal Login Button (Bento Grid Pill Button) */}
            <button
              id="btn-nav-client-login"
              onClick={onOpenLogin}
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-black bg-white hover:bg-gray-200 rounded-full transition-colors shadow-sm"
            >
              <LogIn className="w-4 h-4 text-black" />
              <span>Client Login</span>
            </button>

            {/* Request Demo Button */}
            <button
              id="btn-nav-request-demo"
              onClick={onScrollToDemo}
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-600/25 transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Request Demo</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenLogin}
              className="px-3 py-1.5 text-xs font-bold text-black bg-white rounded-full"
              title="Login Portal"
            >
              Login
            </button>
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white bg-[#141417] border border-white/10 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-5 bg-[#141417] border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchema();
              }}
              className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Lihat Blueprint Arsitektur & SQL</span>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-black bg-white rounded-2xl"
              >
                <LogIn className="w-4 h-4 text-black" />
                <span>Masuk Client Portal</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToDemo();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-2xl shadow-lg shadow-blue-600/20"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Request Demo ERP</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
