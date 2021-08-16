import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import IconEmail from '../icon-email';

const ButtonEmail = () => {
  const { t } = useTranslation();

  return (
    <Link href='mailto:lucianmg05@gmail.com'>
      <a aria-label={t('common:emailButtonLabel') + ' lucianmg05@gmail.com'} title={t('common:emailButtonLabel') + ' lucianmg05@gmail.com'} target='_blank' rel='noreferrer noopener'>
        <IconEmail />
      </a>
    </Link>
  );
};

export default ButtonEmail;
