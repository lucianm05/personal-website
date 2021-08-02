import fs from 'fs';
import path from 'path';
import { Fragment } from 'react';

import Homepage from '../components/homepage/homepage';

const IndexPage = ({ chronologyData }) => {
  return (
    <Fragment>
      <Homepage chronologyData={chronologyData} />
    </Fragment>
  );
};

export default IndexPage;

export async function getStaticProps(ctx) {
  const chronologyPath = path.join(process.cwd(), 'locales', ctx.locale, 'chronologyData.json');
  const chronologyFileData = await fs.readFileSync(chronologyPath);
  const chronologyData = await JSON.parse(chronologyFileData);

  return {
    props: {
      chronologyData: chronologyData,
    },
  };
}
