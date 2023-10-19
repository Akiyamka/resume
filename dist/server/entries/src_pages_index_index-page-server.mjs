import fs from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const config = {
  "project_root": dirname(fileURLToPath(import.meta.url)),
  "data_dir": "./src/data",
  "homepage": "akiyamka.github.io"
};

async function onBeforeRender(pageContext) {
  const resumePath = path.resolve(config.data_dir, "resume.json");
  const [resume, stat] = await Promise.all([JSON.parse(await fs.readFile(resumePath, {
    encoding: "utf-8"
  })), fs.stat(resumePath)]);
  const pageProps = {
    resume,
    lastUpdateDate: new Date(stat.mtimeMs)
  };
  return {
    pageContext: {
      pageProps
    }
  };
}

export { onBeforeRender };
