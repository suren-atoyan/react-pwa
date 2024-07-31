import { FeatureCollection } from '@turf/turf';
import { GeoJsonLayer, LineLayer, ColumnLayer, IconLayer } from '@deck.gl/layers/typed';
import { getLinesPlants } from './getLinesPLants';
import { ICON_MAPPING } from '@/utils/constants';
import { Plant, Row } from '@/types';

export type TFeaturesMap = {
  perimeter: GeoJsonLayer[];
  center: IconLayer[];
  lines: LineLayer[];
  plants: ColumnLayer[];
};

export const generatePredioLayers = (
  featureCollection: FeatureCollection,
  plantsDistance: number = 3,
  selectedPredio: number,
) => {
  if (!featureCollection) return [] as unknown as TFeaturesMap;
  const featuresMap: TFeaturesMap = {
    perimeter: [],
    center: [],
    lines: [],
    plants: [],
  };

  featureCollection?.features?.forEach((feature, i) => {
    const { properties, geometry } = feature;
    switch (geometry?.type) {
      case 'Polygon':
        featuresMap.perimeter.push(
          new GeoJsonLayer({
            id: `perimeter-layer-${String(properties?.name).replaceAll(' ', '-')}`,
            data: [feature],
            getPolygon: (d: {
              geometry: { coordinates: [number, number][][] };
              properties: { name: string };
            }) => {
              return d.geometry.coordinates;
            },
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
          }),
        );
        break;

      case 'LineString':
        feature.geometry.type = 'LineString';
        feature.properties = {
          ...properties,
          id: i,
          columna: i + 1,
        };
        featuresMap.lines.push(
          new LineLayer({
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
          }),
        );
        break;
      case 'Point':
        if (
          feature?.geometry?.type === 'Point' &&
          feature?.properties?.name === `Centro Predio ${selectedPredio}`
        ) {
          featuresMap.center.push(
            new IconLayer({
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
            }),
          );
        }
        break;
    }
  });

  const plants = getLinesPlants(
    featureCollection?.features?.filter((f) => f.geometry.type === 'LineString') as Row[],
    plantsDistance,
  );

  plants?.forEach((plant, i) => {
    featuresMap.plants.push(
      new ColumnLayer({
        id: `column-layer-${i}`,
        data: plant,
        getPosition: (d) => d.geometry.coordinates,
        elevationScale: 3,
        radius: 0.5,
        getFillColor: (d) => {
          const { properties } = d;
          const { calidad, cargadoresPlanta, yemasCargador, yemasPlanta } = properties;
          // Map calidad values to colors
          if (calidad <= 1) {
            return [255, 0, 0]; // Danger red for calidad <= 1
          } else if (calidad <= 2) {
            return [255, 165, 0]; // Orange for 1 < calidad <= 2
          } else if (calidad <= 3) {
            return [255, 255, 100]; // Light yellow for 2 < calidad <= 3
          } else if (calidad <= 4) {
            return [144, 238, 144]; // Light green for 3 < calidad <= 4
          } else {
            return [0, 100, 0]; // Deep green for calidad > 4
          }
        },
        getLineColor: [255, 0, 0],
        diskResolution: 12,
        pickable: true,
        extruded: true,
        dimension: '3D',
        getElevation: (d: Plant) => {
          return d.properties.calidad;
        },
      }),
    );
  });
  return featuresMap;
};
