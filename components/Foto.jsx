import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Foto() {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Vorstellungsfoto"
          height="300"
        />
      </Card>
    </Box>
  );
}

export default Foto;
