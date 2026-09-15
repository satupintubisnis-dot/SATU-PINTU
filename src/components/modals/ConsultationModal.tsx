import React, { useState } from 'react';
import {
  X,
  Send,
  Sparkles,
  CheckCircle2,
  Building2,
  User,
  Mail,
  Phone,
  Briefcase,
  ShieldCheck,
  AlertCircle,
  Database
} from 'lucide-react';
import { Lead } from '../../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted: (lead: Lead) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onLeadSubmitted,
}) => {
  const [formData, setFormData] = useState<Lead>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    businessType: 'Manufaktur & Pabrikasi',
    neededModules: ['Marketing & Sales CRM', 'Keuangan & Akuntansi'],
    notes: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const moduleOptions = [
    'Marketing & Sales CRM',
    'Keuangan & Akuntansi',
    'Produksi & Supply Chain (BOM/SPK)',
    'SDM, Absensi GPS & Payroll',
    'Multi-Warehouse Barcode System',
    'Integrasi API Kustom'
  ];

  const businessTypeOptions = [
    'Startup & SME',
    'Perusahaan Menengah',
    'Enterprise',
    'Manufaktur & Pabrikasi',
    'Distributor & Wholesale',
    'Jasa Profesional & Retail'
  ];

  const handleModuleToggle = (moduleName: string) => {
    setFormData((prev) => {
      const exists = prev.neededModules.includes(moduleName);
      if (exists) {
        return {
          ...prev,
          neededModules: prev.neededModules.filter((m) => m !== moduleName)
        };
      } else {
        return {
          ...prev,
          neededModules: [...prev.neededModules, moduleName]
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim()) {
      setErrorMsg('Mohon isi nama lengkap Anda.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Mohon masukkan alamat email yang valid.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Mohon masukkan nomor WhatsApp yang aktif.');
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMsg('Mohon cantumkan nama perusahaan Anda.');
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const newRecord: Lead = {
        ...formData,
        id: `lead_${Math.random().toString(36).substring(2, 9)}`,
        status: 'new',
        createdAt: new Date().toISOString(),
      };

      setIsSuccess(true);
      onLeadSubmitted(newRecord);
    } catch {
      setErrorMsg('Terjadi kendala saat mengirim formulir. Silakan coba kembali.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1B6EF3]/10 flex items-center justify-center text-[#1B6EF3]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Konsultasi Gratis Arsitektur Sistem ERP
              </h3>
              <p className="text-xs text-slate-500">
                satupintu.id / Diskusikan kebutuhan modul & integrasi kustom
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 text-slate-800">
          {isSuccess ? (
            <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Permintaan Konsultasi Diterima!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Terima kasih <strong>{formData.name}</strong> dari <strong>{formData.companyName}</strong>. Principal Architect kami akan segera menghubungi WhatsApp Anda ({formData.phone}) untuk mengatur sesi demo interaktif.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#1B6EF3] text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Tutup Jendela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Lengkap PIC *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Budi Santoso"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1B6EF3] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Bisnis *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. budi@perusahaan.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1B6EF3] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    No. WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 081234567890"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1B6EF3] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Perusahaan *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. PT Solusi Bersama"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1B6EF3] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Skala / Tipe Bisnis
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1B6EF3] focus:bg-white"
                  >
                    {businessTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Divisi yang Ingin Dikelola:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {moduleOptions.map((module) => {
                    const isChecked = formData.neededModules.includes(module);
                    return (
                      <button
                        type="button"
                        key={module}
                        onClick={() => handleModuleToggle(module)}
                        className={`p-2.5 rounded-lg border text-left text-xs flex items-center gap-2 transition-all ${
                          isChecked
                            ? 'bg-blue-50 border-[#1B6EF3] text-[#1B6EF3] font-semibold'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border ${
                            isChecked ? 'bg-[#1B6EF3] border-[#1B6EF3] text-white' : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <span className="truncate">{module}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Catatan Kebutuhan Khusus (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ceritakan gambaran alur bisnis atau integrasi yang diinginkan..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#1B6EF3] focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-[#1B6EF3] hover:bg-blue-700 text-white font-bold text-sm rounded-lg shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>Mengirim Formulir...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Jadwalkan Konsultasi Sekarang</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Privasi data bisnis Anda 100% terjaga & dilindungi NDA.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
