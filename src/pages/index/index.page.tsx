import './variables.css';
import { Header } from './Header';
import { Contacts } from './Contacts';
import { Skills } from './Skills';
import { Languages } from './Languages';
import { Experience } from './Experience';
import s from './style.module.css';
import type { PageProps } from '~types';
import { GridClassList } from './types';
import { Education } from './Education';

const defaultClassList = (container: string): GridClassList => ({
  container,
  header: s.header,
  content: s.cell,
});

function MainPage({ resume, lastUpdateDate }: PageProps) {
  return (
    <div id="index-page">
    <article class={s.resumeGrid}>
      <Header classes={defaultClassList(s.top)} heading={resume.name} subheading={resume.job_title} />
      <Contacts classes={defaultClassList(s.top)} contacts={resume.contacts} />
      <Experience classes={defaultClassList(s.left)} experience={resume.experience} />
      <Skills classes={defaultClassList(s.right)} skills={resume.skills} />
      <Education classes={defaultClassList(s.left)} education={resume.education} />
      <Languages classes={defaultClassList(s.right)} languages={resume.languages} />
    </article>
    <footer class={s.footer}>
      {/* <span>Download as PDF or JSON Resume</span> */}
      <span style={{ 'margin': 'auto' }}>Last Update: {lastUpdateDate.toLocaleString()}</span>
    </footer>
  </div>
  );
}

export { MainPage as Page };
