import {
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleAnswersSubmit, handleLoadQuestions } from "../redux/actions";

const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user_answers, questions } = useSelector((state) => state);
  const handleReturnToMainMenu = () => {
    dispatch(handleLoadQuestions([]));
    dispatch(handleAnswersSubmit([]));
    navigate("/");
  };
  const checkScore = (idx) =>
    user_answers[idx] === questions[idx].correctAnswer;
  const score = questions.filter((_, idx) => checkScore(idx)).length;

  return (
    <Box mt={10} sx={{ height: "100vh" }}>
      <Typography variant="h1" fontWeight="bold" mb={3}>
        Final Result {score}
      </Typography>
      <List>
        {questions.map((question, idx) => (
          <Box mt={5}>
            <ListItem key={idx}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                {question.question}
              </Typography>
            </ListItem>

            <Divider />
            {checkScore(idx) ? (
              <ListItem key={idx} sx={{ backgroundColor: "#559364" }}>
                {user_answers[idx]}
              </ListItem>
            ) : (
              <>
                <ListItem key={idx} sx={{ backgroundColor: "#559364" }}>
                  {question.correctAnswer}
                </ListItem>
                <Divider />
                <ListItem key={idx} sx={{ backgroundColor: "#DF0113" }}>
                  {user_answers[idx]}
                </ListItem>
              </>
            )}
          </Box>
        ))}
      </List>
      <Box m={5}>
        <Button onClick={handleReturnToMainMenu} fullWidth variant="contained">
          back to Main Menu
        </Button>
      </Box>
    </Box>
  );
};

export default Results;
