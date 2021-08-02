import { Fragment } from 'react';

import Navigation from './navigation/navigation';
import LanguagePicker from './language-picker/language-picker';

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <LanguagePicker />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
