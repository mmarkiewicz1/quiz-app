import { decode } from "html-entities";

const prepareQuestions = (response) =>
  response.map((item) => ({
    question: decode(item.question),
    options: [...item.incorrect_answers, item.correct_answer]
      .map((item) => decode(item))
      .sort(() => 0.5 - Math.random()),
    correctAnswer: decode(item.correct_answer),
  }));
export default prepareQuestions;
