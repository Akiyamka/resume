import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';

export const relativePath = path => resolve(dirname(fileURLToPath(import.meta.url)), path);