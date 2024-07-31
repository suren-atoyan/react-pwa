import { useMap } from '@/hooks/useMap';
import { TabPanel } from '@mui/lab';
import { countPlants } from './countPlants';
import './style.css';
import { TFeaturesMap } from '@/components/Map';

type TabPanelProps = {
  value: string;
  handleSelectLayer: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const TabPanel1 = ({ value, handleSelectLayer }: TabPanelProps) => {
  const { initialLayers } = useMap();
  const {
    plantsWithQualityFive,
    plantsWithQualityFour,
    plantsWithQualityThree,
    plantsWithQualityTwo,
    plantsWithQualityOne,
    totalPlants,
  } = countPlants(initialLayers as TFeaturesMap) ?? {};

  return (
    <TabPanel value={value}>
      <label
        htmlFor="layerSelector"
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        Select Layer:
        <select onChange={handleSelectLayer}>
          <option value={'column'}>Plants</option>
          <option value={'line'}>Lines</option>
        </select>
      </label>
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
