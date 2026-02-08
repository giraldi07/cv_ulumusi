import { Heart, Coffee, Star, Users } from 'lucide-react';
import { Job, Perk } from '../types/career';

export const JOBS_DATA: Job[] = [
  {
    id: 1,
    role: "Fleet Operations Manager",
    type: "Full-time",
    location: "Serang, Banten",
    category: "Operations",
    salary: "Competitive",
    tags: ["Leadership", "Logistics"]
  },
  {
    id: 2,
    role: "Senior Fullstack Developer",
    type: "Remote / Hybrid",
    location: "Jakarta",
    category: "Technology",
    salary: "Top Tier",
    tags: ["React", "Node.js"]
  },
  {
    id: 3,
    role: "Supply Chain Analyst",
    type: "Full-time",
    location: "Tangerang",
    category: "Logistics",
    salary: "Competitive",
    tags: ["Data", "Efficiency"]
  }
];

export const PERKS_DATA: Perk[] = [
  { 
    icon: Heart, 
    title: "Wellness Package", 
    desc: "Asuransi kesehatan menyeluruh untuk Anda dan keluarga.",
    color: "bg-red-500/10 text-red-600"
  },
  { 
    icon: Coffee, 
    title: "Kultur Dinamis", 
    desc: "Lingkungan kerja yang suportif, modern, dan tanpa sekat birokrasi.",
    color: "bg-orange-500/10 text-orange-600"
  },
  { 
    icon: Star, 
    title: "Growth Path", 
    desc: "Program pelatihan dan jenjang karir yang terukur secara transparan.",
    color: "bg-amber-500/10 text-amber-600"
  },
  { 
    icon: Users, 
    title: "Tim Hebat", 
    desc: "Bekerja bersama talenta terbaik di industri logistik Indonesia.",
    color: "bg-blue-500/10 text-blue-600"
  },
];