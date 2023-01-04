import React, { FC } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { StyledSelect } from "./style";

interface Props extends SelectProps {
  handleChange?: () => void;
  data?: Array<string>;
  label?: string;
}

const SelectDashboard: React.FC<Props> = ({ handleChange, data, label }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label={label}
          onChange={handleChange}
        >
          {data?.map((item, key) => {
            return <MenuItem value={key}>{item}</MenuItem>;
          })}
        </StyledSelect>
      </FormControl>
    </Box>
  );
};

// const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

export { SelectDashboard };
