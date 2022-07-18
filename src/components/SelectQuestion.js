import { FormControl, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleQuestionChange } from "../redux/actions";
import { NUMBER_OF_QUESTIONS } from "../constants";

const SelectQuestion = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(handleQuestionChange(e.target.value));
  };

  return (
    <Box width="100%">
      <FormControl size="small" fullWidth>
        <Select value={value} onChange={handleChange}>
          {[...Array(NUMBER_OF_QUESTIONS)].map((_, id) => (
            <MenuItem value={id} key={id}>
              {`Question #${id + 1}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectQuestion;
