import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { SqlSchemaModal } from './components/modals/SqlSchemaModal';
import { ClientPortalModal } from './components/modals/ClientPortalModal';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { ERPModuleKey, Lead } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [selectedModule, setSelectedModule] = useState<ERPModuleKey>('finance');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSchemaModalOpen, setIsSchemaModalOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenConsultation = () => {
    setIsConsultModalOpen(true);
  };

  const handleSelectModuleAndScroll = (key: ERPModuleKey) => {
    setSelectedModule(key);
    const moduleNames: Record<ERPModuleKey, string> = {
      marketing: 'Divisi Marketing',
      finance: 'Divisi Keuangan',
      production: 'Divisi Produksi',
      hr: 'Divisi SDM',
    };
    setToastMessage(`Menampilkan detail solusi untuk ${moduleNames[key]}.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLeadSubmitted = (lead: Lead) => {
    setToastMessage(`Permintaan konsultasi untuk "${lead.companyName}" berhasil dikirim! Tim kami akan menghubungi via WhatsApp.`);
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white flex flex-col relative">
      
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 p-4 rounded-xl bg-white border border-blue-200 text-slate-800 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-3 duration-300 max-w-md">
          <CheckCircle2 className="w-5 h-5 text-[#1B6EF3] shrink-0" />
          <p className="text-xs font-semibold">{toastMessage}</p>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg ml-auto"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Home Page Component */}
      <HomePage
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenSchema={() => setIsSchemaModalOpen(true)}
        onScrollToDemo={handleOpenConsultation}
        onSelectModule={handleSelectModuleAndScroll}
      />

      {/* Client Portal Login & Dashboard Modal (Full Functional Area) */}
      <ClientPortalModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Database Schema & Next.js Architecture Blueprint Modal */}
      <SqlSchemaModal
        isOpen={isSchemaModalOpen}
        onClose={() => setIsSchemaModalOpen(false)}
      />

      {/* Consultation & Demo Request Form Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        onLeadSubmitted={handleLeadSubmitted}
      />

    </div>
  );
}
