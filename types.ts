import React from 'react';

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  location?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}