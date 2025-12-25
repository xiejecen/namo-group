
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  pdfUrl?: string;
  codeUrl?: string;
  abstract?: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'PI' | 'Postdoc' | 'PhD' | 'Master' | 'Alumni' | 'Staff';
  image: string;
  bio: string;
  education?: string[]; // 新增：教育背景
  email: string;
  researchInterests: string[];
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
  title: string;
  content: string;
  category: 'Award' | 'Publication' | 'Event' | 'Funding';
}

export interface ResearchArea {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  keyTechnologies?: string[]; // 新增：关键技术标签
}

export interface Opening {
  id: string;
  title: string;
  type: 'Postdoc' | 'PhD' | 'Internship';
  deadline: string;
  description: string;
  requirements: string[];
}
