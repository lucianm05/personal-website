import { Fragment } from 'react';
import { getFileData } from '../../helpers/api-util';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import Projects from '../../components/projects/projects';

const ProjectsPage = ({ projectsData }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>{t('projects:projectsPageDocumentTitle')}</title>
        <meta name='description' content={t('projects:projectsPageDescription')} />
      </Head>
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
