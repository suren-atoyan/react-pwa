import { AppBar, Toolbar, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.primary,
}));

const StyledToolbar = styled(Toolbar)(() => ({
  justifyContent: 'space-between',
}));

const StyledLink = styled(MuiLink)(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  color: theme.palette.primary.contrastText,
  fontSize: '1rem',
  marginRight: theme.spacing(2),
  padding: '0.5rem',
  borderRadius: '0.3rem',
  '&:hover': {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
}));

export { StyledAppBar, StyledToolbar, StyledLink };
