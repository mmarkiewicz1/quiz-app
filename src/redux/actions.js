import {
  CHANGE_QUESTION,
  SUBMIT_USER_ANSWERS,
  LOAD_QUESTIONS,
} from "./actionsTypes";

export const handleQuestionChange = (payload) => ({
  type: CHANGE_QUESTION,
  payload,
});

export const handleAnswersSubmit = (payload) => ({
  type: SUBMIT_USER_ANSWERS,
  payload,
});

export const handleLoadQuestions = (payload) => ({
  type: LOAD_QUESTIONS,
  payload,
});
