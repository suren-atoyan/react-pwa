import { HeaderController } from '../HeaderController';
import { title } from '@/config';
import { FlexBox } from '@/components/styled';
import { YellowButton } from '@/components/YellowButton/YellowButton';
import { StyledAppBar, StyledToolbar, StyledLink } from '../styled';

const links = [
  { text: 'Projects', href: '/projects' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
];

export const DesktopHeader = () => {
  const { handleClickLogo, handleOpenChatBot, handleClickLink } = HeaderController();

  return (
    <StyledAppBar elevation={0}>
      <StyledToolbar>
        <FlexBox sx={{ alignItems: 'center' }}>
          <YellowButton onClick={handleClickLogo} size="large" text={title} />
        </FlexBox>
        <FlexBox>
          {links.map((link, index) => (
            <StyledLink onClick={() => handleClickLink(link.href)} key={index}>
              {link.text}
            </StyledLink>
          ))}
        </FlexBox>
        <FlexBox>
          <YellowButton size="medium" text="What do you need?" onClick={handleOpenChatBot} />
        </FlexBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};
