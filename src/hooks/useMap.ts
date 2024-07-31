import { generatePredioLayers } from '@/components/Map';
import { FeatureCollection } from '@turf/turf';
import { useState, useMemo, useEffect } from 'react';
import { useGetFeatures } from '@/apis';
import { GeoJsonLayer, ColumnLayer } from '@deck.gl/layers/typed';
import { LineLayer } from 'mapbox-gl';

export interface Center extends FeatureCollection {
  properties: {
    lat: number;
    lng: number;
  };
}
export const useMap = () => {
  const { data: dataset, isLoading, error } = useGetFeatures('cls5zsq1578x81mp5a475umdl');
  const [layers, setLayers] = useState<GeoJsonLayer[] | LineLayer[] | ColumnLayer[]>();
  const [selectedPredio, setSelectedPredio] = useState(1);
  const [selectedLayer, setSelectedLayer] = useState<
    'initial' | 'polygon' | 'icon' | 'column' | 'line' | 'all'
  >('initial');
  const [selectedTab, setSelectedTab] = useState('1');

  const initialLayers = useMemo(
    () => generatePredioLayers(dataset!, 3, selectedPredio),
    [dataset, selectedPredio],
  );

  const handleSelectPredio = () => {
    // setSelectedPredio(e.target.value);
    setSelectedPredio(1);
    setSelectedLayer('initial');
  };
  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const handleSelectLayer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLayer(e.target.value as 'initial' | 'polygon' | 'icon' | 'line' | 'column' | 'all');
  };

  const center = dataset?.features?.find(
    (f) =>
      f?.geometry?.type === 'Point' && f?.properties?.name === `Centro Predio ${selectedPredio}`,
  );

  useEffect(() => {
    switch (selectedLayer) {
      case 'polygon':
        setLayers(initialLayers?.perimeter);
        break;
      case 'line':
        setLayers(initialLayers?.lines as unknown as GeoJsonLayer[]);
        break;
      case 'column':
        setLayers(initialLayers?.plants);
        break;
      default:
        setLayers(initialLayers?.plants);
    }
  }, [selectedLayer, initialLayers, dataset]);

  return {
    layers,
    selectedPredio,
    selectedLayer,
    selectedTab,
    initialLayers,
    dataset,
    isLoading,
    error,
    center,
    handleSelectPredio,
    handleTabChange,
    handleSelectLayer,
  };
};
