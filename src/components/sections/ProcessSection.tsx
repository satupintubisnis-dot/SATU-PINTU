import React from 'react';
import { 
  FileSearch, 
  Database, 
  Code2, 
  CheckCheck, 
  Rocket, 
  Headphones,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & SOP Mapping',
      description: 'Audit menyeluruh alur kerja divisi Marketing, Finance, Pabrik, & HR. Kami terjemahkan SOP unik Anda ke dalam dokumen spesifikasi sistem (BRD).',
      icon: <FileSearch className="w-5 h-5 text-indigo-400" />,
      tag: 'Minggu 1-2'
    },
    {
      number: '02',
      title: 'DB Architecture & UI/UX',
      description: 'Perancangan skema database relasional PostgreSQL dengan RLS, arsitektur REST API/GraphQL, dan prototipe desain UI/UX interaktif.',
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      tag: 'Minggu 3-4'
    },
    {
      number: '03',
      title: 'Agile Sprint Module Coding',
      description: 'Pengembangan modul secara bertahap menggunakan clean code TypeScript, komponen modular, dan integrasi backend tanpa celah keamanan.',
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      tag: 'Sprint 2-Mingguan'
    },
    {
      number: '04',
      title: 'Staging & UAT Validation',
      description: 'Klien menguji sistem secara langsung di server staging. Verifikasi kesesuaian formula pajak, laporan keuangan, dan alur kerja pabrik.',
      icon: <CheckCheck className="w-5 h-5 text-amber-400" />,
      tag: 'Review Klien'
    },
    {
      number: '05',
      title: 'Data Migration & Live Cutover',
      description: 'Migrasi database historis dari spreadsheet atau software lama dengan validasi integritas, dilanjutkan live deployment ke Cloud Server.',
      icon: <Rocket className="w-5 h-5 text-purple-400" />,
      tag: 'Go-Live'
    },
    {
      number: '06',
      title: 'Training & 24/7 SLA Guarantee',
      description: 'Pelatihan langsung untuk operator dan direksi, dokumentasi manual lengkap, serta garansi pemeliharaan dan backup berkala.',
      icon: <Headphones className="w-5 h-5 text-rose-400" />,
      tag: 'Garansi Purna Jual'
    }
  ];

  return (
    <section id="metodologi" className="py-24 bg-[#0A0A0B] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Standar Rekayasa Enterprise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Metodologi Pengerjaan{' '}
            <span className="text-blue-500">
              Terstruktur & Tepat Waktu
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            Setiap proyek ERP kustom ditangani dengan standar software engineering kelas industri, memastikan sistem stabil, aman, dan siap scale-up seiring pertumbuhan bisnis.
          </p>
        </div>

        {/* 6 Bento Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#141417] border border-white/10 hover:border-blue-500/40 hover:bg-[#1a1a1f] transition-all group relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#0A0A0B] border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-gray-400 px-2.5 py-0.5 rounded-full bg-[#0A0A0B] border border-white/5">
                      {step.tag}
                    </span>
                    <span className="text-2xl font-extrabold font-mono text-gray-700 group-hover:text-blue-400/40 transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center text-xs text-gray-400 group-hover:text-blue-400 transition-colors">
                <span>Tahap Terintegrasi ke Client Portal</span>
                <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
