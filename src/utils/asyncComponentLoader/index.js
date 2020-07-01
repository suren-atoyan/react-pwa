import _asyncComponentLoader from './loader';

import Loading from 'components/Loading';
import LoaderErrorBoundaryFallback from 'errorHandling/Fallbacks/Loader';
import { loader as loaderDefaultOptions } from 'config';

const asyncComponentLoader = (
  loadComponent,
  loaderOptions = loaderDefaultOptions,
  FallbackWaiting = Loading,
  FallbackFail = LoaderErrorBoundaryFallback,
) => _asyncComponentLoader(loadComponent, loaderOptions, FallbackWaiting, FallbackFail);

export default asyncComponentLoader;
