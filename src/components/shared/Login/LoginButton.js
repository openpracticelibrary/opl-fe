import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useMutation, useApolloClient } from "@apollo/react-hooks";

import LoginContext from './LoginContext';
import { LOGIN } from "../../../graphql";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  container: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    borderRadius: "17px",
    borderWidth: "3px",
    borderColor: theme.palette.common.discovery_blue,
    borderStyle: "solid",
    display: "flex",
    textAlign: "center",
    padding: theme.spacing(3),
  },
  loginButton: {
    borderRadius: "32px",
    width: "7rem",
    backgroundColor: "#dff1ff",
    padding: theme.spacing(2),
    borderColor: theme.palette.common.discovery_blue,
    borderWidth: "1px",
    borderStyle: "solid",
  },
  buttonText: {
    fontWeight: "500",
    color: theme.palette.common.black,
  },
  loginDrawerClose: {
    margin: theme.spacing(2),
    borderRadius: "17px",
  },
  loginText: {
    margin: theme.spacing(1),
  },
  formField: {
    margin: theme.spacing(1),
  },
  submitButton: {
    margin: theme.spacing(1),
    borderRadius: "32px",
    borderStyle: "solid",
    borderColor: theme.palette.common.discovery_blue,
    borderWidth: "2px",
  },
  btnText: {
    padding: theme.spacing(1),
    color: theme.palette.common.black,
  },
  arrowForward: {
    top: ".25em",
    position: "relative",
    color: theme.palette.common.discovery_blue,
  },
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
        variant="contained"
        aria-describedby={id}
        className={classes.loginButton}
        onClick={ loggedIn ? handleLogout : handleClick }
      >
        <Typography variant={"button"} className={classes.buttonText}>
          { loggedIn ? "Logout" : "Login" }
        </Typography>
      </Button>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: classes.drawerPaper,
        }}
      >
        <DialogTitle disableTypography={true}>
          <Typography
            variant="subtitle2"
            className={classes.loginText}
            data-testid="loginForm"
          >
              Credentials Please?
          </Typography>
        </DialogTitle>
        <DialogContent className={classes.container}>
          <form
            className={classes.loginForm}
            autoComplete="off"
            onSubmit={handleLogin}
          >
            <Box>
              <TextField
                required
                fullWidth
                id="username"
                inputRef={uRef}
                className={classes.formField}
                label="Username/Email"
                variant="outlined"
              />
            </Box>
            <Box>
              <TextField
                required
                fullWidth
                id="password"
                inputRef={pwdRef}
                className={classes.formField}
                label="Password"
                type="password"
                variant="outlined"
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              className={classes.submitButton}
            >
              <Typography variant={"button"} className={classes.btnText}>
                Log me in <ArrowForwardIcon className={classes.arrowForward} />
              </Typography>
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LoginButton;
