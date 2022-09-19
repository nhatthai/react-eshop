import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function BrandSelect() {
  return (
    <Autocomplete
      id="type-select"
      sx={{ width: 300 }}
      options={brands}
      autoHighlight
      getOptionLabel={(option) => option.brand}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.brand}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a brand"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

const brands = [
    { id: 1, brand: "Azure"},
    { id: 2, brand: ".NET"},
    { id: 3, brand: "Visual Studio"},
    { id: 4, brand: "SQL Server"},
]