import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown({
  onChange,
  label,
  currentValue,
  values = []
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
    
  };
 
  return (
    <Box sx={{ paddingBlockEnd: 2 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={currentValue} label={label} onChange={handleChange}>
          {values.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  values: PropTypes.arrayOf(PropTypes.string)
};
