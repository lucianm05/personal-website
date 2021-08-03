import { Fragment } from 'react';
import { getFileData } from '../helpers/api-util';

import Homepage from '../components/homepage/homepage';

const IndexPage = ({ chronologyData, projectsData }) => {
  return (
    <Fragment>
      <Homepage chronologyData={chronologyData} latestProject={projectsData[0]} />
    </Fragment>
  );
};

export default IndexPage;

export async function getStaticProps(ctx) {
  const chronologyData = await getFileData('locales', ctx.locale, 'chronologyData.json');
  const projectsData = await getFileData('locales', ctx.locale, 'projectsData.json');

  return {
    props: {
      chronologyData: chronologyData,
      projectsData: projectsData,
    },
    revalidate: 43200,
  };
}
