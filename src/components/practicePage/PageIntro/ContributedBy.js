import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";
import moment from "moment";
import PhotoAndName from "./PhotoAndName";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  space: {
    marginLeft: theme.spacing(7),
    alignContent: "stretch",
  },
}));

export default function ContributedBy(props) {
  const classes = useStyles();
  const formatDate = (date) => {
    return moment(date).format("MMMM D, YYYY");
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        className={classes.root}
      >
        <Grid item>
          <Typography variant="overline">Contributed by</Typography>
        </Grid>

        <Grid item>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            {props.authors.map((author) => (
              <Grid item>
                <PhotoAndName
                  key={author.id}
                  authorName={`${author.firstName} ${author.lastName}`}
                  authorLink={author.mediaLink}
                />
              </Grid>
            ))}
            <Grid item className={classes.space}>
              <Typography variant="overline">
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
