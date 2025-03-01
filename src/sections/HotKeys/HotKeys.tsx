import { useHotkeys } from 'react-hotkeys-hook';

import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { useSidebar } from '@/sections/Sidebar/hooks';
import { useThemeMode } from '@/theme';

import { useHotKeysDialog } from './hooks';

function HotKeys() {
  const { toggle: toggleTheme } = useThemeMode();
  const { toggle: toggleSidebar } = useSidebar();
  const { isOpen, close, toggle: toggleHotKeysDialog } = useHotKeysDialog();

  // I would love to define all hotkeys in the config and loop it here and avoid this repetitive code.
  // But the `react-hotkeys-hook` library, which we use to handle hotkeys provides only hook (`useHotkeys`).
  // And as you know we can't use hooks inside loops (read "Rules of Hooks" - https://reactjs.org/docs/hooks-rules.html).
  // There is always a workaround, but sometimes it's better to avoid premature and unnecessary optimizations :)
  useHotkeys('alt+s', toggleSidebar);
  useHotkeys('alt+t', toggleTheme);
  useHotkeys('alt+k', toggleHotKeysDialog);

  return (
    <Dialog fullWidth maxWidth="xs" onClose={close} open={isOpen} data-pw="hotkeys-dialog">
      <DialogTitle>Hot Keys</DialogTitle>
      <DialogContent>
        <Stack direction="row" alignItems="center" height={50} justifyContent="space-between">
          <Typography>Toggle Theme</Typography>
          <Button color="warning" variant="outlined" onClick={toggleTheme}>
            alt + t
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" height={50} justifyContent="space-between">
          <Typography>Toggle Sidebar</Typography>
          <Button color="warning" variant="outlined" onClick={toggleSidebar}>
            alt + s
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" height={50} justifyContent="space-between">
          <Typography>Toggle Hot Keys&apos; Dialog</Typography>
          <Button color="warning" variant="outlined" onClick={toggleHotKeysDialog}>
            alt + k
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default HotKeys;
