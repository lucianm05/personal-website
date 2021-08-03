import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/project-card.module.css';
import IconDetails from '../../../ui/icons/icon-details';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.ProjectCard}>
      <Link href={project.link}>
        <a className={classes.ProjectCardImage} aria-label={project.title} target='_blank' rel='noreferrer noopener'>
          <Image src={project.image} alt={project.title} width={600} height={315} />
        </a>
      </Link>
      <div className={classes.ProjectCardText}>
        <h3>{project.title}</h3>
      </div>
      <Link href={`/projects/${project.slug}`}>
        <a className={'SecondaryButton' + ' ' + classes.ProjectCardButton} aria-label={t('common:detailsButtonLabel')}>
          <IconDetails />
          {t('common:detailsButtonText')}
        </a>
      </Link>
      <div className={classes.ProjectCardDate}>{project.date}</div>
    </div>
  );
};

export default ProjectCard;
