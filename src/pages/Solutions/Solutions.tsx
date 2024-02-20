import Meta from '@/components/Meta';
import RenderMap from './Map';
import { Box, Tab, Tabs } from '@mui/material';
import isMobile from '@/utils/is-mobile';
import { useState } from 'react';
import { TabPanel1, TabPanel2 } from './Tabs';
import { TabContext } from '@mui/lab';

function Solutions() {
  const responsive = isMobile;
  const [selectedTab, setSelectedTab] = useState('1');

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  if (responsive) {
    return (
      <Box>
        <Meta title="Our Projects" />
        <RenderMap />
      </Box>
    );
  }
  return (
    <Box>
      <Meta title="Our Projects" />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            padding: '20px',
          }}
        >
          <TabContext value={selectedTab}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Data" value="1" />
                <Tab label="Features" value="2" />
              </Tabs>
            </Box>
            <TabPanel1 value={'1'} />
            <TabPanel2 value={'2'} />
          </TabContext>
        </Box>
        <RenderMap />
      </Box>
    </Box>
  );
}

export default Solutions;
