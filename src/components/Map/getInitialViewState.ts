import { InitialViewState } from '@/types';
import { token } from '@/utils/constants';

type Center = {
  properties: {
    lat: number;
    lng: number;
  };
};

const replaceComma = (number: number) => {
  return Number(number.toString().replace(',', '.'));
};

export const getInitialViewState = (center: Center): InitialViewState => {
  const lat = replaceComma(center?.properties?.lat);
  const lng = replaceComma(center?.properties?.lng);

  const initialViewState: InitialViewState = {
    zoom: 17,
    pitch: 40,
    bearing: 35,
    token,
    longitude: lng,
    latitude: lat,
  };

  console.log('longitude', initialViewState.longitude);
  console.log('lat', initialViewState.latitude);

  return initialViewState;
};
