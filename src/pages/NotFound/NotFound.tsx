import { FullSizeCentered } from '@/components/styled';

import notFoundGif from './404.gif';
import { Image } from './styled';

function NotFound() {
  return (
    <FullSizeCentered flexDirection="column">
      <Image src={notFoundGif} />
    </FullSizeCentered>
  );
}

export default NotFound;
