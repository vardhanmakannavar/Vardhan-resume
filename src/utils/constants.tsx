import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  BookOpen, 
  Briefcase, 
  Cpu, 
  Database, 
  Cloud, 
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { ExperienceItem, SkillCategory, EducationItem, Certification } from '../../types';

export const PERSONAL_INFO = {
  name: "Sagar Shah",
  credentials: "MS, PMP",
  title: "Delivery Leader & AI Program Manager",
  location: "Pune, India",
  email: "shahsagar0@gmail.com",
  phone: "+91-70307-45678",
  summary: "Seasoned delivery leader with nearly two decades of experience managing complex, multi-track technology programs across cloud, digital transformation, and enterprise platforms. Expert in driving disciplined delivery governance, building high-performing cross-functional teams, and ensuring predictable execution. Adept at steering multimillion-dollar portfolios ($15M+), optimizing cost and capacity, and aligning delivery outcomes with organizational goals.",
  status: "I-140 Approved",
  roles: [
    "Sr. Program Manager",
    "Delivery Leader",
    "AI Governance Expert",
    "Cloud Strategist",
    "Agile Practitioner"
  ]
};

export const SOCIAL_LINKS = [
  { name: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { name: 'LinkedIn', url: '#', icon: Linkedin },
  { name: 'GitHub', url: '#', icon: Github },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "AI & GenAI",
    skills: ["Agentic AI (CrewAI, LangGraph)", "LLM Orchestration", "RAG", "Human-in-the-Loop (HITL)", "Predictive Modeling", "GenAI Governance"]
  },
  {
    title: "Cloud & Platforms",
    skills: ["AWS (EC2, VPC, EKS, SNS/SQS, IAM)", "DynamoDB", "CloudFormation", ".NET / .NET Core", "Web API"]
  },
  {
    title: "Tools",
    skills: ["Jira", "MS Project", "Azure DevOps", "Workfront", "Rally", "Blueprint", "Quality Center", "Power BI"]
  },
  {
    title: "Databases & Compliance",
    skills: ["SQL", "Oracle", "DynamoDB", "PCI", "HIPAA", "SIEM", "Guardium", "ISO-aligned compliance"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Persistent Systems Limited",
    location: "Pune, India",
    role: "Sr. Program Manager (Client: Crawford)",
    period: "Dec 2021 – Present",
    highlights: [
      "Delivered a $15M enterprise program with 98% cost adherence and consistent on-time milestones, strengthening executive confidence.",
      "Spearheaded a Multi-Agent GenAI POC (using CrewAI) to detect fraudulent claims; designed Human-in-the-Loop (HITL) governance for litigation risk scoring.",
      "Established RAG-based feedback loops for continuous retraining of AI models.",
      "Oversaw platform modernization and SaaS re-architecture on AWS, improving performance by 30% and cutting hosting costs by 20%.",
      "Directed a cross-functional organization of 50+ engineers, improving team productivity and reducing delivery time by 15%.",
      "Implemented structured delivery governance with risk models, resulting in a 20% drop in critical issues."
    ]
  },
  {
    company: "London School of Digital Business",
    location: "Remote / Pune",
    role: "Chief Projects Officer",
    period: "May 2021 – Dec 2021",
    highlights: [
      "Established financial controls for project budgeting and identified cost-saving opportunities that improved annual revenue from $2M to $3.2M.",
      "Directed enterprise-wide project operations, delivery governance, and program reporting for all digital initiatives.",
      "Standardized templates, reporting structures, and review mechanisms to streamline PMO alignment."
    ]
  },
  {
    company: "Atos-Syntel Inc.",
    location: "Pune, India / USA",
    role: "Senior Project / Delivery Manager",
    period: "July 2013 – May 2021",
    highlights: [
      "Restructured the onsite team to regain an 'A' rating, focusing on long-term growth and profitability for client Ameriprise Auto & Home Insurance.",
      "Successfully purchased and installed SAN storage with a CPI of 1.2, saving $200K by exploiting purchasing opportunities.",
      "Analyzed nightly batch processes and improved batch processing time by 40%.",
      "Managed cloud migration of Auto and Home Quoting sites to AWS by automating deployment using DevOps.",
      "Led delivery of strategic projects including pricing model changes, chat tools, and frontend portal revamp (MVC/.NET)."
    ]
  },
  {
    company: "Larsen & Toubro Infotech Ltd.",
    location: "USA",
    role: "Project Manager (Client: Travelers Insurance)",
    period: "Feb 2010 – July 2013",
    highlights: [
      "Implemented batch optimization improvements that reduced processing time by 40%.",
      "Managed end-to-end delivery for enterprise insurance platforms, BI integrations, wellness portals, and migration programs.",
      "Served as Product Owner for the ICD-10 suite; managed roadmap, scope, and sprint execution."
    ]
  },
  {
    company: "Early Career Overview",
    location: "Various",
    role: "Business Analyst & Co-Owner",
    period: "2005 – 2010",
    highlights: [
      "Business Analyst | Macro Technologies, Newark, NJ (Client: Regence BCBS)",
      "Business Analyst | Siemens Healthcare, Illinois, USA",
      "Business Analyst | University of Central Florida, Orlando, FL",
      "Co-Owner | Shah N. G. Company, India"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "MS Industrial Engineering",
    institution: "University of Central Florida, USA"
  },
  {
    degree: "BS Electrical Engineering",
    institution: "Government College of Engineering, Pune, India"
  }
];

export const CERTIFICATIONS: string[] = [
  "Project Management Professional (PMP)",
  "PMI-ACP",
  "Certified Scrum Master (CSM)",
  "SAFe Practitioner",
  "AWS Cloud Practitioner",
  "ITIL V3 Foundation"
];

export const ICONS = {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  Database,
  Cloud,
  ShieldCheck,
  Terminal
};