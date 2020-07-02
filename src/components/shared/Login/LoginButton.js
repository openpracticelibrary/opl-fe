import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useMutation, useApolloClient } from "@apollo/react-hooks";

import LoginContext from './LoginContext';
import { LOGIN } from "../../../graphql";

import { Box, Dialog, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import OplButton from "../components/OplButton";

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
  const theme = useTheme();
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
      <OplButton
        data-testid="loginButton"
        variant="contained"
        aria-describedby={id}
        bg={theme.palette.primary.light}
        onClick={ loggedIn ? handleLogout : handleClick }
      >
        { loggedIn ? "Logout" : "Login" }
      </OplButton>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: classes.drawerPaper,
        }}
      >
        <DialogTitle>
          Credentials Please?
        </DialogTitle>
        <DialogContent className={classes.container}>
          <form
            className={classes.loginForm}
            autoComplete="off"
            onSubmit={handleLogin}
            data-testid="loginForm"
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
            <OplButton
              type="submit"
              variant="contained"
              bg={theme.palette.primary.light}
            >
              Log me in <ArrowForwardIcon color="primary" />
            </OplButton>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LoginButton;
