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
  content: s.cell
})

function MainPage({ resume }: PageProps) {
  return (
    <article class={s.resumeGrid}>
      <Header
        classes={defaultClassList(s.top)}
        heading="Alexandr Dubinin"
        subheading="Front-end developer"
      />
      <Contacts classes={defaultClassList(s.top)} contacts={resume.contacts} />
      <Experience classes={defaultClassList(s.left)} experience={resume.experience} />
      <Skills classes={defaultClassList(s.right)} skills={resume.skills} />
      <Education classes={defaultClassList(s.left)} education={{}}/>
      <Languages classes={defaultClassList(s.right)} languages={resume.languages} />
      <div class={`${s.right} ${s.cell}`}>
        <h3>Certificates</h3>
      </div>
    </article>
  );
}

export { MainPage as Page };
