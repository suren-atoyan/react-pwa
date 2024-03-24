import DeckGL from '@deck.gl/react/typed';
import { Map } from 'react-map-gl';
import { token } from '@/utils/constants';
import { generateTooltip, getInitialViewState } from '@/components/Map';
import { CircularProgress } from '@mui/material';
import { useMap } from '@/hooks/useMap';
import { useEffect } from 'react';

export const RenderMap = () => {
  const { center, isLoading, initialLayers } = useMap();

  if (isLoading && !center) return <CircularProgress />;
  console.log(center);

  return (
    <>
      <DeckGL
        initialViewState={getInitialViewState(center)}
        controller={true}
        layers={initialLayers}
        style={{
          width: '100%',
          height: '80vh',
          position: 'relative',
        }}
        getTooltip={generateTooltip}
      >
        <Map
          initialViewState={getInitialViewState(center)}
          mapboxAccessToken={token}
          latitude={-35.0646}
          longitude={-71.2779}
          mapStyle={'mapbox://styles/mapbox/satellite-v9'}
        />
      </DeckGL>
    </>
  );
};
