import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { TypeItem } from './TypeItem';

export default function TypeSelect() {
  return (
    <Autocomplete
      id="type-select"
      sx={{ width: 300 }}
      options={types}
      autoHighlight
      getOptionLabel={(option) => option.type}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.type}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a type"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

const types = [
    { id: 1, type: "Mug"},
    { id: 2, type: "T-Shirt"},
    { id: 3, type: "Sheet"},
    { id: 4, type: "USB Memory Stick"},
]