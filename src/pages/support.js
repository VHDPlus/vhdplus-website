import React from 'react';
import Layout from '@theme/Layout';
import {Redirect} from '@docusaurus/router';

function Hello() {
  return <Redirect to="/docs/community/overview#found-an-issue-in-our-ide" />;
}

export default Hello;