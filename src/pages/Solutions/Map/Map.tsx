import DeckGL from '@deck.gl/react/typed';
import { Map } from 'react-map-gl';
import { token } from '@/utils/constants';
import { generateTooltip, getInitialViewState } from '@/components/Map';
import { CircularProgress } from '@mui/material';
import { useMap } from '@/hooks/useMap';

export const RenderMap = () => {
  const { center, layers, isLoading } = useMap();

  if (isLoading && layers.length === 0 && !center) return <CircularProgress />;

  return (
    <>
      <DeckGL
        initialViewState={getInitialViewState(center)}
        controller={true}
        layers={layers}
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
          latitude={-35.06817}
          longitude={-71.270872}
          mapStyle={'mapbox://styles/mapbox/satellite-v9'}
        />
      </DeckGL>
    </>
  );
};
