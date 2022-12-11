

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default {
  "project_root": dirname(fileURLToPath(import.meta.url)),
  "data_dir": "./src/data",
  "homepage": "akiyamka.github.io"
}