import { Box } from "@mui/system";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const Question = ({
  questionContent,
  question_index,
  answers,
  value,
  handleChange,
}) => {
  return (
    <Box
      mt={2}
      width="100%"
      sx={{
        display: "Flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
        height: "40vh",
      }}
    >
      <FormControl width="100%">
        <Typography mt={2} variant="h4">
          Question #{question_index + 1}
        </Typography>
        <Typography mt={2}>{questionContent}</Typography>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {answers.map((answer, id) => (
            <Box
              mt={2}
              width="100%"
              key={id}
              sx={{
                display: "Flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "left",
              }}
            >
              <FormControlLabel
                value={answer}
                control={<Radio />}
                label={answer}
              />
            </Box>
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Question;
