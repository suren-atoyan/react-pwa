import React, { Suspense } from 'react';

import Loading from 'components/Loading';

const AsyncComponentLoader = (Component, loadingProps) => props => {
  return (
    <Suspense fallback={<Loading {...loadingProps} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default AsyncComponentLoader;
