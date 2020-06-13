import React, { Suspense } from 'react';

import Loading from 'components/Loading';

const AsyncComponentLoader = (Component, loadinProps) => props => {
  return (
    <Suspense fallback={<Loading {...loadinProps} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default AsyncComponentLoader;
