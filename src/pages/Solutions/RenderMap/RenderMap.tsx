import DeckGL from '@deck.gl/react/typed';
import { LineLayer, Map } from 'react-map-gl';
import { token } from '@/utils/constants';
import { generateTooltip, getInitialViewState } from '@/components/Map';
import { Box, CircularProgress } from '@mui/material';
import { Center } from '@/hooks/useMap';
import { GeoJsonLayer, ColumnLayer } from '@deck.gl/layers/typed';
import { LayersList } from '@deck.gl/core/typed';
import { Feature, Geometry, GeometryCollection, Properties } from '@turf/turf';

type RenderMapProps = {
  center: Feature<Geometry | GeometryCollection, Properties> | undefined;
  isLoading: boolean;
  layers: GeoJsonLayer[] | LineLayer[] | ColumnLayer[] | undefined;
};

export const RenderMap = ({ center, isLoading, layers }: RenderMapProps) => {
  if (isLoading || !layers)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <DeckGL
        initialViewState={getInitialViewState(center)}
        controller={true}
        layers={layers as LayersList}
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
