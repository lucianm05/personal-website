import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/latest-project.module.css';
import ProjectCard from '../../projects/project/project-card/project-card';

const LatestProject = ({ latestProject }) => {
  const { t } = useTranslation();

  return (
    <section className={classes.LatestProjectContainer}>
      <h2>{t('projects:latestProjectTitle')}</h2>
      <ProjectCard project={latestProject} />
    </section>
  );
};

export default LatestProject;
