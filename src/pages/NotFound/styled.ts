import { styled } from '@mui/material/styles';

const Image = styled('img')(({ theme }) => ({
  height: '50%',
  maxHeight: '60%',
  maxWidth: '100%',
  boxShadow: theme.shadows[7],
  borderRadius: theme.shape.borderRadius * 4,
  boxSizing: 'border-box',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

export { Image };
