import { Row } from '@/types';
import * as turf from '@turf/turf';

interface VineProperties {
  hilera: number;
  planta: number;
  calidad: number;
  cargadoresPlanta: number;
  pitonesPlanta: number;
  yemasCargador: number;
  yemasPiton: number;
  yemasPlanta: number;
}

// Function to generate a random integer within a range
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1)) + 1;
}

export const getLinesPlants = (rowData: Row[], distanceBetweenPlants: number) => {
  const propertyRanges = {
    cargadoresPlanta: [5, 10, 15, 18, 20], // Range of cargadoresPlanta for each calidad level
    pitonesPlanta: [3, 7, 11, 13, 15], // Range of pitonesPlanta for each calidad level
    yemasCargador: [10, 25, 50, 75, 110], // Range of yemasCargador for each calidad level
    yemasPiton: [10, 45, 70, 100, 120], // Range of yemasPiton for each calidad level
    yemasPlanta: [50, 100, 150, 200, 250], // Range of yemasPlanta for each calidad level
  };
  const plants = rowData?.map((row, i) => {
    // Convert the coordinates to turf points
    if (typeof row.geometry.coordinates[0][0] !== 'number') return;
    const startPoint = turf.point(row?.geometry?.coordinates[0]);
    const endPoint = turf.point(row?.geometry?.coordinates[1]);

    // Calculate the distance between the two points in meters
    const distance = turf.distance(startPoint, endPoint, { units: 'kilometers' }) * 1000;

    // Calculate the number of plants to generate
    const numPlants = Math.floor(distance / distanceBetweenPlants);

    // Generate the coordinates for each plant
    const plantsCoordinates = Array.from({ length: numPlants }, (_, j) => {
      const calidad = Math.floor(Math.random() * 6);
      // Generate properties within defined ranges
      const vineProperties: VineProperties = {
        hilera: i + 1,
        planta: j + 1,
        calidad: calidad,
        cargadoresPlanta: getRandomInt(
          propertyRanges.cargadoresPlanta[calidad === 5 ? calidad - 1 : calidad],
        ),
        pitonesPlanta: getRandomInt(
          propertyRanges.pitonesPlanta[calidad === 5 ? calidad - 1 : calidad],
        ),
        yemasCargador: getRandomInt(
          propertyRanges.yemasCargador[calidad === 5 ? calidad - 1 : calidad],
        ),
        yemasPiton: getRandomInt(propertyRanges.yemasPiton[calidad === 5 ? calidad - 1 : calidad]),
        yemasPlanta: getRandomInt(
          propertyRanges.yemasPlanta[calidad === 5 ? calidad - 1 : calidad],
        ),
      };
      const offsetDistance = (j * distanceBetweenPlants) / 1000; // Convert to kilometers for the along function
      const plantPoint = turf.along(turf.lineString(row.geometry.coordinates), offsetDistance, {
        units: 'kilometers',
      });
      return {
        geometry: { coordinates: plantPoint.geometry.coordinates, type: 'Plant' },
        type: 'Plant',
        properties: vineProperties,
      };
    });
    return plantsCoordinates;
  });
  return plants;
};
