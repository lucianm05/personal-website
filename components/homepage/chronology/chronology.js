import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/chronology.module.css';
import ChronologyItem from './chronology-item';

const Chronology = ({ chronologyData }) => {
  const { t } = useTranslation();

  return (
    <section className={classes.ChronologyContainer}>
      <h2>{t('chronology:title')}</h2>
      <div className={classes.Chronology}>
        {chronologyData.map((item, index) => (
          <ChronologyItem key={index} date={item.date} text={item.text} tech={item.tech} />
        ))}
        <div className={classes.ChronologyTBCContainer}>
          <i>{t('chronology:finalText')}</i>
          <div className={classes.ChronologyTBC}>&nbsp;</div>
        </div>
        <div className={classes.ChronologyDesktopRightLine}>&nbsp;</div>
      </div>
    </section>
  );
};

export default Chronology;
