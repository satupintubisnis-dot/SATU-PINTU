export type UserRole = 'admin' | 'client';

export interface Profile {
  id: string;
  email: string;
  fullName: string;
  companyName: string;
  phoneNumber?: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
}

export type ProjectStatus = 'discovery' | 'design' | 'development' | 'testing' | 'deployed' | 'maintenance';

export interface Project {
  id: string;
  clientId: string;
  clientName: string;
  companyName: string;
  title: string;
  slug: string;
  description: string;
  modules: ERPModuleKey[];
  status: ProjectStatus;
  progressPercentage: number;
  startDate: string;
  targetLaunchDate: string;
  stagingUrl?: string;
  repositoryUrl?: string;
  leadArchitect: {
    name: string;
    role: string;
    avatar: string;
  };
}

export type MilestoneStatus = 'pending' | 'in_progress' | 'completed' | 'blocked';

export interface ProjectMilestone {
  id: string;
  projectId: string;
  title: string;
  description: string;
  sequenceOrder: number;
  status: MilestoneStatus;
  dueDate: string;
  completedAt?: string;
  deliverables?: string[];
}

export type LeadStatus = 'new' | 'contacted' | 'demo_scheduled' | 'proposal_sent' | 'won' | 'lost';

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  businessType: string;
  neededModules: string[];
  notes: string;
  status?: LeadStatus;
  createdAt?: string;
}

export type ERPModuleKey = 'marketing' | 'finance' | 'production' | 'hr';

export interface ERPModuleInfo {
  key: ERPModuleKey;
  name: string;
  tagline: string;
  icon: string;
  accentColor: string;
  badge: string;
  description: string;
  features: string[];
  metrics: {
    label: string;
    value: string;
    trend: string;
  }[];
  mockDataSnippet: {
    title: string;
    items: { label: string; value: string; status?: 'success' | 'warning' | 'info' }[];
  };
}
