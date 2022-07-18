import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NUMBER_OF_QUESTIONS } from "../constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const QuestionNavigation = ({ changeQuestion, question_index }) => {
  return (
    <Box
      mt={5}
      sx={{
        display: "Flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Button
        disabled={question_index === 0}
        color="secondary"
        onClick={() => {
          changeQuestion("back");
        }}
        variant="contained"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
      <Button
        disabled={question_index + 1 === NUMBER_OF_QUESTIONS}
        color="primary"
        onClick={() => {
          changeQuestion("next");
        }}
        variant="contained"
        endIcon={<ArrowForwardIcon />}
      >
        Next
      </Button>
    </Box>
  );
};

export default QuestionNavigation;
