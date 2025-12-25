
export type LocalizedStr = {
  en: string;
  zh: string;
};

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  pdfUrl?: string;
  codeUrl?: string;
  abstract?: LocalizedStr;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: LocalizedStr;
  role: 'PI' | 'Postdoc' | 'PhD' | 'Master' | 'Alumni' | 'Staff';
  image: string;
  bio: LocalizedStr;
  education?: LocalizedStr[];
  email: string;
  researchInterests: LocalizedStr[];
  socials?: {
    googleScholar?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface NewsItem {
  id: string;
  date: string;
  title: LocalizedStr;
  content: LocalizedStr;
  category: 'Award' | 'Publication' | 'Event' | 'Funding';
}

export interface ResearchArea {
  id: string;
  title: LocalizedStr;
  shortDesc: LocalizedStr;
  longDesc: LocalizedStr;
  image: string;
  keyTechnologies?: string[];
}

export interface Opening {
  id: string;
  title: LocalizedStr;
  type: 'Postdoc' | 'PhD' | 'Internship';
  deadline: LocalizedStr;
  description: LocalizedStr;
  requirements: LocalizedStr[];
}
