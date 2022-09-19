import React from 'react';
import BrandSelect from './BrandSelect';
import TypeSelect from './TypeSelect';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function HomePage() {
  return (
    <div className="container">
        <h1>Landing Page</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TypeSelect />
          </Grid>
          <Grid item xs={6} md={3}>
            <BrandSelect />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export { HomePage };