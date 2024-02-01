import MenuIcon from '@mui/icons-material/Menu';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FlexBox } from '@/components/styled';
import { title } from '@/config';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';
import { StyledAppBar, StyledToolbar } from '../styled';
import { YellowButton } from '@/components/YellowButton/YellowButton';
import { HeaderController } from '../HeaderController';

export const MobileHeader = () => {
  const [, sidebarActions] = useSidebar();
  const [theme] = useTheme();
  const { handleClickLogo, handleOpenChatBot } = HeaderController();

  return (
    <StyledAppBar color="transparent" elevation={1} position="static" data-pw={`theme-${theme}`}>
      <StyledToolbar sx={{ justifyContent: 'space-between' }}>
        <FlexBox sx={{ alignItems: 'center' }}>
          <IconButton
            onClick={sidebarActions.toggle}
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <FlexBox sx={{ alignItems: 'center' }}>
            <YellowButton onClick={handleClickLogo} size="large" text={title} />
          </FlexBox>
        </FlexBox>
        <FlexBox>
          <Divider orientation="vertical" flexItem />
          <Tooltip title="Switch theme" arrow>
            <IconButton
              color="info"
              edge="end"
              size="large"
              onClick={handleOpenChatBot}
              data-pw="theme-toggle"
            >
              <ChatOutlinedIcon />
            </IconButton>
          </Tooltip>
        </FlexBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};
