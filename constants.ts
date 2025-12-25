
import { Publication, TeamMember, NewsItem, ResearchArea, Opening } from './types';

export const LAB_NAME = "Intelligent Systems Lab (ISL)";
export const PI_NAME = "Prof. Alexander Vance";

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: '1',
    title: "Neuro-Symbolic Learning",
    shortDesc: "Bridging the gap between deep learning and symbolic reasoning for robust AI.",
    longDesc: "Our work focuses on integrating logic-based reasoning with neural networks. We aim to create systems that can learn from data while adhering to formal rules and common sense, leading to more interpretable and reliable artificial intelligence.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    keyTechnologies: ["PyTorch", "Logic Programming", "Knowledge Graphs", "Probabilistic Reasoning"]
  },
  {
    id: '2',
    title: "Autonomous Robotics",
    shortDesc: "Developing perception and control algorithms for multi-agent robotic systems.",
    longDesc: "We explore how swarms of robots can coordinate in unstructured environments. Our research includes decentralized SLAM, cooperative path planning, and robust human-robot interaction using advanced computer vision techniques.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    keyTechnologies: ["ROS 2", "C++", "LiDAR SLAM", "Reinforcement Learning"]
  },
  {
    id: '3',
    title: "Quantum AI Optimization",
    shortDesc: "Leveraging near-term quantum hardware for complex AI and combinatorial problems.",
    longDesc: "As quantum hardware matures, we investigate hybrid classical-quantum algorithms to solve logistics and material science optimization problems that are currently intractable for classical supercomputers.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    keyTechnologies: ["Qiskit", "Quantum Annealing", "QAOA", "Combinatorial Math"]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'pi',
    name: "Prof. Alexander Vance",
    role: 'PI',
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Prof. Vance is a leading expert in Neuro-Symbolic AI with over 20 years of experience. He received his PhD from MIT and previously worked at DeepMind.",
    education: [
      "PhD in Computer Science, MIT (2005)",
      "MS in Mathematics, Stanford University (2001)",
      "BS in Computer Science, UC Berkeley (1999)"
    ],
    email: "a.vance@university.edu",
    researchInterests: ["AI Safety", "Reasoning", "Cognitive Science"],
    socials: { googleScholar: "#", twitter: "#", linkedin: "#", website: "https://vance-lab.com" }
  },
  {
    id: 'm1',
    name: "Dr. Elena Rossi",
    role: 'Postdoc',
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Focusing on robot-human collaboration and safe motion planning in dense environments.",
    education: ["PhD, ETH Zurich (2022)", "MS, University of Rome (2018)"],
    email: "e.rossi@university.edu",
    researchInterests: ["HRI", "Motion Planning", "Optimal Control"],
    socials: { github: "#", twitter: "#", linkedin: "#" }
  },
  {
    id: 'm2',
    name: "Li Wei",
    role: 'PhD',
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Working on graph neural networks for chemical discovery and material property prediction.",
    education: ["BS, Tsinghua University (2021)"],
    email: "l.wei@university.edu",
    researchInterests: ["GNNs", "Bioinformatics", "Drug Discovery"],
    socials: { github: "#", website: "#" }
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: "Towards a Unified Theory of Neuro-Symbolic Integration",
    authors: ["A. Vance", "E. Rossi", "J. Smith"],
    journal: "Nature Machine Intelligence",
    year: 2024,
    doi: "10.1038/s42256-024-00123",
    tags: ["Theory", "Neuro-Symbolic"],
    abstract: "This paper presents a novel framework for mapping symbolic logic gates directly into neural architectures. We demonstrate that our approach maintains high accuracy on vision tasks while allowing for formal verification of logical constraints, effectively solving the black-box problem in critical AI applications."
  },
  {
    id: 'p2',
    title: "Swarm Intelligence in Dynamic Urban Environments",
    authors: ["E. Rossi", "M. Chen", "A. Vance"],
    journal: "IEEE Transactions on Robotics",
    year: 2023,
    doi: "10.1109/TRO.2023.987654",
    tags: ["Robotics", "Swarms"],
    abstract: "We introduce a decentralized control law that ensures collision avoidance in high-density pedestrian zones. Using multi-agent reinforcement learning combined with safety certificates, our robots achieve a 40% improvement in navigation efficiency compared to traditional potential field methods."
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: "2024-12-15",
    title: "NSF Career Award for Prof. Vance",
    content: "Prof. Alexander Vance has been awarded the prestigious NSF Career Award for his groundbreaking project on Interpretable AI architectures.",
    category: "Award"
  },
  {
    id: 'n2',
    date: "2024-11-20",
    title: "Our paper accepted at ICLR 2025",
    content: "Our work on 'Logic-Aware Transformers' has been accepted as an oral presentation at ICLR 2025 in Singapore.",
    category: "Publication"
  }
];

export const OPENINGS: Opening[] = [
  {
    id: 'o1',
    title: "Postdoctoral Fellow in Robotics",
    type: "Postdoc",
    deadline: "March 1st, 2025",
    description: "We are seeking a highly motivated postdoc to lead our swarm robotics initiative. You will oversee experiments with our custom-built drone fleet.",
    requirements: ["PhD in CS/Robotics", "Strong C++/Python skills", "Proven track record in TRO/ICRA/IROS", "Experience with ROS 2"]
  },
  {
    id: 'o2',
    title: "PhD Positions in Neuro-Symbolic AI",
    type: "PhD",
    deadline: "Rolling",
    description: "Join us to explore the intersection of logic and deep learning. Candidates should have a strong background in mathematics and algorithm design.",
    requirements: ["Excellent academic record", "Strong mathematical background (Linear Algebra, Logic)", "Curiosity", "Prior research experience is a plus"]
  }
];
