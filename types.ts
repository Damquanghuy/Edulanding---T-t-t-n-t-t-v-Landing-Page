import { LucideIcon } from 'lucide-react';

export enum SectionId {
  INTRO = 'intro',
  THEORY = 'theory',
  DESIGN = 'design',
  MOBILE = 'mobile',
  TESTING = 'testing',
  VIDEO = 'video',
  TOOLS = 'tools',
  CASES = 'cases',
  ROADMAP = 'roadmap',
  CHECKLIST = 'checklist'
}

export interface NavItem {
  id: SectionId;
  title: string;
  icon: LucideIcon;
}

export interface ChecklistItem {
  id: string;
  text: string;
  category: string;
}
