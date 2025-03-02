import { Link } from 'react-router';

import { Button, Typography } from '@mui/material';

import { FullSizeCentered } from '@/components/styled';

function Page4() {
  return (
    <>
      <meta name="title" content="Page 4" />
      <FullSizeCentered>
        <Typography variant="h3">Page 4</Typography>
        <Button
          to={`/${Math.random().toString()}`}
          component={Link}
          variant="outlined"
          sx={{ mt: 4 }}
          size="small"
          color="warning"
        >
          Whant to check 404?
        </Button>
      </FullSizeCentered>
    </>
  );
}

export default Page4;
