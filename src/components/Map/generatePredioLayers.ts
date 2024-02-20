import { FeatureCollection } from '@turf/turf';
import { GeoJsonLayer, LineLayer, ColumnLayer, IconLayer } from '@deck.gl/layers/typed';
import { getLinesPlants } from './getLinesPLants';
import { ICON_MAPPING } from '@/utils/constants';
import { Row } from '@/types';

export const generatePredioLayers = (
  featureCollection: FeatureCollection,
  plantsDistance: number = 3,
) => {
  if (!featureCollection) return [];
  let features: Array<GeoJsonLayer | ColumnLayer | LineLayer | IconLayer | undefined>;

  features = featureCollection?.features
    ?.map((feature, i) => {
      const { properties, geometry } = feature;
      switch (geometry?.type) {
        case 'Polygon':
          return new GeoJsonLayer({
            id: `perimeter-layer-${properties?.name}`,
            data: [feature],
            getPolygon: (d: {
              geometry: { coordinates: [number, number][][] };
              properties: { name: string };
            }) => d.geometry.coordinates,
            pickable: true,
            stroked: true,
            filled: false,
            extruded: false,
            pointType: 'circle',
            lineWidthScale: 1,
            lineWidthMinPixels: 10,
            getLineColor: [0, 255, 50, 255],
            getPointRadius: 1,
            getLineWidth: 1,
            getElevation: 3,
            parameters: {
              depthTest: false,
            },
          });

        case 'LineString':
          feature.geometry.type = 'LineString';
          feature.properties = {
            ...properties,
            id: i,
            columna: i + 1,
          };
          return new LineLayer({
            id: `line-layer-${i}`,
            data: [feature],
            getSourcePosition: (d) => {
              return d.geometry.coordinates[0];
            },
            getTargetPosition: (d) => d.geometry.coordinates[1],
            getWidth: 5,
            getColor: [255, 239, 205],
            widthScale: 1,
            pickable: true,
            parameters: {
              depthTest: false,
            },
          });
        case 'Point':
          return new IconLayer({
            id: `icon-layer-${properties?.name}`,
            data: [feature],
            pickable: true,
            iconAtlas:
              'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
            iconMapping: ICON_MAPPING,
            getIcon: () => 'marker',
            sizeScale: 15,
            getPosition: (d) => d.geometry.coordinates,
            getSize: () => 2.5,
            getColor: () => [255, 140, 0],
            parameters: {
              depthTest: false,
            },
          });
      }
    })
    ?.filter(Boolean);

  const plants = getLinesPlants(
    featureCollection?.features?.filter((f) => f.geometry.type === 'LineString') as Row[],
    plantsDistance,
  );
  console.log({ plants });
  const plantsLayer = plants?.map((plant, i) => {
    return new ColumnLayer({
      id: `column-layer-${i}`,
      data: plant,
      getPosition: (d) => d.geometry.coordinates,
      elevationScale: 3,
      radius: 0.5,
      getFillColor: (d) => {
        const { properties } = d;
        const { calidad, cargadoresPlanta, yemasCargador, yemasPlanta } = properties;
        return [
          calidad * cargadoresPlanta,
          yemasPlanta + yemasCargador,
          calidad * cargadoresPlanta,
        ];
      },
      getLineColor: [255, 0, 0],
      diskResolution: 12,
      pickable: true,
      extruded: true,
      dimension: '3D',
      getElevation: (d) => d.properties.yemasPlanta / 30,
    });
  });

  features = [...features, ...plantsLayer] as Array<
    GeoJsonLayer | ColumnLayer | LineLayer | undefined | IconLayer
  >;

  return features;
};
