import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import Ajv from 'ajv';
import tsj from 'ts-json-schema-generator';
import { relativePath } from './utils.mjs';
import { readFileSync } from 'node:fs';

export function buildScheme(path, type) {
  const config = {
    path,
    tsconfig: './tsconfig.json',
    type,
    skipTypeCheck: true,
  };
  const schema = tsj.createGenerator(config).createSchema(config.type);
  return schema;
}

export function validate(pathToJson, schema) {
  const ajv = new Ajv();
  const valid = ajv.validate(schema, pathToJson);
  return [valid, ajv.errors];
}

function saveSchema(path, schema) {
  return writeFile(relativePath(path), JSON.stringify(schema, null, 2))
}

export async function validateJson(pathToJson, declarationFile, typeName) {
  const schema = buildScheme(declarationFile, typeName);
  const pathForScheme = resolve(pathToJson.split('json')[0], '../../data/resume.generated.schema.json')
  const savePromise = saveSchema(pathForScheme, schema);
  const [isValid, errors] = validate(JSON.parse(readFileSync(pathToJson).toString()), schema);
  try {
    await savePromise;
  } catch(e) {
    console.error('Can not save schema', e)
  }
  if (!isValid) {
    console.error(errors);
    throw Error(`${pathToJson} is not valid`);
  }
}
