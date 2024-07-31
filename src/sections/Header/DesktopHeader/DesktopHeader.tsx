import { HeaderController } from '../HeaderController';
import { title } from '@/config';
import { FlexBox } from '@/components/styled';
import { YellowButton } from '@/components/YellowButton/YellowButton';
import { StyledAppBar, StyledToolbar, StyledLink } from '../styled';
import { translate } from '@/store/language';

export const DesktopHeader = () => {
  const { language, handleSetLanguage, handleClickLogo, handleOpenChatBot, handleClickLink } =
    HeaderController();

  const links = [
    { text: translate('solutions', language), href: '/solutions' },
    { text: translate('team', language), href: '/about' },
    { text: translate('contact', language), href: '/contact' },
  ];

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
          <select onChange={handleSetLanguage} defaultValue={'english'}>
            <option value={'spanish'}>Español</option>
            <option value={'english'}>English</option>
          </select>
          <YellowButton size="medium" text="What do you need?" onClick={handleOpenChatBot} />
        </FlexBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};
