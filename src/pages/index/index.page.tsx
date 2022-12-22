import { Header } from './Header';
import { Contacts } from './Contacts';
import { Skills } from './Skills';
import { Languages } from './Languages';
import { Experience } from './Experience';
import s from './style.module.css';
import type { PageProps } from '~types';
import { GridClassList } from './types';
import { Education } from './Education';
import { ThemeProvider, themes, theme, setTheme } from './Context/ThemeContext';

import './variables.css';

const defaultClassList = (container: string): GridClassList => ({
  container,
  header: s.header,
  content: s.cell,
});

const onSwitchTheme = () => {
  theme() === 'light' ? setTheme(themes.dark) : setTheme(themes.light);
}

function MainPage({ resume, lastUpdateDate }: PageProps) {
  return (
    <ThemeProvider>
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
        <span>Download as PDF or JSON Resume</span>
        <span onClick={onSwitchTheme}>Switch theme</span>
        <span style={{ 'margin-left': 'auto' }}>Last Update: {lastUpdateDate.toLocaleString()}</span>
      </footer>
    </div>
    </ThemeProvider>
  );
}

export { MainPage as Page };