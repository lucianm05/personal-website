import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import IconPDF from '../icon-pdf';

const ButtonCv = ({ lang }) => {
  const { t } = useTranslation();

  return (
    <Link href={`/cv/[${lang}] CV Manea Lucian George.pdf`}>
      <a aria-label={t('common:cvButtonLabel')} title={t('common:cvButtonLabel')} target='_blank' rel='noreferrer noopener'>
        <IconPDF />
      </a>
    </Link>
  );
};

export default ButtonCv;
