import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { FeatureCollection } from '@turf/turf';

const MAPBOX_API_BASE_URL = 'https://api.mapbox.com/datasets/v1';
const USER_ID = import.meta.env.VITE_ENV_MAPBOX_USER_ID;
const ACCESS_TOKEN = import.meta.env.VITE_ENV_MAPBOX_TOKEN;

// Fetch a dataset
export const useGetDataset = (datasetId: string) => {
  return useQuery(['dataset', datasetId], () =>
    axios
      .get(`${MAPBOX_API_BASE_URL}/${USER_ID}/${datasetId}?access_token=${ACCESS_TOKEN}`)
      .then((response) => response.data),
  );
};

export const useGetFeatures = (datasetId: string) => {
  return useQuery<FeatureCollection>(['features', datasetId], () =>
    axios
      .get(`${MAPBOX_API_BASE_URL}/${USER_ID}/${datasetId}/features?access_token=${ACCESS_TOKEN}`)
      .then((response) => response.data as FeatureCollection),
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
