import React from 'react';
import { Box, TextField, ThemeProvider } from '@mui/material';
import theme from './theme'

const TextInput = ({ label, name, placeholder, value, onChange, customClassName }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        mt={2}
        sx={{width:'100%'}}
      >
        <TextField
          className={customClassName}
          label={label}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          variant="outlined"
          fullWidth
          required
        />
      </Box>
    </ThemeProvider>
  );
};

export default TextInput;
