import React, { useRef } from "react";
import PageIntro from "../components/practicePage/PageIntro";
import {makeStyles} from "@material-ui/core/styles";
import PageMenu from "../components/practicePage/PageMenu";
import PageBody from "../components/practicePage/PageBody";
import Grid from "@material-ui/core/Grid";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRACTICE_PAGE, currentUserQuery } from "../graphql";
import Divider from "@material-ui/core/Divider";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LoginDrawer from "../components/Home/LoginDrawer";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";
import Loading from "../components/shared/QueryState/Loading.js";
import QueryError from "../components/shared/QueryState/QueryError";
import { EditIcon } from "../assets/icons";

const useStyles = makeStyles((theme) => ({
  alignComponentContent: {
    direction: "column",
    justify: "flex-start",
    alignItems: "flex-start",
  },
  whiteColor: {
    backgroundColor: theme.palette.common.white,
  },
  trueWhiteColor: {
    backgroundColor: theme.palette.common.true_white,
  },
  pageIntro: {
    paddingTop: theme.spacing(6),
  },
  loginBox: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: theme.spacing(3),
  },
  loginButton: {
    height: "34px",
    width: "122px",
    borderRadius: "17px",
  },
  loginDrawerClose: {
    margin: theme.spacing(2),
    borderRadius: "17px",
  },
  loginText: {
    margin: theme.spacing(1),
  },
}));

export default function PracticePageContent(props) {
  const [open, setOpen] = React.useState();
  const [editing, setEditing] = React.useState();
  const classes = useStyles();
  const whatIsRef = useRef(null);
  const mediaRef = useRef(null);
  const whyDoRef = useRef(null);
  const howToRef = useRef(null);
  const resourceRef = useRef(null);
  const amaRef = useRef(null);

  const { data: loggedIn } = useQuery(currentUserQuery);
  const { name: slug } = props;
  const { loading, error, data } = useQuery(GET_PRACTICE_PAGE, {
    variables: { slug },
  });

  if (loading) return <Loading />;
  if (error) return <QueryError err={error} />;

  const toggleLoginDrawer = () => {
    setOpen(!open);
  };

  const handleEdit = () => {
    setEditing(!editing);
  };

  return (
    <>
      <Box className={classes.trueWhiteColor}>
        <Box display="flex" className={classes.whiteColor}>
          <Box className={classes.loginBox}>
            <Button
              variant="outlined"
              className={classes.loginButton}
              onClick={toggleLoginDrawer}
            >
              <Typography variant={"overline"}>
                <b>Login</b>
              </Typography>
            </Button>
          </Box>
          <Grid container className={classes.alignComponentContent}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8} className={classes.pageIntro}>
              <PageIntro
                practiceId={data.practices[0].id}
                title={data.practices[0].title}
                tags={data.practices[0].tags}
                subtitle={data.practices[0].subtitle}
                authors={data.practices[0].authors}
                createdAt={data.practices[0].createdAt}
                updatedAt={data.practices[0].updatedAt}
                imgCount={data.practices[0].mediaGallery.length}
                questions={data.practices[0].ama.length}
                upvotes={data.practices[0].upvotes}
                editing={editing}
              >
                { !loggedIn &&
                <IconButton onClick={handleEdit}>
                  {editing ? <CloseIcon /> : <EditIcon height="25" />}
                </IconButton>
                }
              </PageIntro>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Box>

        <Divider/>
        <Box display="flex">
          <Grid container className={classes.alignComponentContent}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
              <PageMenu
                whatIsRef={whatIsRef}
                mediaRef={mediaRef}
                whyDoRef={whyDoRef}
                howToRef={howToRef}
                resourceRef={resourceRef}
                amaRef={amaRef}
              />
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Box>
        <Divider/>

        <Box display="flex">
          <Grid container className={classes.alignComponentContent}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
              <PageBody
                title={data.practices[0].title}
                body={data.practices[0].body}
                mediaGallery={data.practices[0].mediaGallery}
                resources={data.practices[0].resources}
                ama={data.practices[0].ama}
                whatIsRef={whatIsRef}
                mediaRef={mediaRef}
                whyDoRef={whyDoRef}
                howToRef={howToRef}
                resourceRef={resourceRef}
                amaRef={amaRef}
                editing={editing}
              />
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <LoginDrawer open={open} navigate={props.navigate}>
        <IconButton onClick={toggleLoginDrawer} className={classes.loginDrawerClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h3" className={classes.loginText}>Login to the Open Practice Library!</Typography>
      </LoginDrawer>
    </>
  );
}
