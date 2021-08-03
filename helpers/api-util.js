import fs from 'fs';
import path from 'path';

export const getFileData = async (...args) => {
  const filePath = path.join(process.cwd(), ...args);
  const fileData = await fs.readFileSync(filePath);
  const data = await JSON.parse(fileData);

  return data;
};
