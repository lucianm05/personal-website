// import { getProjectData } from '../../helpers/projects-util';
import { getFileData } from '../../helpers/api-util';
import { Fragment } from 'react';
import Head from 'next/head';

import ProjectDetails from '../../components/projects/project/project-details/project-details';

const ProjectDetailPage = ({ project }) => {
  const content = project.content.split('\n');

  return (
    <Fragment>
      <Head>
        <title>{project.title}</title>
        <meta name='description' content={content} />
      </Head>
      <ProjectDetails project={project} content={content} />
    </Fragment>
  );
};

export default ProjectDetailPage;

export async function getStaticProps(ctx) {
  const projectSlug = ctx.params.slug[0];
  const projectsData = await getFileData('locales', ctx.locale, 'projectsData.json');
  const projectData = projectsData.find((item) => item.slug === projectSlug);
  // const projectDescription = getProjectData(projectSlug, ctx.locale);

  const project = {
    ...projectData,
    // ...projectDescription,
  };

  return {
    props: {
      project: project,
    },
  };
}

export async function getStaticPaths() {
  const projectsData = await getFileData('locales', 'en', 'projectsData.json');
  const paths = projectsData.map((item) => {
    return {
      params: {
        slug: [item.slug],
      },
    };
  });

  return {
    paths: paths,
    fallback: 'blocking',
  };
}
