import type { Component } from 'solid-js'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
export type PageProps = {
  resume: Resume
}
export type PageContext = PageContextBuiltIn & {
  Page: (pageProps: PageProps) => Component
  pageProps: PageProps
  documentProps?: {
    title?: string
    description?: string
  }
}

export type Resume = {
  name: string;
  job_title: string;
  contacts: Contact[];
  skills: Skill[];
  languages: Language[];
  experience: Experience;
  education: Education;
}

export type Education = {
  periods: EducationPeriod[]
}

export type Experience = {
  periods: WorkPeriod[];
}

export type EducationPeriod = {
  educational_facility: string;
  specialty: string;
  homepage?: string;
  date_start: string;
  date_end?: string;
}

export type WorkPeriod = {
  company_name: string;
  domain: string[];
  homepage?: string;
  date_start: string;
  date_end?: string;
  responsibilities: string[];
  tech_stack: string[];
}

export type Contact = {
  link?: string;
  label: string;
}

export type SkillLevel = 'intermediate' | 'experienced' | 'advanced' | 'expert';

export type Skill = {
  title: string;
  level: SkillLevel;
  tip?: string;
}

export type LanguageSkill = 'native' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';

export type Language = {
  title: string;
  level: LanguageSkill;
}



