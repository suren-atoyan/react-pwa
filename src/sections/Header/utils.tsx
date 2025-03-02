import { Stack, Typography } from '@mui/material';

import jokes from '@/config/it-jokes';

function getRandomJoke() {
  const randomIndex = Math.round(Math.random() * (jokes.length - 1));
  const randomJoke = jokes[randomIndex];

  return (
    <Stack gap={0.5}>
      <Typography variant="body1" fontWeight={900}>
        Notification demo (random IT jokes)
      </Typography>
      <Typography variant="body1">{randomJoke}</Typography>
    </Stack>
  );
}

export { getRandomJoke };
