import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  FileText, 
  MessageSquare, 
  Lock, 
  ArrowRight,
  Sparkles,
  GitBranch,
  Terminal,
  Server,
  Layers,
  AlertCircle
} from 'lucide-react';
import { DEMO_PROJECT, DEMO_MILESTONES } from '../../data/mockData';
import { formatIndonesianDate } from '../../lib/utils';

interface ClientPortalSectionProps {
  onOpenPortalModal: () => void;
}

export const ClientPortalSection: React.FC<ClientPortalSectionProps> = ({
  onOpenPortalModal,
}) => {
  return (
    <section id="client-portal" className="py-24 bg-[#0A0A0B] relative border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparansi Eksekusi 100%</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pantau Pengerjaan Sistem ERP Anda{' '}
            <span className="text-blue-500">
              Secara Real-Time di Client Portal
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            Tidak ada lagi istilah "software house hilang kontak". Setiap klien satupintu.id mendapatkan akses portal pribadi untuk memantau sprint, menguji server staging, dan menyetujui milestone pengerjaan.
          </p>
        </div>

        {/* Client Portal Bento Box */}
        <div className="rounded-3xl bg-[#141417] border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          
          {/* Top Bar of the Mock Portal */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  PORTAL CLIENT PRIVATE
                </span>
                <span className="text-xs text-gray-400">ID: {DEMO_PROJECT.id}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {DEMO_PROJECT.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                Klien: <strong className="text-white">{DEMO_PROJECT.companyName}</strong> ({DEMO_PROJECT.clientName})
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="btn-open-portal-interactive"
                onClick={onOpenPortalModal}
                className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-2xl shadow-lg shadow-blue-600/25 transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Buka Dashboard Interaktif</span>
              </button>
            </div>
          </div>

          {/* Progress Overview Bar (Bento style) */}
          <div className="mb-8 p-6 rounded-3xl bg-[#0A0A0B] border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-white">
                  Total Progres Keseluruhan Proyek
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold text-blue-400">
                  {DEMO_PROJECT.progressPercentage}%
                </span>
                <span className="text-xs text-gray-400">
                  Target Live: {formatIndonesianDate(DEMO_PROJECT.targetLaunchDate)}
                </span>
              </div>
            </div>

            {/* Progress Bar with Electric Blue Gradient */}
            <div className="w-full h-3 rounded-full bg-[#141417] overflow-hidden p-0.5 border border-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 transition-all duration-500"
                style={{ width: `${DEMO_PROJECT.progressPercentage}%` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
              <span>Mulai: {formatIndonesianDate(DEMO_PROJECT.startDate)}</span>
              <span className="text-emerald-400 font-medium">Fase 4 dari 6 Berjalan Aktif</span>
            </div>
          </div>

          {/* 4 Feature Bento Columns inside Portal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            {/* Feature 1: Milestone & Sprint Tracker */}
            <div className="p-5 rounded-3xl bg-[#0A0A0B] border border-white/5 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <GitBranch className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Live Sprint & Milestone
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Pantau setiap tahap deliverable dari BRD, arsitektur database, coding modul, hingga pengujian UAT.
              </p>
            </div>

            {/* Feature 2: Staging Server Preview */}
            <div className="p-5 rounded-3xl bg-[#0A0A0B] border border-white/5 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Staging Cloud Preview
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Uji langsung fitur terbaru di lingkungan staging private dengan data simulasi sebelum rilis production.
              </p>
            </div>

            {/* Feature 3: Document & Contract Vault */}
            <div className="p-5 rounded-3xl bg-[#0A0A0B] border border-white/5 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Dokumen & Schema Vault
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Arsip rapi dokumen BRD, Entity Relationship Diagram, kontrak pengerjaan, termin invoice, dan user manual.
              </p>
            </div>

            {/* Feature 4: Lead Architect Channel */}
            <div className="p-5 rounded-3xl bg-[#0A0A0B] border border-white/5 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Akses Dedicated Architect
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Komunikasi langsung tanpa birokrasi ke Lead Solutions Architect dan Senior QA Engineer proyek Anda.
              </p>
            </div>

          </div>

          {/* Sample Milestone Timeline Preview inside bento container */}
          <div className="p-6 rounded-3xl bg-[#0A0A0B] border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                Snapshot Milestone Pengerjaan Proyek:
              </h4>
              <span className="text-xs text-blue-400 hover:underline cursor-pointer" onClick={onOpenPortalModal}>
                Lihat Semua 6 Fase & Deliverable &rarr;
              </span>
            </div>

            <div className="space-y-3">
              {DEMO_MILESTONES.slice(0, 4).map((ms) => {
                const isCompleted = ms.status === 'completed';
                const isInProgress = ms.status === 'in_progress';

                return (
                  <div
                    key={ms.id}
                    className={`p-3.5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
                      isCompleted
                        ? 'bg-[#141417] border-emerald-500/30'
                        : isInProgress
                        ? 'bg-[#141417] border-blue-500/40 shadow-sm'
                        : 'bg-[#141417]/50 border-white/5'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : isInProgress ? (
                          <span className="w-4 h-4 rounded-full border-2 border-blue-400 border-t-transparent animate-spin inline-block" />
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-gray-700 inline-block" />
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-white">{ms.title}</div>
                        <div className="text-gray-400 mt-0.5">{ms.description}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`px-2.5 py-0.5 rounded-full font-semibold text-[10px] uppercase ${
                          isCompleted
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : isInProgress
                            ? 'bg-blue-500/20 text-blue-400 animate-pulse'
                            : 'bg-white/5 text-gray-400'
                        }`}
                      >
                        {isCompleted ? 'Selesai' : isInProgress ? 'Sedang Dikerjakan' : 'Menunggu'}
                      </span>
                      <span className="text-gray-500 font-mono text-[11px]">
                        Due: {ms.dueDate}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
