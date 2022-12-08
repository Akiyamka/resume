import { Resume } from '~types';
import { ResumeSchema as JSONResume } from '@supastuff/json-resume-types';

/* https://jsonresume.org/ */
export function toJSONResumeFormat(r: Resume): JSONResume {
  return {
    basics: {
      name: r.name,
      label: r.job_title,
      email: r.contacts.find(c => c.label === 'email')
    }
  }
}
