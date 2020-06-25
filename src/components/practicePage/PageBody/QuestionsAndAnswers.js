import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import QuestionStamp from './QuestionStamp';
import { useTheme } from "@material-ui/core/styles/index";
import { AmaIcon } from "../../../assets/icons";

export default function QuestionsAndAnswers(props) {
  const theme = useTheme();
  return (
    <>
      {props.ama.map((qAndA, i) => (
        <Grid
          direction="column"
          container
          key={i}
          justify="flex-start"
        >
          <Grid item>
            <QuestionStamp
              userName={qAndA.questionerName}
              datePosted={qAndA.createdAt}
            />
          </Grid>      
          <Grid
            direction="row"
            alignItems="flex-start" 
            container
            spacing={2}
            wrap="nowrap"
          >
            <Grid item>
              <AmaIcon
                fill={theme.palette.common.discovery_blue}
                height="1.75rem"
                width="1.75rem" 
              />
            </Grid>
            <Grid item>
              <Typography
                variant={"h2"}
              >
                {qAndA.question}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            {qAndA.answers.map((response, i) => (
              <Box 
                marginY={2} 
                ml={6}
              >
                <QuestionStamp
                  key={i}
                  isQuestion={false}
                />
                <Typography variant="body1">
                  {response.answer}
                </Typography>
              </Box>
            ))}
          </Grid>    
        </Grid>
      ))}
    </>
  );
}
