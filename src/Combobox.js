import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 165, display: 'inline'}}
      renderInput={(params) => <TextField {...params} label="회사" />}
    />
  );
}

// Combobox : 회사 이름 넣기
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];

/*
import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function CustomizedSelects() {
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox" >회사</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label" >회사</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={name}
          onChange={handleChange}
          input={<BootstrapInput/>}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>포스코</MenuItem>
          <MenuItem value={20}>포스코ICT</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
*/