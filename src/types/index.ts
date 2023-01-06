import type { Component } from 'preact';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';
export type PageProps = {
  resume: Resume;
  lastUpdateDate: Date;
};

export type PageContext = PageContextBuiltIn & {
  Page: (pageProps: PageProps) => Component;
  pageProps: PageProps;
  documentProps?: {
    title?: string
    description?: string
  }
}

export type Resume = {
  name: string;
  photo?: string;
  location: Location,
  job_title: string;
  contacts: Contact[];
  skills: Skill[];
  languages: Language[];
  experience: Experience;
  education: Education;
};

export type Education = {
  periods: EducationPeriod[];
};

export type Experience = {
  periods: WorkPeriod[];
};

export type EducationPeriod = {
  educational_facility: string;
  specialty: string;
  homepage?: string;
  date_start: string;
  date_end?: string;
};

export type WorkPeriod = {
  company_name: string;
  position: string;
  domain: string[];
  homepage?: string;
  date_start: string;
  date_end?: string;
  responsibilities: string[];
  tech_stack: string[];
  summary?: string;
};

export type Contact = {
  link?: string;
  value: string;
  label: string;
  type: 'email' | 'social' | 'phone' | 'messenger';
};

export type Location = {
  postalCode: string;
  city: string;
  country: string;
  address?: string;
  link?: string;
};

export type SkillLevel = 'intermediate' | 'experienced' | 'advanced' | 'expert';

export type Skill = {
  title: string;
  level: SkillLevel;
  tip?: string;
};

export type LanguageSkill = 'native' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';

export type Language = {
  title: string;
  level: LanguageSkill;
};
