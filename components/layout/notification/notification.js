import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/notification.module.css';
import IconHappy from '../../ui/icons/icon-happy';
import IconSad from '../../ui/icons/icon-sad';
import { notificationActions } from '../../../store/notification';

const Notification = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [loadingBarInAnimation, setLoadingBarInAnimation] = useState(false);

  const showNotification = useSelector((state) => state.notification.showNotification);
  const status = useSelector((state) => state.notification.status);
  const title = useSelector((state) => state.notification.title);
  const message = useSelector((state) => state.notification.message);
  const transformedMessage = message.split('\n');

  const toggleNotificationHandler = () => {
    dispatch(
      notificationActions.toggle({
        showNotification: false,
        status,
        title,
        message,
      })
    );
    setLoadingBarInAnimation(false);
  };

  useEffect(() => {
    if (showNotification) {
      setLoadingBarInAnimation(true);
      const timer = setTimeout(() => {
        toggleNotificationHandler();
        return () => {
          clearTimeout(timer);
        };
      }, 10000);
    }
  }, [showNotification]);

  return (
    <div className={classes.NotificationContainer + ' ' + (showNotification ? classes.NotificationContainerActive : '')}>
      <div className={classes.Notification + ' ' + (status === 'success' ? classes.NotificationSuccess : status === 'error' ? classes.NotificationError : '')}>
        <div className={classes.NotificationTitle}>
          {status === 'success' && <IconHappy />}
          {status === 'error' && <IconSad />}
          <p>{title}</p>
        </div>
        <div className={classes.NotificationMessage}>
          {transformedMessage.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
        <button onClick={toggleNotificationHandler} className={classes.NotificationCloseButton} type='button' aria-label={t('common:notificationCloseButtonLabel')}>
          {t('common:notificationCloseButtonText')}
        </button>
        <div className={classes.NotificationLoadingBar + ' ' + (loadingBarInAnimation ? classes.NotificationLoadingBarInAnimation : '')}></div>
      </div>
    </div>
  );
};

export default Notification;
