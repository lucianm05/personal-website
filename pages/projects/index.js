import { Fragment } from 'react';
import { getFileData } from '../../helpers/api-util';

import Projects from '../../components/projects/projects';

const ProjectsPage = ({ projectsData }) => {
  return (
    <Fragment>
      <Projects projectsData={projectsData} />
    </Fragment>
  );
};

export default ProjectsPage;

export async function getStaticProps(ctx) {
  const projectsData = await getFileData('locales', ctx.locale, 'projectsData.json');

  return {
    props: {
      projectsData: projectsData,
    },
    revalidate: 43200,
  };
}
