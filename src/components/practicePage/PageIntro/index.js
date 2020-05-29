import React from "react";
import {makeStyles} from "@material-ui/core/styles/index";
import TitleAndSubtitle from "./TitleAndSubtitle";
import ContributedBy from "./ContributedBy";
import Collection from "./Collection";
import BreadcrumbNav from "./BreadcrumbNav";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  layout: {
    alignItems: "left",
    justify: "flex-start",
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  row: {
    display: "flex",
  },
}));

export default function PageIntro(props) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container direction="column" className={classes.layout}>
        <Grid item>
          <BreadcrumbNav/>
        </Grid>
        <Grid item>
          <TitleAndSubtitle title={props.title} subtitle={props.subtitle}/>
        </Grid>
        <Grid item className={classes.row}>
          <ContributedBy
            authors={props.authors}
            createdAt={props.createdAt}
            updatedAt={props.updatedAt}
          />
        </Grid>
        <Grid item className={classes.row}>
          <Collection
            practiceId={props.practiceId}
            upvotes={props.upvotes}
            imgCount={props.imgCount}
            questions={props.questions}
          />
        </Grid>
      </Grid>
    </>
  );
}
