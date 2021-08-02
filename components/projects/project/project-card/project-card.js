import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/project-card.module.css';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  console.log(project.link);

  return (
    <div className={classes.ProjectCard}>
      <Link href={project.link}>
        <a className={classes.ProjectCardImage} aria-label={project.title} target='_blank' rel='noreferrer noopener'>
          <Image src={project.image} alt={project.title} width={751} height={393} />
        </a>
      </Link>
      <div className={classes.ProjectCardText}>
        <h3>{project.title}</h3>
      </div>
      <Link href={`/projects`}>
        <a className={'SecondaryButton' + ' ' + classes.ProjectCardButton} aria-label={t('common:detailsButtonLabel')}>
          {t('common:detailsButtonText')}
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
