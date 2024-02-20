import { GeoJsonLayer, IconLayer, ColumnLayer, LineLayer } from '@deck.gl/layers/typed';
export type Row = {
  type: string;
  properties: {
    name?: string;
  };
  geometry: {
    coordinates: number[][];
    type: 'LineString';
  };
};

export type Plant = {
  type: string;
  properties: {
    calidad: number;
    yemasPlanta: number;
    cargadoresPlanta: number;
    yemasCargador: number;
    pitonesPlanta: number;
    yemasPiton: number;
  };
  geometry: {
    coordinates: [number, number];
    type: string;
  };
};

export type PerimeterData = {
  type: string;
  properties: {
    id?: number;
    name: string;
    area: string;
    units: string;
  };
  geometry: {
    coordinates: number[][][];
    type: string;
  };
};

export type CenterData = {
  type: string;
  properties: {
    name: string;
    area: string;
    units: string;
  };
  geometry: {
    coordinates: number[];
    type: string;
  };
};

export type RowsData = Array<Row>;

export type PlantsData = Array<Plant>;

export type Layer = GeoJsonLayer | IconLayer | LineLayer[] | ColumnLayer[];

export type PredioData = {
  perimeterData: PerimeterData;
  centerData: CenterData;
  rowsData: RowsData;
  plantsData: PlantsData;
};

export type PredioLayers = Array<Layer>;
