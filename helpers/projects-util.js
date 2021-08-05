import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

export const getProjectData = (projectIdentifier, locale) => {
  const projectSlug = projectIdentifier;

  const filePath = path.join(process.cwd(), 'public', 'data', 'projects', locale, `${projectSlug}.md`);
  // const filePath = path.join(`/data/projects/${locale}/${projectSlug}.md`);
  const fileData = fs.readFileSync(filePath);
  const { data, content } = matter(fileData);

  const projectData = {
    slug: projectSlug,
    ...data,
    content,
  };

  return projectData;
};
