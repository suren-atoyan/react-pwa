import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const MAPBOX_API_BASE_URL = 'https://api.mapbox.com/datasets/v1';
const USER_ID = 'carlosgl93';
const ACCESS_TOKEN =
  'pk.eyJ1IjoiY2FybG9zZ2w5MyIsImEiOiJjbHM1aG5tYm4xa2twMmxtdXNwN3dmYTNwIn0.3uBIAVK6Qb5Y4Rz1yEFw9Q';

// Fetch a dataset
export const useGetDataset = (datasetId: string) => {
  return useQuery(['dataset', datasetId], () =>
    axios
      .get(`${MAPBOX_API_BASE_URL}/${USER_ID}/${datasetId}?access_token=${ACCESS_TOKEN}`)
      .then((response) => response.data),
  );
};

export const useGetFeatures = (datasetId: string) => {
  return useQuery(['features', datasetId], () =>
    axios
      .get(`${MAPBOX_API_BASE_URL}/${USER_ID}/${datasetId}/features?access_token=${ACCESS_TOKEN}`)
      .then((response) => response.data),
  );
};

// Create a dataset
export const useCreateDataset = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (newDataset) =>
      axios
        .post(`${MAPBOX_API_BASE_URL}/${USER_ID}?access_token=${ACCESS_TOKEN}`, newDataset)
        .then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('dataset');
      },
    },
  );
};
