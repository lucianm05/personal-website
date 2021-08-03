import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/project-details.module.css';
import IconGithub from '../../../ui/icons/icon-github';
import IconInternet from '../../../ui/icons/icon-internet';
import IconLinkedin from '../../../ui/icons/icon-linkedin';

const ProjectDetails = ({ project }) => {
  const { t } = useTranslation();

  console.log(project);

  return (
    <section className={classes.ProjectDetailsContainer}>
      <div className={classes.ProjectDetails}>
        <h1>{project.title}</h1>
        <Link href={project.link}>
          <a className={classes.ProjectDetailsImage} aria-label={t('common:detailsButtonLabel')} target='_blank' rel='noreferrer noopener'>
            <Image src={project.image} alt={project.title} width={600} height={315} />
          </a>
        </Link>
        <ReactMarkdown className={classes.ProjectDetailsDescription}>{project.content}</ReactMarkdown>
        <div className={classes.ProjectDetailsLinks}>
          <Link href={project.link}>
            <a aria-label={t('projects:projectWebsiteButtonLabel')} target='_blank' rel='noreferrer noopener'>
              <IconInternet />
            </a>
          </Link>
          <Link href={project.github}>
            <a aria-label={t('projects:projectGithubButtonLabel')} target='_blank' rel='noreferrer noopener'>
              <IconGithub />
            </a>
          </Link>
          <Link href={t('common:linkedinButtonLink')}>
            <a aria-label={t('common:linkedinButtonLabel')} target='_blank' rel='noreferrer noopener'>
              <IconLinkedin />
            </a>
          </Link>
        </div>
        <div className={classes.ProjectDetailsDate}>
          <p>{project.date}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
