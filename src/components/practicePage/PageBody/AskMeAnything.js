import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  CircularProgress,
  Grid,
  Typography,
  TextField } from "@material-ui/core"; 
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_AMA_QUESTION, MODIFY_PRACTICE_AMAS } from "../../../graphql/";

export default function AskMeAnything(props) {
  const [createAmaQuestion] = useMutation(CREATE_AMA_QUESTION);
  const [modifyPracticeAmas] = useMutation(MODIFY_PRACTICE_AMAS);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [isSendingQuestion, setIsSendingQuestion] = useState(false);
  const [question, setQuestion] = useState(''); 
  const [questionerName, setQuestionerName] = useState('');
  const [questionerEmail, setQuestionerEmail] = useState('');

  
  const handleSendQuestion = async (practiceId = null) => {
    setIsSendingQuestion(true);
    await createAmaQuestion({
      variables: {
        question,
        questionerName,
        questionerEmail
      }
    }).then((data) => {
       modifyPracticeAmas({
        variables: {
          practiceId,
          newQuestions: data.createQuestion.question.id
        }
      })
    }).catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsSendingQuestion(false);
    })
  }

  return (
    <>
      <Grid
        container
        direction="column"
      >
        <Box mb={4}>
          <Grid item xs={12}>
            <Typography
              variant={"h2"}
              ref={props.amaRef}
            >
              Ask me anything
            </Typography>
            <Box marginY={2}>
              <Typography variant={"body1"}>
                Please send a question to the community about anything you may need for using this practice.
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <TextField
              id="ama"
              variant="outlined"
              fullWidth
              margin="normal"
              onFocus={() => {setShowQuestionForm(true)}}
              multiline
              placeholder="e.g. How do I know when to use this practice?"
              rows="4"
              type="textarea"
              onChange={(event) => { setQuestion(event.target.value)}}
            />
            <Collapse
              in={showQuestionForm}
            >
              <Grid
                alignItems="center"
                container
                spacing={3}
              >
                <Grid item xs={4}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Your name"
                    size="small"
                    onChange={(event) => { setQuestionerName(event.target.value)}}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Your email"
                    type="email"
                    size="small"
                    onChange={(event) => { setQuestionerEmail(event.target.value)}}
                  />               
                </Grid>
                <Grid item xs={3}>
                  <Button
                    fullWidth
                    size="medium"
                    variant="outlined"
                    disabled={isSendingQuestion}
                    onClick={() => {
                      handleSendQuestion(props.practiceId);
                    }}
                  >
                    { isSendingQuestion ? 
                        <CircularProgress />
                        : "Send Question"
                    }
                  </Button>               
                </Grid>
              </Grid>
              <Box marginY={1}>
                <Typography
                  variant={"h6"}
                >
                  Name / email are optional for posting. We will use your name next to the question and email to let you know when it has been answered.
                </Typography>
              </Box>
            </Collapse>
          </Grid>
        </Box>
        <QuestionsAndAnswers
          ama={props.ama}
        />
      </Grid>
  
    </>
  );
}
