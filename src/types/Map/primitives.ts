interface Point {
  coordinates: [number, number];
}

export type PredioCenter = {
  geometry: {
    coordinates: [number, number];
    type: 'Point';
  };
  id: string;
  properties: {
    name: string;
    lat?: number;
    lang?: number;
  };
  type: 'Feature';
};
