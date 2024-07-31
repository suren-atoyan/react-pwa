import { TabPanel1, TabPanel2 } from '@/pages/Solutions/Tabs';
import { Tab, Box, Tabs } from '@mui/material';
import { TabContext } from '@mui/lab';

type MapTabsProps = {
  selectedTab: string;
  handleTabChange: (_event: React.SyntheticEvent, newValue: string) => void;
  handleSelectLayer: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const MapTabs = ({ selectedTab, handleTabChange, handleSelectLayer }: MapTabsProps) => {
  return (
    <Box>
      <TabContext value={selectedTab}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            marginTop: '10vh',
          }}
        >
          <Tabs
            centered
            value={selectedTab}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Data" value="1" />
            <Tab label="Features" value="2" />
          </Tabs>
        </Box>
        <TabPanel1 value={'1'} handleSelectLayer={handleSelectLayer} />
        <TabPanel2 value={'2'} />
      </TabContext>
    </Box>
  );
};
