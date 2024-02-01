import { Button, styled } from '@mui/material';

const StyledYellowButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
  },
}));

interface YellowButtonProps {
  text: string;
  onClick: () => void;
  size: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
}

export const YellowButton = ({ text, onClick, size, variant = 'text' }: YellowButtonProps) => {
  return (
    <StyledYellowButton size={size} onClick={onClick} variant={variant}>
      {text}
    </StyledYellowButton>
  );
};
