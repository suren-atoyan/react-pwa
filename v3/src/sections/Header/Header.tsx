import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import ThemeIcon from '@mui/icons-material/InvertColors';
import { useThemeMode } from '@/theme';
import { repository, title } from '@/config';
import { useSidebar } from '@/sections/Sidebar/hooks';

function Header() {
  const { themeMode, toggle: toggleThemeMode } = useThemeMode();
  const { open: openSidebar } = useSidebar();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      data-pw={`theme-${themeMode}`}
      enableColorOnDark
    >
      <Toolbar>
        <Stack direction="row" justifyContent="space-between" alignItems="center" flex={1}>
          <Stack direction="row" gap={2} alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={openSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </Stack>
          <Stack direction="row" gap={1} alignItems="center">
            <Tooltip title="Hot keys" arrow>
              <Button
                size="small"
                variant="outlined"
                aria-label="open hotkeys dialog"
                // onClick={hotKeysDialogActions.open}
              >
                alt + k
              </Button>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="It's open source" arrow>
              <IconButton color="info" size="large" component="a" href={repository} target="_blank">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Switch theme" arrow>
              <IconButton
                color="info"
                edge="end"
                size="large"
                onClick={toggleThemeMode}
                data-pw="theme-toggle"
              >
                <ThemeIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
