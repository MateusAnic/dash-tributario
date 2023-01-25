import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { StyledSelect } from "./style";
import { setMessageRegister } from "../../store/registerSlices/actions";

interface Props extends SelectProps {
  data?: Array<any>;
  label?: string;
  type: string;
  change?: (params: any) => void;
}

const SelectDashboard: React.FC<Props> = ({ data, label, type, change }) => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setValue(e.target.value as string);
    dispatch(setMessageRegister(""));
    if (change) {
      return change(e.target.value);
    }
  };

  const createMenu = () => {
    const menuToCreate: { [index: string]: any } = {
      customer: () =>
        data?.map((item, key) => {
          return (
            <MenuItem value={item._id} key={key}>
              {item.razaoSocial}
            </MenuItem>
          );
        }),
      default: () =>
        data?.map((item, key) => {
          return (
            <MenuItem value={item} key={key}>
              {item}
            </MenuItem>
          );
        }),
    };
    return menuToCreate[type]();
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={(e) => handleChange(e)}
        >
          {createMenu()}
        </StyledSelect>
      </FormControl>
    </Box>
  );
};

export { SelectDashboard };
