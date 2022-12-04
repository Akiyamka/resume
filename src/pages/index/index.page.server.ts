import { PageContext, PageProps, Resume } from '~types';
import fs from 'node:fs/promises';
import path from 'node:path';
import config from '../../../config';

// import resume from '~data/resume.json';

/* `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here. */
export async function onBeforeRender(pageContext: PageContext) {
  const resumePath = path.resolve(config.data_dir, 'resume.json');
  const [resume, stat] = await Promise.all([
    JSON.parse(await fs.readFile(resumePath, { encoding: 'utf-8' })) as Resume,
    fs.stat(resumePath),
  ]);
  const pageProps: PageProps = { resume, lastUpdateDate: new Date(stat.mtimeMs) };
  return {
    pageContext: {
      pageProps,
    },
  };
}
