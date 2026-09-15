import React, { useState } from 'react';
import { 
  X, 
  Code2, 
  FolderTree, 
  Copy, 
  Check, 
  Database, 
  ShieldCheck, 
  Layers, 
  Server,
  Download
} from 'lucide-react';
import { SQL_DDL_SCHEMA, NEXTJS_FOLDER_TREE } from '../../data/mockData';

interface SqlSchemaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SqlSchemaModal: React.FC<SqlSchemaModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'sql' | 'folder' | 'rls'>('sql');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentContent = activeTab === 'sql' 
    ? SQL_DDL_SCHEMA 
    : activeTab === 'folder' 
    ? NEXTJS_FOLDER_TREE
    : `-- RINGKASAN ATURAN ROW LEVEL SECURITY (RLS) SATUPINTU.ID
-- 1. profiles: Klien hanya dapat membaca profil sendiri (auth.uid() = id). Admin dapat membaca & mengelola semua profil.
-- 2. projects: Klien hanya dapat melihat proyek miliknya (client_id = auth.uid()). Admin memiliki akses CRUD penuh.
-- 3. project_milestones: Klien hanya dapat melihat milestone proyek miliknya. Admin memiliki akses CRUD penuh.
-- 4. leads: Publik (anonim) diizinkan melakukan INSERT (request demo). Hanya Admin yang diizinkan SELECT & UPDATE leads.
-- 5. triggers: on_auth_user_created otomatis menyinkronkan user baru ke tabel public.profiles.

` + SQL_DDL_SCHEMA;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0A0A0B] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141417]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">
                  Blueprint Arsitektur & Skema Database
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  STAGE 1 FOUNDATION
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Struktur Next.js App Router & Skema PostgreSQL Supabase dengan Strict RLS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-2xl bg-[#0A0A0B] hover:bg-white/5 text-gray-200 border border-white/10 transition-colors"
              title="Salin ke Clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-400" />
                  <span>Salin Skema</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-2xl hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#0A0A0B] border-b border-white/10 text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('sql')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl font-semibold transition-colors shrink-0 ${
              activeTab === 'sql'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>1. Skema PostgreSQL / Supabase (SQL DDL + RLS)</span>
          </button>

          <button
            onClick={() => setActiveTab('folder')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl font-semibold transition-colors shrink-0 ${
              activeTab === 'folder'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>2. Struktur Folder Next.js (App Router)</span>
          </button>

          <button
            onClick={() => setActiveTab('rls')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl font-semibold transition-colors shrink-0 ${
              activeTab === 'rls'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>3. Matriks Keamanan Data (RLS)</span>
          </button>
        </div>

        {/* Code Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#0A0A0B] font-mono text-xs text-gray-300 select-text leading-relaxed">
          <pre className="whitespace-pre overflow-x-auto text-[11px] sm:text-xs">
            <code>{currentContent}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-3.5 border-t border-white/10 bg-[#141417] text-xs text-gray-400 gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              Standar <strong className="text-white">Strict Data Isolation</strong>: Data antar-klien terisolasi secara kriptografis pada tingkat database engine.
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-2xl transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
