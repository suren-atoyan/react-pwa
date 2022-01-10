import React from 'react';

import Box from '@mui/material/Box';

import useStyles from './styles';

const Page = props => {
  const classes = useStyles().classes;

  return (
    <Box className={classes.root}>
      {props.children}
    </Box>
  );
};

export default Page;
