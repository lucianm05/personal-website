import { getProjectData } from '../../helpers/projects-util';
import { getFileData } from '../../helpers/api-util';
import { Fragment } from 'react';
import Head from 'next/head';

import ProjectDetails from '../../components/projects/project/project-details/project-details';

const ProjectDetailPage = ({ project }) => {
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

// export async function getServerSideProps(ctx) {
//   const projectSlug = ctx.params.slug;
//   const projectsData = await getFileData('locales', ctx.locale, 'projectsData.json');
//   const projectData = projectsData.find((item) => item.slug === projectSlug);
//   const projectDescription = getProjectData(projectSlug, ctx.locale);
//   // const res = await fetch(`http://localhost:3000/data/projects/${ctx.locale}/projectsData.json`);
//   // const data = await res.json();
//   // const projectData = data.find((item) => item.slug === projectSlug);

//   const project = {
//     ...projectData,
//     ...projectDescription,
//   };

//   return {
//     props: {
//       project: project,
//     },
//   };
// }

export async function getStaticProps(ctx) {
  const projectSlug = ctx.params.slug;
  console.log(ctx);
  const projectsData = await getFileData('locales', ctx.locale, 'projectsData.json');
  const projectData = projectsData.find((item) => item.slug === projectSlug);
  const projectDescription = getProjectData(projectSlug, ctx.locale);

  const project = {
    ...projectData,
    ...projectDescription,
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
        slug: item.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: 'blocking',
  };
}
