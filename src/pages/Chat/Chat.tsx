import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Chat() {
  return (
    <>
      <Meta title="Chat with us!" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">{"Let's Chat"}</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Chat;
