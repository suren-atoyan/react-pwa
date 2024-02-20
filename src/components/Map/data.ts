import { CenterData, PerimeterData, RowsData, PlantsData } from '@/types';

export const predio1Center: CenterData = {
  geometry: {
    coordinates: [-71.27416364924095, -35.06646473642659],
    type: 'Point',
  },
  type: 'Center',
  properties: {
    name: 'Centro Predio 1',
    area: '0,048807',
    units: 'km2',
  },
};

export const predio2Center: CenterData = {
  geometry: {
    coordinates: [-71.2750165941707, -35.06745396736117],
    type: 'Point',
  },
  type: 'Center',
  properties: {
    name: 'Centro Predio 2',
    area: '0,488861',
    units: 'km2',
  },
};

export const predio1Perimeter: PerimeterData = {
  geometry: {
    coordinates: [
      [
        [-71.27563842294774, -35.06496005184193],
        [-71.27591592853022, -35.06526464372074],
        [-71.27588435882193, -35.06528095951604],
        [-71.27609284713483, -35.065524907339764],
        [-71.27606667635963, -35.06553940485523],
        [-71.27641211170183, -35.06592014718745],
        [-71.2729062441918, -35.06789578011759],
        [-71.2723848419943, -35.067277424396096],
        [-71.27240426506884, -35.06726469781671],
        [-71.27216407915925, -35.066965433632525],
        [-71.27563842294774, -35.06496005184193],
      ],
    ],
    type: 'Polygon',
  },
  type: 'Feature',
  properties: {
    name: 'Perimetro Predio 1',
    area: '0,048807',
    units: 'km2',
  },
};

export const predio2Perimeter: PerimeterData = {
  geometry: {
    coordinates: [
      [
        [-71.27641452738408, -35.06605929334486],
        [-71.2767512936173, -35.06643336373999],
        [-71.27672222574607, -35.066444900230614],
        [-71.27697923494097, -35.066742591508216],
        [-71.276956603121, -35.06675530341699],
        [-71.27713295426543, -35.06695657387895],
        [-71.2771088871514, -35.066969698708654],
        [-71.2771472086684, -35.067015022337735],
        [-71.27368071138834, -35.0689950129808],
        [-71.27332900133852, -35.06858217236335],
        [-71.27334855176139, -35.0685714990773],
        [-71.27312866797485, -35.06830217981214],
        [-71.27314748579097, -35.068289512962004],
        [-71.27293943179009, -35.06803213616999],
        [-71.27641452738408, -35.06605929334486],
      ],
    ],
    type: 'Polygon',
  },
  type: 'Feature',
  properties: {
    name: 'Perimetro Predio 2',
    area: '0,488861',
    units: 'km2',
  },
};

export const predio1Lines: RowsData = [
  {
    geometry: {
      coordinates: [
        [-71.27562671292907, -35.06497795554898],
        [-71.27587269767251, -35.06526763924039],
      ],
      type: 'LineString',
    },
    type: 'Feature',
    properties: {},
  },
  {
    geometry: {
      coordinates: [
        [-71.275605, -35.06499],
        [-71.276046, -35.065515],
      ],
      type: 'LineString',
    },
    type: 'Feature',
    properties: {},
  },
];

export const predio1Plants: PlantsData = [
  {
    geometry: {
      coordinates: [-71.27562664496261, -35.064977796579356],
      type: 'Point',
    },
    type: 'Feature',
    properties: {
      calidad: 5,
      yemasPlanta: 150,
      cargadoresPlanta: 23,
      yemasCargador: 166,
      pitonesPlanta: 8,
      yemasPiton: 15,
    },
  },
  {
    geometry: {
      coordinates: [-71.27562837557286, -35.06497988571288],
      type: 'Point',
    },
    type: 'Feature',
    properties: {
      calidad: 3,
      yemasPlanta: 109,
      cargadoresPlanta: 15,
      yemasCargador: 119,
      pitonesPlanta: 5,
      yemasPiton: 10,
    },
  },
  {
    geometry: {
      coordinates: [-71.27563007555462, -35.06498172928218],
      type: 'Point',
    },
    type: 'Feature',
    properties: {
      calidad: 4,
      yemasPlanta: 132,
      cargadoresPlanta: 12,
      yemasCargador: 141,
      pitonesPlanta: 7,
      yemasPiton: 13,
    },
  },
];

// TODO: CHANGE PREDIO 2 THIS TO REAL DATA
export const predio2Lines: RowsData = [
  {
    geometry: {
      coordinates: [
        [-71.27562671292907, -35.06497795554898],
        [-71.27587269767251, -35.06526763924039],
      ],
      type: 'LineString',
    },
    type: 'Feature',
    properties: {},
  },
  {
    geometry: {
      coordinates: [
        [-71.275605, -35.06499],
        [-71.276046, -35.065515],
      ],
      type: 'LineString',
    },
    type: 'Feature',
    properties: {},
  },
];

// TODO: CHANGE PREDIO 2 TO REAL DATA
export const predio2Plants: PlantsData = [
  {
    geometry: {
      coordinates: [-71.275626607126, -35.064978007911954],
      type: 'Point',
    },
    type: 'Feature',
    properties: {
      calidad: 3,
      yemasPlanta: 109,
      cargadoresPlanta: 15,
      yemasCargador: 119,
      pitonesPlanta: 5,
      yemasPiton: 10,
    },
  },
  {
    geometry: {
      coordinates: [-71.27562792534407, -35.064979231974775],
      type: 'Point',
    },
    type: 'Feature',
    properties: {
      calidad: 3,
      yemasPlanta: 109,
      cargadoresPlanta: 15,
      yemasCargador: 119,
      pitonesPlanta: 5,
      yemasPiton: 10,
    },
  },
  {
    geometry: {
      coordinates: [-71.27562911689574, -35.06498056728385],
      type: 'Point',
    },
    type: 'Feature',
    properties: {
      calidad: 3,
      yemasPlanta: 109,
      cargadoresPlanta: 15,
      yemasCargador: 119,
      pitonesPlanta: 5,
      yemasPiton: 10,
    },
  },
];
