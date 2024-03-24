import { useState, useMemo } from 'react';
import { useGetFeatures } from '@/apis';
import { generatePredioLayers } from '@/components/Map/generatePredioLayers';
import { Feature, FeatureCollection } from '@turf/turf';

interface Center extends FeatureCollection {
  properties: {
    lat: number;
    lng: number;
  };
}
export const useMap = () => {
  const [selectedPredio, setSelectedPredio] = useState(1);
  const [selectedLayer, setSelectedLayer] = useState<'initial' | 'polygon' | 'icon' | 'column'>(
    'initial',
  );
  const { data: dataset, isLoading, error } = useGetFeatures('cls5zsq1578x81mp5a475umdl');
  const initialLayers = useMemo(() => generatePredioLayers(dataset, 3), [dataset]);

  const handleSelectPredio = () => {
    // setSelectedPredio(e.target.value);
    setSelectedPredio(1);
    setSelectedLayer('initial');
  };

  const center: Center = dataset?.features?.find(
    (feature: Feature) =>
      feature?.geometry?.type === 'Point' &&
      feature?.properties?.name === `Centro Predio ${selectedPredio}`,
  );

  return {
    center,
    initialLayers,
    selectedLayer,
    handleSelectPredio,
    selectedPredio,
    isLoading,
    error,
    dataset,
  };
};
