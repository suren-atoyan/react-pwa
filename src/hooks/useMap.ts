import { useState, useMemo } from 'react';
import { useGetFeatures } from '@/apis';
import { generatePredioLayers } from '@/components/Map/generatePredioLayers';
import { Feature } from '@turf/turf';

export const useMap = () => {
  const [selectedPredio, setSelectedPredio] = useState(1);
  const [selectedLayer, setSelectedLayer] = useState<'perimeter' | 'lines' | 'plants' | 'center'>(
    'perimeter',
  );
  const [selectedQuality, setSelectedQuality] = useState<null | number>(null);

  const { data: dataset, isLoading, error } = useGetFeatures('cls5zsq1578x81mp5a475umdl');

  const handleSelectPredio = () => {
    // setSelectedPredio(e.target.value);
    setSelectedPredio(1);
    setSelectedLayer('perimeter');
  };

  const handleSelectLayer = () => {};

  const layers = useMemo(() => generatePredioLayers(dataset, 3), [dataset]);

  const center = dataset?.features?.find(
    (feature: Feature) =>
      feature?.geometry?.type === 'Point' &&
      feature?.properties?.name === `Centro Predio ${selectedPredio}`,
  );

  return {
    center,
    layers,
    selectedLayer,
    handleSelectLayer,
    handleSelectPredio,
    selectedPredio,
    isLoading,
    error,
    dataset,
  };
};
