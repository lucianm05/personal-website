import fs from 'fs';
import path from 'path';
import { Fragment } from 'react';

import Homepage from '../components/homepage/homepage';

const IndexPage = ({ chronologyData, projectsData }) => {
  return (
    <Fragment>
      <Homepage chronologyData={chronologyData} latestProject={projectsData[projectsData.length - 1]} />
    </Fragment>
  );
};

export default IndexPage;

export async function getStaticProps(ctx) {
  const chronologyPath = path.join(process.cwd(), 'locales', ctx.locale, 'chronologyData.json');
  const chronologyFileData = await fs.readFileSync(chronologyPath);
  const chronologyData = await JSON.parse(chronologyFileData);

  const projectsPath = path.join(process.cwd(), 'locales', ctx.locale, 'projectsData.json');
  const projectsFileData = await fs.readFileSync(projectsPath);
  const projectsData = await JSON.parse(projectsFileData);

  return {
    props: {
      chronologyData: chronologyData,
      projectsData: projectsData,
    },
  };
}
