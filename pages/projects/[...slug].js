// import { getProjectData } from '../../helpers/projects-util';
import { getFileData } from '../../helpers/api-util';
import { Fragment } from 'react';
import Head from 'next/head';

import ProjectDetails from '../../components/projects/project/project-details/project-details';

const ProjectDetailPage = ({ project }) => {
  project.content = '';

  return (
    <Fragment>
      <Head>
        <title>{project.title}</title>
        <meta name='description' content={project.content} />
      </Head>
      <ProjectDetails project={project} />
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
    revalidate: 43200,
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
