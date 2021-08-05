import { Fragment } from 'react';

import Navigation from './navigation/navigation';
import LanguagePicker from './language-picker/language-picker';
import Notification from './notification/notification';

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <LanguagePicker />
      <Notification />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
