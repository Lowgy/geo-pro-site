import type { NextPage } from 'next';
import React, { lazy } from 'react';

const Globe = lazy(() => import('../components/TheGlobe'));

const GlobePage: NextPage = () => {
  return (
    <div>
      <Globe />
    </div>
  );
};

export default GlobePage;
