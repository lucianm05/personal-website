import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/projects.module.css';
import ProjectCard from './project/project-card/project-card';

const Projects = ({ projectsData }) => {
  const { t } = useTranslation();

  return (
    <section className={classes.ProjectsContainer}>
      <h2>{t('projects:projectsPageTitle')}</h2>
      <div className={classes.Projects}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
