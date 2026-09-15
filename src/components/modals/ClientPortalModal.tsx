import React, { useState } from 'react';
import { 
  X, 
  LogIn, 
  User, 
  Lock, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  FileText, 
  Layers, 
  GitBranch, 
  Server, 
  MessageSquare, 
  Download,
  Building,
  ArrowRight,
  LogOut,
  AlertCircle
} from 'lucide-react';
import { DEMO_PROJECT, DEMO_MILESTONES } from '../../data/mockData';
import { formatIndonesianDate } from '../../lib/utils';
import { ProjectMilestone } from '../../types';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('hendra@nusantara.co.id');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<ProjectMilestone>(DEMO_MILESTONES[3]); // Current in progress

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsAuthenticated(true);
    }, 600);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0A0A0B] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141417]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">
                  satupintu.id / Client Portal (Private Area)
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  RLS ISOLATED
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Pusat Kontrol Pemilik Bisnis & Pemantauan Progres Sistem ERP Kustom
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-rose-300 bg-rose-950/40 hover:bg-rose-900/50 border border-rose-500/30 rounded-2xl transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-2xl hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Login View OR Dashboard View */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#0A0A0B]">
          
          {!isAuthenticated ? (
            /* Authentication Screen */
            <div className="max-w-md mx-auto py-8">
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-3">
                  <LogIn className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Masuk ke Client Portal
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Masukkan kredensial akun klien yang telah terdaftar di Supabase Auth
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 bg-[#141417] p-7 rounded-3xl border border-white/10 shadow-xl">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Email Klien
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#0A0A0B] border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 bg-[#0A0A0B] border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded bg-[#0A0A0B] border-white/10 text-blue-600" />
                    <span>Ingat sesi saya</span>
                  </label>
                  <span className="text-blue-400 hover:underline cursor-pointer">
                    Lupa password?
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 rounded-2xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Memverifikasi Akun Klien...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Masuk ke Dashboard Proyek</span>
                    </>
                  )}
                </button>

                {/* One Click Demo Login Button */}
                <div className="pt-3 border-t border-white/10 text-center">
                  <p className="text-[11px] text-gray-400 mb-2">
                    Ingin melihat demo tanpa mengisi form?
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => {
                        setIsLoading(false);
                        setIsAuthenticated(true);
                      }, 400);
                    }}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-2xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Login Instan sebagai Klien Demo (PT Nusantara Prima)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Live Client Dashboard Screen */
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Project Hero Card (Bento style) */}
              <div className="p-7 rounded-3xl bg-[#141417] border border-white/10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Status: Active Development
                      </span>
                      <span className="text-xs text-gray-400">
                        Proyek #{DEMO_PROJECT.id}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {DEMO_PROJECT.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
                      {DEMO_PROJECT.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1.5 text-gray-200">
                        <Building className="w-4 h-4 text-blue-400" />
                        {DEMO_PROJECT.companyName}
                      </span>
                      <span>Target Live: <strong className="text-emerald-400">{formatIndonesianDate(DEMO_PROJECT.targetLaunchDate)}</strong></span>
                      <span>Lead Architect: <strong className="text-white">{DEMO_PROJECT.leadArchitect.name}</strong></span>
                    </div>
                  </div>

                  {/* Staging Access Box */}
                  <div className="p-5 rounded-2xl bg-[#0A0A0B] border border-white/5 shrink-0 w-full lg:w-72 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-semibold uppercase tracking-wider text-[10px]">
                        Staging Test Server
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ONLINE
                      </span>
                    </div>
                    
                    <a
                      href={DEMO_PROJECT.stagingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-blue-600/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Akses Staging Cloud Preview</span>
                    </a>

                    <div className="text-[10px] text-gray-500 text-center font-mono truncate">
                      {DEMO_PROJECT.stagingUrl}
                    </div>
                  </div>
                </div>

                {/* Progress Overview in Dashboard */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center justify-between mb-2 text-xs">
                    <span className="text-gray-300 font-bold">
                      Progress Pengerjaan Keseluruhan
                    </span>
                    <span className="text-blue-400 font-extrabold text-sm">
                      {DEMO_PROJECT.progressPercentage}%
                    </span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#0A0A0B] overflow-hidden border border-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400"
                      style={{ width: `${DEMO_PROJECT.progressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Milestones & Deliverables Explorer */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left: Milestone list */}
                <div className="lg:col-span-5 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                    <GitBranch className="w-4 h-4 text-blue-400" />
                    Tahapan Sprint & Milestone ({DEMO_MILESTONES.length} Fase)
                  </h4>

                  <div className="space-y-2">
                    {DEMO_MILESTONES.map((ms) => {
                      const isSelected = selectedMilestone.id === ms.id;
                      const isCompleted = ms.status === 'completed';
                      const isInProgress = ms.status === 'in_progress';

                      return (
                        <button
                          key={ms.id}
                          onClick={() => setSelectedMilestone(ms)}
                          className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#141417] border-blue-500/60 shadow-md'
                              : 'bg-[#141417]/60 border-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            ) : isInProgress ? (
                              <Clock className="w-4 h-4 text-blue-400 shrink-0 animate-pulse" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-gray-700 shrink-0" />
                            )}
                            <div>
                              <div className="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-[240px]">
                                {ms.title.split(':')[0]}
                              </div>
                              <div className="text-[11px] text-gray-400 truncate max-w-[200px] sm:max-w-[240px]">
                                {ms.title.split(':')[1]}
                              </div>
                            </div>
                          </div>

                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold shrink-0 uppercase ${
                              isCompleted
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : isInProgress
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-white/5 text-gray-400'
                            }`}
                          >
                            {isCompleted ? 'Selesai' : isInProgress ? 'Aktif' : 'Menunggu'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Selected Milestone In-depth Deliverables Card (Bento Card) */}
                <div className="lg:col-span-7">
                  <div className="p-7 rounded-3xl bg-[#141417] border border-white/10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                        <span className="text-xs font-bold text-blue-400">
                          Detail Milestone: Fase {selectedMilestone.sequenceOrder}
                        </span>
                        <span className="text-xs font-mono text-gray-400">
                          Due Date: {formatIndonesianDate(selectedMilestone.dueDate)}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-2">
                        {selectedMilestone.title}
                      </h4>

                      <p className="text-xs text-gray-300 leading-relaxed mb-5">
                        {selectedMilestone.description}
                      </p>

                      <div className="space-y-3">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Deliverables & Hasil UAT:
                        </div>
                        <div className="space-y-2">
                          {selectedMilestone.deliverables?.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-2xl bg-[#0A0A0B] border border-white/5 text-xs flex items-center justify-between"
                            >
                              <div className="flex items-center gap-2 text-gray-200">
                                <FileText className="w-4 h-4 text-blue-400" />
                                <span>{item}</span>
                              </div>
                              <span className="text-emerald-400 text-[10px] font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                TERVERIFIKASI
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <MessageSquare className="w-4 h-4 text-purple-400" />
                        <span>Ada masukan untuk sprint ini? Hubungi Architect.</span>
                      </div>
                      <button className="px-4 py-2 text-xs font-semibold text-gray-200 bg-[#0A0A0B] hover:bg-white/5 border border-white/10 rounded-2xl transition-colors">
                        Kirim Feedback
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-[#141417] flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sesi dienkripsi AES-256 via Supabase Auth.</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-2xl transition-colors"
          >
            Tutup Portal
          </button>
        </div>

      </div>
    </div>
  );
};
