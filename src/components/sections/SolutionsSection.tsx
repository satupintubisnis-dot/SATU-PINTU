import React, { useState } from 'react';
import { 
  Megaphone, 
  WalletCards, 
  Factory, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Layers,
  FileSpreadsheet,
  GitMerge,
  Cpu
} from 'lucide-react';
import { ERP_MODULES } from '../../data/mockData';
import { ERPModuleKey } from '../../types';

interface SolutionsSectionProps {
  selectedModule: ERPModuleKey;
  onSelectModule: (key: ERPModuleKey) => void;
  onRequestDemoWithModule: (moduleName: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  selectedModule,
  onSelectModule,
  onRequestDemoWithModule,
}) => {
  const current = ERP_MODULES.find((m) => m.key === selectedModule) || ERP_MODULES[0];

  const getIcon = (key: ERPModuleKey) => {
    switch (key) {
      case 'marketing':
        return <Megaphone className="w-5 h-5" />;
      case 'finance':
        return <WalletCards className="w-5 h-5" />;
      case 'production':
        return <Factory className="w-5 h-5" />;
      case 'hr':
        return <Users className="w-5 h-5" />;
    }
  };

  return (
    <section id="solusi" className="py-24 bg-[#0A0A0B] relative border-t border-white/5">
      {/* Glow background accent */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>4 Pilar Integrasi Bisnis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hilangkan Sekat Antar Divisi.{' '}
            <span className="text-blue-500">
              Satu Sistem, Satu Kebenaran Data.
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            Tidak ada lagi rekonsiliasi manual antar spreadsheet excel yang rawan manipulasi. Semua modul beroperasi di atas database tunggal dengan integrasi alur otomatis.
          </p>
        </div>

        {/* 4 Pillars Navigation Tabs (Bento Style Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          {ERP_MODULES.map((module) => {
            const isSelected = selectedModule === module.key;
            return (
              <button
                key={module.key}
                onClick={() => onSelectModule(module.key)}
                className={`p-5 rounded-3xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#141417] border-blue-500 shadow-xl shadow-blue-900/20'
                    : 'bg-[#141417]/70 border-white/10 hover:bg-[#141417] hover:border-white/20'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
                )}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'bg-[#0A0A0B] text-gray-400 group-hover:text-white border border-white/5'
                    }`}
                  >
                    {getIcon(module.key)}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 px-2 py-0.5 rounded-full bg-[#0A0A0B] border border-white/5">
                    {module.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {module.name}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {module.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Module In-Depth Bento Showcase */}
        <div className="rounded-3xl bg-[#141417] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Detail Features & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Modul Spesifik
                </span>
                <span className="text-sm font-semibold text-gray-300">
                  {current.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.name}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Kemampuan & Otomasi Sistem:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#0A0A0B] border border-white/5 text-xs text-gray-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onRequestDemoWithModule(current.name)}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-2xl shadow-lg shadow-blue-600/25 transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Custom Demo ({current.name.split(' ')[0]})</span>
                </button>

                <span className="text-xs text-gray-400">
                  Bisa dikustomisasi sesuai SOP perusahaan Anda
                </span>
              </div>
            </div>

            {/* Right: Live Data Simulation & Impact Metrics */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Metric Impact Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {current.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0A0A0B] border border-white/5 text-center"
                  >
                    <div className="text-xs text-gray-400 mb-1">{metric.label}</div>
                    <div className="text-base sm:text-lg font-extrabold text-white">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-medium mt-0.5">
                      {metric.trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* Realistic Mock Matrix Box */}
              <div className="p-5 rounded-3xl bg-[#0A0A0B] border border-white/10 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-bold text-gray-200">
                      {current.mockDataSnippet.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500">
                    REALTIME ENGINE
                  </span>
                </div>

                <div className="space-y-2.5">
                  {current.mockDataSnippet.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#141417] border border-white/5 flex items-center justify-between text-xs"
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

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <GitMerge className="w-3.5 h-3.5 text-blue-400" />
                    Sinkron otomatis ke modul lainnya
                  </span>
                  <span className="text-emerald-400 font-medium">0 Delay</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Integration Synergy Banner (Bento Tile) */}
        <div className="mt-6 p-6 rounded-3xl bg-[#141417] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Contoh Sinergi Alur Otomatis "Satu Pintu":
              </h4>
              <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                Sales deal di <strong className="text-purple-400">Marketing CRM</strong> &rarr; Otomatis terbit SPK di <strong className="text-orange-400">Pabrik Produksi</strong> &rarr; Otomatis potong stok gudang & terbit Invoice di <strong className="text-emerald-400">Keuangan</strong> &rarr; Hitung komisi di <strong className="text-blue-400">SDM Payroll</strong>.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Zero Human Error
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
