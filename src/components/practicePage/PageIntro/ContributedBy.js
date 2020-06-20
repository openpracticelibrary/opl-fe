import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";
import moment from "moment";
import PhotoAndName from "./PhotoAndName";
import EditorPhotos from "./EditorPhotos";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  space: {
    paddingLeft: theme.spacing(3),
  },
  editorBox: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  editorDiv: {
    position: "absolute",
  },
}));

export default function ContributedBy(props) {
  const classes = useStyles();
  const formatDate = (date) => {
    return moment(date).format("MMMM D, YYYY");
  };
  let contributors = [];
  let editors = [];

  if (props.authors.length > 2) {
    contributors = props.authors.slice(0, 2);
    editors = props.authors.slice(2, props.authors.length);
  } else {
    contributors = props.authors;
  }

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        className={classes.root}
        spacing={1}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Box className={classes.contributedBy}>
              <Typography variant="overline">Contributed by</Typography>
              <Grid item>
                <Box className={classes.editorBox}>
                  {contributors.map((author, i) => (
                    <PhotoAndName
                      key={author.id}
                      authorName={`${author.firstName} ${author.lastName}`}
                      authorLink={author.mediaLink}
                    />
                  ))}
                </Box>
              </Grid>
            </Box>
            <Box className={classes.editedBy}>
              { (editors.length > 0) &&
                <>
                  <Typography variant="overline">Edited by</Typography>
                  <Grid item>
                    <Box className={classes.editorBox}>
                      {editors.map((author, i) => (
                        <div key={i}>
                          <EditorPhotos />
                        </div>
                      ))}
                    </Box>
                  </Grid>
                </>
              }
            </Box>
            <Grid item className={classes.space}>
              <Typography variant="overline" data-testid={"dates"}>
                Published {formatDate(props.createdAt)} | Last edited{" "}
                {formatDate(props.updatedAt)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
