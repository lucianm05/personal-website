import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

export const getProjectData = (projectIdentifier, locale) => {
  const projectSlug = projectIdentifier.replace(/\.md$/, '');

  const filePath = path.join(process.cwd(), 'data', 'projects', locale, `${projectSlug}.md`);
  const fileData = fs.readFileSync(filePath);
  const { data, content } = matter(fileData);

  const projectData = {
    slug: projectSlug,
    ...data,
    content,
  };

  return projectData;
};
