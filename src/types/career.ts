import { LucideIcon } from 'lucide-react';

export interface Job {
  id: number;
  role: string;
  type: string;
  location: string;
  category: string;
  salary: string;
  tags: string[];
}

export interface Perk {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}