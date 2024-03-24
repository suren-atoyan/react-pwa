import { useMap } from '@/hooks/useMap';
import { TabPanel } from '@mui/lab';
import { countPlants } from './countPlants';
import { Layer } from '@/types';
import './style.css';

type TabPanelProps = {
  value: string;
};

export const TabPanel1 = ({ value }: TabPanelProps) => {
  const { initialLayers } = useMap();
  const {
    plantsWithQualityFive,
    plantsWithQualityFour,
    plantsWithQualityThree,
    plantsWithQualityTwo,
    plantsWithQualityOne,
    totalPlants,
  } = countPlants(initialLayers as Layer[]) ?? {};

  return (
    <TabPanel value={value}>
      <table
        style={{
          width: '100%',
          textAlign: 'left',
        }}
      >
        <tbody>
          <tr>
            <th>Metric</th>
            <th>Number</th>
          </tr>
          <tr>
            <td>Total Plants</td>
            <td>{totalPlants}</td>
          </tr>
          <tr>
            <td>Total Quality 5</td>
            <td>{plantsWithQualityFive}</td>
          </tr>
          <tr>
            <td>Total Quality 4</td>
            <td>{plantsWithQualityFour}</td>
          </tr>
          <tr>
            <td>Total Quality 3</td>
            <td>{plantsWithQualityThree}</td>
          </tr>
          <tr>
            <td>Total Quality 2</td>
            <td>{plantsWithQualityTwo}</td>
          </tr>
          <tr>
            <td>Total Quality 1</td>
            <td>{plantsWithQualityOne}</td>
          </tr>
        </tbody>
      </table>
    </TabPanel>
  );
};
