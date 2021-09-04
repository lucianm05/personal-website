import { useState } from 'react';

import classes from '/styles/chronology-item.module.css';
import IconCalendar from '../../ui/icons/icon-calendar';
import IconHtml from '../../ui/icons/icon-html';
import IconCss from '../../ui/icons/icon-css';
import IconJavascript from '../../ui/icons/icon-javascript';
import IconNodejs from '../../ui/icons/icon-nodejs';
import IconReact from '../../ui/icons/icon-react';
import IconNextjs from '../../ui/icons/icon-nextjs';

const ChronologyItem = ({ date, text, tech, index, isMobileDevice, animateChronology, largerLine }) => {
  const [animateElement, setAnimateElement] = useState(false);
  const [animatedElement, setAnimatedElement] = useState(false);

  let multiplier;

  // Controlează ordinea în care liniile cronologiei sunt afișate
  if (isMobileDevice) {
    multiplier = index;
  } else if (!isMobileDevice) {
    multiplier = index;

    // Dacă indexul liniei este >= 4 (liniile se află pe al doilea rând), se adaugă 1 (prima linie verticală) pentru fiecare linie orizontală corespunzătoare următorului rând
    if (index >= 4) {
      multiplier += 1;
    }

    // Dacă indexul liniei este >= 8 (liniile se află pe al treilea rând), se mai adaugă 1 (a doua linie verticală) pentru fiecare linie orizontală corespunzătoarea următorului rând
    if (index >= 8) {
      multiplier += 1;
    }
  }

  if (animateChronology) {
    setTimeout(() => {
      setAnimateElement(true);
      setTimeout(() => {
        setAnimatedElement(true);
      }, 1450);
    }, 1500 * multiplier);
  }

  return (
    <div className={classes.ChronologyItem}>
      <div className={classes.ChronologyDate}>
        <p>{date}</p>
      </div>
      <div className={classes.ChronologyCalendar}>
        <div className={classes.ChronologyCalendarIcon}>
          <IconCalendar />
        </div>
      </div>
      <div className={classes.ChronologyContent}>
        <div className={classes.ChronologyCaret}>&nbsp;</div>
        <div className={classes.ChronologyText}>
          <p>{text}</p>
        </div>
        <div className={classes.ChronologyTechnologies}>
          {tech.map((tech) => {
            return tech.icon === 'html' ? (
              <IconHtml key={tech.icon} />
            ) : tech.icon === 'css' ? (
              <IconCss key={tech.icon} />
            ) : tech.icon === 'js' ? (
              <IconJavascript key={tech.icon} />
            ) : tech.icon === 'nodejs' ? (
              <IconNodejs key={tech.icon} />
            ) : tech.icon === 'react' ? (
              <IconReact key={tech.icon} />
            ) : tech.icon === 'nextjs' ? (
              <IconNextjs key={tech.icon} />
            ) : (
              ''
            );
          })}
        </div>
      </div>
      <span
        className={
          classes.ChronologyLine +
          ' ' +
          (isMobileDevice && animateElement ? classes.ChronologyLineInAnimation : !isMobileDevice && animateElement && !largerLine ? classes.ChronologyLineInAnimation : animateElement && largerLine ? classes.ChronologyLineInAnimationLarger : '') +
          ' ' +
          (isMobileDevice && animatedElement ? classes.ChronologyLineActive : !isMobileDevice && animatedElement && !largerLine ? classes.ChronologyLineActive : animatedElement && largerLine ? classes.ChronologyLineActiveLarger : '')
        }>
        &nbsp;
      </span>
    </div>
  );
};

export default ChronologyItem;
