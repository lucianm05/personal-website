import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import classes from '/styles/latest-project.module.css';
import ProjectCard from '../../projects/project/project-card/project-card';
import IconCode from '../../ui/icons/icon-code';

const LatestProject = ({ latestProject }) => {
  const { t } = useTranslation();

  return (
    <section className={classes.LatestProjectContainer}>
      <h2>{t('projects:latestProjectTitle')}</h2>
      <ProjectCard project={latestProject} />
      <Link href={'/projects'}>
        <a className={'SecondaryButton' + ' ' + classes.LatestProjectMoreButton} aria-label={t('projects:moreProjectsButtonLabel')} title={t('projects:moreProjectsButtonLabel')}>
          <IconCode />
          {t('projects:moreProjectsButtonText')}
        </a>
      </Link>
    </section>
  );
};

export default LatestProject;
