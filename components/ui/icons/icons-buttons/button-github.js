import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import IconGithub from '../icon-github';

const ButtonGithub = () => {
  const { t } = useTranslation();

  return (
    <Link href={t('common:githubProfileButtonLink')}>
      <a aria-label={t('common:githubProfileButtonLabel')} title={t('common:githubProfileButtonLabel')} target='_blank' rel='noreferrer noopener'>
        <IconGithub />
      </a>
    </Link>
  );
};

export default ButtonGithub;
