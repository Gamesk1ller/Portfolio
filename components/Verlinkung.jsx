import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Verlinkungen() {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
        GitHub
      <Button
        variant="contained"
        color="secondary"
        href="https://www.wikipedia.com"
        target="_blank"
        sx={{ mx: 2 }}
      >
        Test - Wikipedia
      </Button>
    </Box>
  );
}

export default Verlinkungen;
