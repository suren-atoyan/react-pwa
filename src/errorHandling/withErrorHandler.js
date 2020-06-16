import React from 'react';

import { ErrorBoundary } from 'react-error-boundary';

const withErrorHandler = (Component, Fallback) => props => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );
};

export default withErrorHandler;
