import {
  predio1Center,
  predio2Center,
  predio1Perimeter,
  predio2Perimeter,
  predio1Lines,
  predio1Plants,
  predio2Lines,
  predio2Plants,
} from '@/components/Map';

export const getPredioData = (predioId: number) => {
  switch (predioId) {
    case 1:
      return {
        centerData: predio1Center,
        perimeterData: predio1Perimeter,
        rowsData: predio1Lines,
        plantsData: predio1Plants,
      };
    case 2:
      return {
        centerData: predio2Center,
        perimeterData: predio2Perimeter,
        rowsData: predio2Lines,
        plantsData: predio2Plants,
      };
    default:
      return {
        centerData: predio1Center,
        perimeterData: predio1Perimeter,
        rowsData: predio1Lines,
        plantsData: predio1Plants,
      };
  }
};
