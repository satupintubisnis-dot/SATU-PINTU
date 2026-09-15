import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Layers, 
  Lock, 
  ArrowUpRight,
  Heart
} from 'lucide-react';

interface FooterProps {
  onOpenLogin: () => void;
  onOpenSchema: () => void;
  onScrollToDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLogin,
  onOpenSchema,
  onScrollToDemo,
}) => {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 pt-16 pb-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1 & 2: Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-blue-600 flex items-center justify-center font-extrabold text-sm text-white shadow-lg shadow-blue-600/30">
                S1
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                satupintu<span className="text-blue-500">.id</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Perusahaan Software House spesialis Custom ERP & Enterprise System. Kami menyatukan divisi Marketing, Keuangan, Produksi, dan SDM ke dalam satu pintu kontrol pemilik bisnis dengan kepemilikan source code 100%.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#141417] border border-white/10 text-gray-300">
                <Lock className="w-3 h-3 text-emerald-400" />
                PostgreSQL RLS Protected
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#141417] border border-white/10 text-gray-300">
                <ShieldCheck className="w-3 h-3 text-blue-400" />
                Enterprise SLA 99.9%
              </span>
            </div>
          </div>

          {/* Col 3: 4 Pilar Modul */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              4 Pilar Solusi ERP
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solusi" className="hover:text-blue-400 transition-colors">
                  Marketing & Sales CRM
                </a>
              </li>
              <li>
                <a href="#solusi" className="hover:text-blue-400 transition-colors">
                  Keuangan & Akuntansi Realtime
                </a>
              </li>
              <li>
                <a href="#solusi" className="hover:text-blue-400 transition-colors">
                  Produksi, SPK & Multi-Gudang
                </a>
              </li>
              <li>
                <a href="#solusi" className="hover:text-blue-400 transition-colors">
                  SDM, Presensi GPS & Payroll PPh 21
                </a>
              </li>
              <li>
                <a href="#solusi" className="hover:text-blue-400 transition-colors">
                  Executive Dashboard Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Klien & Arsitektur */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Client & Arsitektur
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenLogin}
                  className="hover:text-blue-400 transition-colors text-left flex items-center gap-1"
                >
                  <span>Login Client Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-blue-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSchema}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1"
                >
                  <span>Struktur Next.js & Skema SQL</span>
                  <Code2 className="w-3 h-3 text-emerald-400" />
                </button>
              </li>
              <li>
                <a href="#client-portal" className="hover:text-blue-400 transition-colors">
                  Live Sprint & Milestone Tracker
                </a>
              </li>
              <li>
                <a href="#metodologi" className="hover:text-blue-400 transition-colors">
                  Standar Rekayasa & UAT
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak Kantor */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hubungi Kantor Kami
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Menara Prima Lantai 18, Mega Kuningan, Jakarta Selatan, Indonesia 12950
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-gray-300">halo@satupintu.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-gray-300">+62 812-8899-2026</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onScrollToDemo}
                  className="w-full py-2.5 text-center font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 rounded-2xl shadow-md shadow-blue-600/20 transition-colors"
                >
                  Jadwalkan Demo Langsung
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-gray-300 font-semibold">satupintu.id</span> - PT Satu Pintu Digital Terintegrasi. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onOpenSchema} className="hover:text-gray-300 transition-colors">
              Database DDL & RLS Blueprint
            </button>
            <span>&bull;</span>
            <span className="text-gray-500">
              Built with Next.js & Supabase
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
