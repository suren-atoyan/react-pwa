import { TFeaturesMap } from '@/components/Map';
import { Layer } from '@/types';

export const countPlants = (layers: TFeaturesMap) => {
  if (!layers) return;
  const plantsColumns = layers.plants;
  const totalPlants = plantsColumns?.reduce((acc, layer) => {
    if (Array.isArray(layer?.props.data)) {
      return acc + layer.props.data.length;
    }
    return acc;
  }, 0);
  const plantsWithQualityFive = plantsColumns?.reduce((acc, layer) => {
    if (Array.isArray(layer?.props.data)) {
      return acc + layer.props.data.filter((plant) => plant?.properties?.calidad === 5).length;
    }
    return acc;
  }, 0);

  const plantsWithQualityFour = plantsColumns?.reduce((acc, layer) => {
    if (Array.isArray(layer?.props.data)) {
      return acc + layer.props.data.filter((plant) => plant?.properties?.calidad === 4).length;
    }
    return acc;
  }, 0);

  const plantsWithQualityThree = plantsColumns?.reduce((acc, layer) => {
    if (Array.isArray(layer?.props.data)) {
      return acc + layer.props.data.filter((plant) => plant?.properties?.calidad === 3).length;
    }
    return acc;
  }, 0);

  const plantsWithQualityTwo = plantsColumns?.reduce((acc, layer) => {
    if (Array.isArray(layer?.props.data)) {
      return acc + layer.props.data.filter((plant) => plant?.properties?.calidad === 2).length;
    }
    return acc;
  }, 0);

  const plantsWithQualityOne = plantsColumns?.reduce((acc, layer) => {
    if (Array.isArray(layer?.props.data)) {
      return acc + layer.props.data.filter((plant) => plant?.properties?.calidad === 1).length;
    }
    return acc;
  }, 0);

  return {
    totalPlants,
    plantsWithQualityFive,
    plantsWithQualityFour,
    plantsWithQualityThree,
    plantsWithQualityTwo,
    plantsWithQualityOne,
  };
};
