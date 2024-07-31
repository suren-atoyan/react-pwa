import { MapTabs } from '@/components/Map';
import isMobile from '@/utils/is-mobile';
import { useMap } from '@/hooks/useMap';
import Meta from '@/components/Meta';
import { Box } from '@mui/material';
import RenderMap from './RenderMap';

function Solutions() {
  const { center, isLoading, selectedTab, layers, handleTabChange, handleSelectLayer } = useMap();

  return (
    <Box>
      <Meta title="Our Solutions" />
      {isMobile ? (
        <>
          <RenderMap center={center} layers={layers} isLoading={isLoading} />
          <MapTabs
            handleTabChange={handleTabChange}
            selectedTab={selectedTab}
            handleSelectLayer={handleSelectLayer}
          />
        </>
      ) : (
        <>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
          >
            <MapTabs
              handleTabChange={handleTabChange}
              selectedTab={selectedTab}
              handleSelectLayer={handleSelectLayer}
            />
            <Box>
              <RenderMap center={center} layers={layers} isLoading={isLoading} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Solutions;
