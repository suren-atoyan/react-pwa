import { InitialViewState } from '@/types';
import { PredioCenter } from '@/types/Map/primitives';
import { token } from '@/utils/constants';

export const getInitialViewState = (center: PredioCenter): InitialViewState => {
  const initialViewState: InitialViewState = {
    zoom: 17,
    pitch: 40,
    bearing: 35,
    token,
    longitude: center?.geometry?.coordinates[0],
    latitude: center?.geometry?.coordinates[1],
  };

  return initialViewState;
};
