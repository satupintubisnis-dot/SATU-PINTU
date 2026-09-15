import React, { useState } from 'react';
import { 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  MessageSquare,
  ShieldCheck,
  AlertCircle,
  Database,
  Layers
} from 'lucide-react';
import { Lead } from '../../types';

interface LeadsFormSectionProps {
  preselectedModule?: string;
  onLeadSubmitted?: (lead: Lead) => void;
}

export const LeadsFormSection: React.FC<LeadsFormSectionProps> = ({
  preselectedModule,
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
  const [submittedLeadRecord, setSubmittedLeadRecord] = useState<Lead | null>(null);

  const moduleOptions = [
    'Marketing & Sales CRM',
    'Keuangan & Akuntansi',
    'Produksi & Supply Chain (BOM/SPK)',
    'SDM, Absensi GPS & Payroll',
    'Multi-Warehouse Barcode System',
    'Custom API & Integrasi Mesin IoT'
  ];

  const businessTypeOptions = [
    'Manufaktur & Pabrikasi',
    'Distributor & Wholesale',
    'Jasa Profesional & Konsultan',
    'Retail & E-commerce Multichannel',
    'Konstruksi & Real Estate',
    'Lainnya'
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

    // Defensive validation
    if (!formData.name.trim()) {
      setErrorMsg('Mohon isi nama lengkap PIC perusahaan.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Mohon masukkan alamat email yang valid.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Mohon masukkan nomor WhatsApp yang aktif untuk konfirmasi jadwal.');
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMsg('Mohon cantumkan nama perusahaan / instansi Anda.');
      return;
    }
    if (formData.neededModules.length === 0) {
      setErrorMsg('Pilih minimal satu modul ERP yang dibutuhkan.');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate real API latency & database insert to public.leads
      await new Promise((resolve) => setTimeout(resolve, 900));

      const newRecord: Lead = {
        ...formData,
        id: `lead_${Math.random().toString(36).substring(2, 9)}`,
        status: 'new',
        createdAt: new Date().toISOString(),
      };

      setSubmittedLeadRecord(newRecord);
      setIsSuccess(true);
      if (onLeadSubmitted) {
        onLeadSubmitted(newRecord);
      }
    } catch (err) {
      setErrorMsg('Terjadi kendala saat mengirimkan formulir. Silakan coba kembali.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedLeadRecord(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      companyName: '',
      businessType: 'Manufaktur & Pabrikasi',
      neededModules: ['Marketing & Sales CRM', 'Keuangan & Akuntansi'],
      notes: '',
    });
  };

  return (
    <section id="request-demo" className="py-24 bg-[#0A0A0B] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Context & Value Proposition (Bento Card) */}
          <div className="lg:col-span-5 bg-[#141417] border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Konsultasi Bebas Biaya</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Siap Menyatukan Seluruh Bisnis dalam{' '}
              <span className="text-blue-500">
                Satu Pintu Kontrol?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Jadwalkan sesi konsultasi gratis dengan <strong className="text-white">Principal Software Architect satupintu.id</strong>. Kami akan mendemokan sistem interaktif dan membedah alur integrasi khusus untuk kebutuhan industri Anda.
            </p>

            {/* Direct Benefits Checklist */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Live Interactive Demo</strong> disesuaikan dengan studi kasus bisnis Anda.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Estimasi Timeline & Arsitektur</strong> transparan tanpa biaya tersembunyi.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-white">Akses Akun Client Portal</strong> untuk memantau proposal & progress.
                </div>
              </div>
            </div>

            {/* Contact Box */}
            <div className="p-5 rounded-2xl bg-[#0A0A0B] border border-white/5 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Hubungi Kami Langsung:
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>halo@satupintu.id / satupintubisnis@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+62 812-8899-2026 (WhatsApp Fast Response)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form (Bento Card) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141417] border border-white/10 shadow-2xl relative">
              
              {isSuccess ? (
                /* Success State */
                <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Permintaan Demo Berhasil Terkirim!
                    </h3>
                    <p className="text-sm text-gray-300 mt-2 max-w-md mx-auto">
                      Terima kasih <strong className="text-white">{submittedLeadRecord?.name}</strong> dari <strong className="text-white">{submittedLeadRecord?.companyName}</strong>. Lead Software Architect kami akan menghubungi Anda via WhatsApp (<span className="text-emerald-400">{submittedLeadRecord?.phone}</span>) dalam waktu maksimal 1x24 jam.
                    </p>
                  </div>

                  {/* Schema DB preview badge */}
                  <div className="p-4 rounded-2xl bg-[#0A0A0B] border border-white/5 text-left text-xs space-y-2 max-w-lg mx-auto">
                    <div className="flex items-center justify-between text-gray-400 font-mono pb-2 border-b border-white/5">
                      <span className="flex items-center gap-1.5 text-blue-400">
                        <Database className="w-3.5 h-3.5" />
                        public.leads (INSERT RECORD)
                      </span>
                      <span className="text-emerald-400 font-bold">STATUS: NEW</span>
                    </div>
                    <div className="text-gray-300 space-y-1 font-mono text-[11px]">
                      <div><strong>Lead ID:</strong> {submittedLeadRecord?.id}</div>
                      <div><strong>Company:</strong> {submittedLeadRecord?.companyName}</div>
                      <div><strong>Modules:</strong> {submittedLeadRecord?.neededModules.join(', ')}</div>
                      <div><strong>Timestamp:</strong> {submittedLeadRecord?.createdAt}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-sm font-semibold text-gray-200 hover:text-white bg-[#0A0A0B] border border-white/10 rounded-2xl hover:bg-white/5 transition-colors"
                  >
                    Kirim Permintaan Demo Lainnya
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Formulir Request Demo & Konsultasi
                      </h3>
                      <p className="text-xs text-gray-400">
                        Data tersimpan aman dengan proteksi database PostgreSQL & RLS.
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Step 1 of 1
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* 2 Column: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Nama Lengkap PIC *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Hendra Pratama"
                          className="w-full pl-10 pr-3.5 py-3 bg-[#0A0A0B] border border-white/10 rounded-2xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Email Perusahaan *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. hendra@nusantara.co.id"
                          className="w-full pl-10 pr-3.5 py-3 bg-[#0A0A0B] border border-white/10 rounded-2xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2 Column: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        No. WhatsApp Aktif *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 081288990011"
                          className="w-full pl-10 pr-3.5 py-3 bg-[#0A0A0B] border border-white/10 rounded-2xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Nama Perusahaan *
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-company"
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. PT Nusantara Prima Logistik"
                          className="w-full pl-10 pr-3.5 py-3 bg-[#0A0A0B] border border-white/10 rounded-2xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Bidang / Sektor Industri
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        id="lead-business-type"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 bg-[#0A0A0B] border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      >
                        {businessTypeOptions.map((type) => (
                          <option key={type} value={type} className="bg-[#0A0A0B] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Needed Modules Checkbox Grid (Bento mini cards) */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">
                      Pilih Modul yang Ingin Diintegrasikan (Bisa Lebih dari Satu):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {moduleOptions.map((module) => {
                        const isChecked = formData.neededModules.includes(module);
                        return (
                          <button
                            type="button"
                            key={module}
                            onClick={() => handleModuleToggle(module)}
                            className={`p-3 rounded-2xl border text-left text-xs flex items-center gap-2.5 transition-all ${
                              isChecked
                                ? 'bg-blue-600/15 border-blue-500/50 text-white font-medium'
                                : 'bg-[#0A0A0B] border-white/5 text-gray-400 hover:border-white/20'
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                isChecked
                                  ? 'bg-blue-600 border-blue-500 text-white'
                                  : 'border-gray-700 bg-gray-900'
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

                  {/* Notes / Special Request */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Catatan Masalah Alur Kerja / Kebutuhan Khusus
                    </label>
                    <textarea
                      id="lead-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Ceritakan kendala sistem Anda saat ini (contoh: stok gudang sering selisih, approval kas masih via kertas, laporan laba rugi terlambat 2 minggu)..."
                      className="w-full p-3.5 bg-[#0A0A0B] border border-white/10 rounded-2xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    id="btn-submit-lead"
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Menyimpan ke Database satupintu.id...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Permintaan Demo & Konsultasi Arsitektur</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Kerahasiaan NDA data bisnis Anda dijamin 100% aman.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
