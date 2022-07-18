import {
  CHANGE_QUESTION,
  LOAD_QUESTIONS,
  SUBMIT_USER_ANSWERS,
} from "./actionsTypes";

const initialState = {
  question_index: 0,
  user_answers: [],
  questions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QUESTION:
      return {
        ...state,
        question_index: action.payload,
      };
    case SUBMIT_USER_ANSWERS:
      return {
        ...state,
        user_answers: action.payload,
      };
    case LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
