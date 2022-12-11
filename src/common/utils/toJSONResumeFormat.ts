import { Resume } from '~types';
import { ResumeSchema as JSONResume } from '@supastuff/json-resume-types';
import config from '~config';

/* https://jsonresume.org/ */
export function toJSONResumeFormat(r: Resume): JSONResume {
  return {
    basics: {
      name: r.name,
      label: r.job_title,
      image: r.photo,
      email: r.contacts.find(c => c.type === 'email')?.value ?? 'hidden',
      phone: 'hidden',
      url: config.data_dir,
      summary: "",
      location: {
        postalCode: r.location.postalCode,
        city: r.location.city,
        address: r.location.address,
        countryCode: r.location.country,
      },
      profiles: r.contacts.filter(c => c.type === 'social').map(c => ({
        network: c.label,
        url: c.link,
        username: c.value
      })),
      work: r.experience.periods.map(e => ({

      }))
    }
  }
}
