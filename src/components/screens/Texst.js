import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box align="center" sx={{ display: 'flex',justifyContent:'center',alignItems:'center',flex:1}}>
      <CircularProgress />
    </Box>
  );
}