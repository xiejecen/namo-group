
import { Publication, TeamMember, NewsItem, ResearchArea, Opening, LocalizedStr } from './types';
import { IMAGES } from './assets';

export const LAB_NAME: LocalizedStr = {
  zh: "天津大学纳米及复合材料研究所",
  en: "Institute of Nanomaterials and Composite Materials, TJU"
};

export const PI_NAME: LocalizedStr = {
  zh: "张教授",
  en: "Prof. Zhang"
};

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: '1',
    title: { zh: "高性能碳纳米材料", en: "High-Performance Carbon Nanomaterials" },
    shortDesc: { zh: "探索碳纳米管与石墨烯在极端环境下的力学与电学性能。", en: "Exploring mechanical and electrical properties of CNTs and graphene in extreme environments." },
    longDesc: { 
      zh: "本研究方向致力于通过化学气相沉积（CVD）法精确控制纳米材料的微观结构，开发具有高导电性和超高强度的复合材料，应用于航空航天及新一代电子器件。", 
      en: "This research focus is dedicated to precise microstructural control of nanomaterials via CVD, developing composites with high conductivity and ultra-high strength for aerospace and next-gen electronics." 
    },
    image: IMAGES.research.neuro,
    keyTechnologies: ["CVD", "TEM", "Raman Spectroscopy", "Nano-indentation"]
  },
  {
    id: '2',
    title: { zh: "智能多功能复合材料", en: "Smart Multi-functional Composites" },
    shortDesc: { zh: "设计具有自修复与传感功能的仿生复合材料。", en: "Designing biomimetic composites with self-healing and sensing capabilities." },
    longDesc: { 
      zh: "受生物组织启发，我们开发了能够感知损伤并自动修复的聚合物基纳米复合材料，显著提升了结构材料的可靠性与使用寿命。", 
      en: "Inspired by biological tissues, we develop polymer-based nanocomposites capable of damage sensing and automatic healing, significantly enhancing reliability and lifespan." 
    },
    image: IMAGES.research.robotics,
    keyTechnologies: ["Self-healing", "3D Printing", "Polymer Chemistry"]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'pi',
    name: { zh: "张纳米 教授", en: "Prof. Nami Zhang" },
    role: 'PI',
    image: IMAGES.team.pi,
    bio: { 
      zh: "张教授是纳米材料领域的杰出学者，拥有超过150篇高水平论文。目前担任研究所所长，致力于推动先进材料的工业化应用。", 
      en: "Prof. Zhang is a distinguished scholar in nanomaterials with over 150 high-impact papers. Currently serving as the Institute Director." 
    },
    education: [
      { zh: "博士, 清华大学 (2008)", en: "PhD, Tsinghua University (2008)" },
      { zh: "学士, 天津大学 (2003)", en: "BS, Tianjin University (2003)" }
    ],
    email: "zhang_nami@tju.edu.cn",
    researchInterests: [
      { zh: "纳米力学", en: "Nanomechanics" },
      { zh: "界面科学", en: "Interface Science" }
    ],
    socials: { googleScholar: "#", website: "https://tju.edu.cn/faculty/zhang" }
  },
  {
    id: 'm1',
    name: { zh: "李思明 博士", en: "Dr. Siming Li" },
    role: 'Postdoc',
    image: IMAGES.team.m1,
    bio: { 
      zh: "主要研究方向为石墨烯基电磁屏蔽材料。", 
      en: "Focusing on graphene-based electromagnetic shielding materials." 
    },
    education: [{ zh: "博士, 北京航空航天大学 (2023)", en: "PhD, Beihang University (2023)" }],
    email: "li_siming@tju.edu.cn",
    researchInterests: [
      { zh: "电磁干扰屏蔽", en: "EMI Shielding" }
    ],
    socials: { github: "#" }
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: "Ultra-strong graphene-reinforced epoxy composites via interface engineering",
    authors: ["N. Zhang", "S. Li", "W. Wang"],
    journal: "Advanced Materials",
    year: 2024,
    doi: "10.1002/adma.20240001",
    tags: ["Graphene", "Composite", "High Strength"],
    abstract: {
      zh: "本研究通过表面改性在石墨烯与环氧树脂之间建立了牢固的共价键，实现了材料强度的翻倍。",
      en: "This study established robust covalent bonds between graphene and epoxy resin through surface modification, doubling the material strength."
    }
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: "2025-01-20",
    title: { zh: "研究所获批国家自然科学基金重点项目", en: "Institute awarded major NSFC grant" },
    content: { 
      zh: "该项目将聚焦于可持续纳米材料的研发与应用。", 
      en: "The project will focus on the R&D and application of sustainable nanomaterials." 
    },
    category: "Funding"
  }
];

export const OPENINGS: Opening[] = [
  {
    id: 'o1',
    title: { zh: "博士后招聘：微纳制造方向", en: "Postdoc Opening: Micro-Nano Manufacturing" },
    type: "Postdoc",
    deadline: { zh: "2025年6月", en: "June 2025" },
    description: { 
      zh: "我们正在寻找在精密仪器或纳米制造领域有经验的博士后研究员。", 
      en: "We are seeking a postdoc with experience in precision instruments or nanomanufacturing." 
    },
    requirements: [
      { zh: "具有相关学科博士学位", en: "PhD in relevant disciplines" },
      { zh: "良好的中英文沟通能力", en: "Strong communication in CN/EN" }
    ]
  }
];
