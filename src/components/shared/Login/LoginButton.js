import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import { useMutation, useApolloClient } from "@apollo/react-hooks";

import LoginContext from './LoginContext';
import { LOGIN } from "../../../graphql";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  popover: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    display: "flex",
    width: drawerWidth,
    backgroundColor: theme.palette.common.true_white,
    alignContent: "center",
    alignItems: "center",
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
  loginForm: {
  },
  formField: {
    margin: theme.spacing(1),
  },
  submitButton: {
    margin: theme.spacing(1),
    height: "35px",
    borderRadius: "17px",
  },
  btnText: {
    color: theme.palette.common.white,
  }
}));

const LoginButton = (props) => {
  const [anchorEl, setAnchorEl] = React.useState();
  const loggedIn = React.useContext(LoginContext);
  const uRef = React.useRef();
  const pwdRef = React.useRef();
  const client = useApolloClient();

  const classes = useStyles();

  const [login] = useMutation(LOGIN);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await login({
      variables: { identifier: uRef.current.value, password: pwdRef.current.value },
      update: (proxy, { data }) => {
        if (data.login) {
          const jwt = data.login.jwt;
          const id = data.login.user.id;
          proxy.writeData({
            data: { jwt, id }
          });
        }
      }
    });

    if (data.errors) console.error("Error logging in ", data.errors);
    if (data.login) {
      handleClose();
      localStorage.setItem('token', data.login.jwt);
      props.navigate(props.redirect);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    client.clearStore();
    window.location.reload();
  };

  return (
    <>
      <Button
        data-testid="loginButton"
        variant="outlined"
        aria-describedby={id}
        className={classes.loginButton}
        onClick={ loggedIn ? handleLogout : handleClick }
      >
        <Typography variant={"overline"}>
          <b>{ loggedIn ? "Logout" : "Login" }</b>
        </Typography>
      </Button>
      <Popover
        variant="persistent"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{
          root: classes.popover,
          paper: classes.drawerPaper,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              className={classes.loginText}
              data-testid="loginForm"
            >
              Login to the Open Practice Library!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form
              className={classes.loginForm}
              autoComplete="off"
              onSubmit={handleLogin}
            >
              <div>
                <TextField
                  required
                  id="username"
                  inputRef={uRef}
                  className={classes.formField}
                  label="Username/Email"
                  variant="outlined"
                />
                <TextField
                  required
                  id="password"
                  inputRef={pwdRef}
                  className={classes.formField}
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
              >
                <Typography variant={"overline"} className={classes.btnText}>
                  <b>Login</b>
                </Typography>
              </Button>
            </form>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
}

export default LoginButton;
