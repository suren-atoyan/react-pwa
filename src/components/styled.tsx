import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const Centered = styled(Stack)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCentered = styled(Centered)({
  width: '100%',
  height: '100%',
});

export { Centered, FullSizeCentered };
