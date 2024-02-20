import { TabPanel } from '@mui/lab';
import { Box } from '@mui/material';

type TabPanelProps = {
  value: string;
};

export const TabPanel2 = ({ value }: TabPanelProps) => {
  return (
    <TabPanel value={value}>
      <Box>
        <h1>Data visualization</h1>
        <h4>Whether you need a 2D or 3D visualization, we have the tools to make it happen.</h4>
        <p>
          Play around with the controls and check out the different layers of the map. You can also
          hover over the elements to get more information.
        </p>
        <p>
          This tool is useful for visualizing the data of a vineyard, and it can be used to make
          decisions based on the information. It can also be used to show the data to potential
          investors or clients.
        </p>
        <p>
          On a real world scenario you could get insights per stage of the crop full process, from
          prunning to harvest. You could also get insights on the quality of the grapes, and the
          yield of the vineyard. This would allow you to make decisions based on the data, and
          optimize the process to get better results.
        </p>
      </Box>
    </TabPanel>
  );
};
