import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import IconLinkedin from '../icon-linkedin';

const ButtonLinkedin = () => {
  const { t } = useTranslation();

  return (
    <Link href={t('common:linkedinButtonLink')}>
      <a aria-label={t('common:linkedinButtonLabel')} title={t('common:linkedinButtonLabel')} target='_blank' rel='noreferrer noopener'>
        <IconLinkedin />
      </a>
    </Link>
  );
};

export default ButtonLinkedin;