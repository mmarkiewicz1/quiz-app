import React, { useEffect } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAxios from "../utils/useAxios";
import { NUMBER_OF_QUESTIONS } from "../constants";
import prepareQuestions from "../utils/prepareQuestions";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { handleLoadQuestions } from "../redux/actions";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const { response, loading, error } = useAxios({
    url: `/api.php?amount=${NUMBER_OF_QUESTIONS}`,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (response?.results.length) {
      const questions = prepareQuestions(response.results);
      dispatch(handleLoadQuestions(questions));
    }
  }, [response, dispatch]);

  if (loading) {
    return (
      <Box mt={30}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={30} color="red">
        {"There was an error, while running the application" + error}
      </Typography>
    );
  }
  const handleClick = () => {
    navigate("/questions");
  };

  return (
    <div>
      <Typography variant="h2" mt={5}>
        Hello Welcome in Quiz App
      </Typography>
      <Typography variant="h5" mt={3}>
        Press start button to proceed!
      </Typography>
      <Box mt={5}>
        <Button fullWidth variant={"contained"} onClick={() => handleClick()}>
          START
        </Button>
      </Box>
    </div>
  );
};

export default WelcomeScreen;
