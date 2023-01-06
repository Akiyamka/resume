export function omitUndefinedProps(obj: Record<string, any>) {
  const cleanedObject = { ...obj };
  for (const prop in cleanedObject) {
    if (cleanedObject[prop] === undefined) {
      delete cleanedObject[prop];
    }
  }
  return cleanedObject;
}