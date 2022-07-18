import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleAnswersSubmit, handleQuestionChange } from "../redux/actions";
import SelectQuestion from "../components/SelectQuestion";
import Question from "../components/Question";
import { NUMBER_OF_QUESTIONS } from "../constants";
import QuestionNavigation from "../components/QuestionNavigation";

const Questions = () => {
  const { question_index, questions } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [chosenValues, setChosenValues] = useState(
    [NUMBER_OF_QUESTIONS].fill(0)
  );
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  const handleChange = (e) => {
    let vals = [...chosenValues];
    vals[question_index] = e.target.value;
    setChosenValues(vals);

    if (vals.filter((v) => v).length === NUMBER_OF_QUESTIONS) {
      setReadyToSubmit(true);
    }
  };

  const changeQuestion = (direction) => {
    let result = question_index;
    if (question_index + 1 < NUMBER_OF_QUESTIONS || question_index - 1 > 0) {
      direction === "next" ? (result += 1) : (result -= 1);
      dispatch(handleQuestionChange(result));
    } else {
      dispatch(handleQuestionChange(0));
    }
  };

  const handleSubmit = () => {
    dispatch(handleQuestionChange(0));
    dispatch(handleAnswersSubmit(chosenValues));
    navigate("/results");
  };

  return (
    <Box>
      <SelectQuestion question_index={question_index} />
      <Question
        answers={questions[question_index].options}
        questionContent={questions[question_index].question}
        question_index={question_index}
        value={chosenValues[question_index] || ""}
        handleChange={handleChange}
      />
      <QuestionNavigation
        changeQuestion={changeQuestion}
        question_index={question_index}
      />
      <Box mt={5}>
        <Button
          size="large"
          onClick={handleSubmit}
          disabled={!readyToSubmit}
          fullWidth
          variant="contained"
        >
          Submit your Answers !!!
        </Button>
      </Box>
    </Box>
  );
};

export default Questions;
