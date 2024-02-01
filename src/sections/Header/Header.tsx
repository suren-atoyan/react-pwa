import useOrientation from '@/hooks/useOrientation';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

function Header() {
  const isPortrait = useOrientation();

  if (isPortrait) {
    return <MobileHeader />;
  }
  return <DesktopHeader />;
}

export default Header;
