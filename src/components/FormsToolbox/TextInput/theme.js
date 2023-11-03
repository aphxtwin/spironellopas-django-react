import { createTheme } from "@mui/material";
// Create a Material-UI theme with custom overrides
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          '& label': {
            fontSize: '14px',
            fontWeight: 500,
            color: '#484848',
          },
          '& .MuiInputBase-input': {
            fontSize: '16px',
            color: '#484848', // Text color
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e4e4e4', // default border color
            },
          },
        },
      },
    },
  },
});
export default theme