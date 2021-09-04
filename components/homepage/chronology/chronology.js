import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

import classes from '/styles/chronology.module.css';
import ChronologyItem from './chronology-item';

const Chronology = ({ chronologyData, isMobileDevice, animateChronology }) => {
  const { t } = useTranslation();
  const [animateFirstRightLine, setAnimateFirstRightLine] = useState(false);
  const [animatedFirstRightLine, setAnimatedFirstRightLine] = useState(false);
  const [animateFirstLeftLine, setAnimateFirstLeftLine] = useState(false);
  const [animatedFirstLeftLine, setAnimatedFirstLeftLine] = useState(false);
  const [animateTBC, setAnimateTBC] = useState(false);
  const [animatedTBC, setAnimatedTBC] = useState(false);

  if (animateChronology) {
    setTimeout(() => {
      setAnimateFirstRightLine(true);
      setTimeout(() => {
        setAnimatedFirstRightLine(true);
      }, 1450);
    }, 1500 * 4);

    setTimeout(() => {
      setAnimateFirstLeftLine(true);
      setTimeout(() => {
        setAnimatedFirstLeftLine(true);
      }, 1450);
    }, 1500 * 9);

    setTimeout(() => {
      setAnimateTBC(true);
      setTimeout(() => {
        setAnimatedTBC(true);
      }, 1450);
    }, 1500 * (isMobileDevice ? chronologyData.length : chronologyData.length + 2));
  }

  return (
    <section className={classes.ChronologyContainer}>
      <h2>{t('chronology:title')}</h2>
      <div className={classes.Chronology}>
        {chronologyData.map((item, index) => (
          <ChronologyItem key={index} date={item.date} text={item.text} tech={item.tech} index={index} isMobileDevice={isMobileDevice} animateChronology={animateChronology} largerLine={index === 7} />
        ))}
        <div className={classes.ChronologyTBCContainer}>
          <i className={classes.TBCText + ' ' + (animateTBC ? classes.TBCTextInAnimation : '') + ' ' + (animatedTBC ? classes.TBCTextActive : '')}>{t('chronology:finalText')}</i>
          <div className={classes.ChronologyTBC + ' ' + (animateTBC ? classes.ChronologyTBCInAnimation : '') + ' ' + (animatedTBC ? classes.ChronologyTBCActive : '')}>&nbsp;</div>
        </div>
        <div className={classes.ChronologyDesktopFirstRightLine + ' ' + (animateFirstRightLine ? classes.ChronologyDesktopFirstRightLineInAnimation : '') + ' ' + (animatedFirstRightLine ? classes.ChronologyDesktopFirstRightLineActive : '')}>&nbsp;</div>
        <div className={classes.ChronologyDesktopFirstLeftLine + ' ' + (animateFirstLeftLine ? classes.ChronologyDesktopFirstLeftLineInAnimation : '') + ' ' + (animatedFirstLeftLine ? classes.ChronologyDesktopFirstLeftLineActive : '')}>&nbsp;</div>
      </div>
    </section>
  );
};

export default Chronology;
