import React from 'react';
import { useMutation, useApolloClient } from "@apollo/react-hooks";

import {
  useTheme,
  useDisclosure,
  Stack,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Icon,
} from "@chakra-ui/core";

import LoginContext from './LoginContext';
import { LOGIN } from "../../../graphql";

const LoginButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();
  const loggedIn = React.useContext(LoginContext);
  const uRef = React.useRef();
  const pwdRef = React.useRef();

  const client = useApolloClient();
  const [login] = useMutation(LOGIN);

  const id = isOpen ? 'Login Modal' : undefined;

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
      onClose();
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
        aria-describedby={id}
        {...theme.brand.buttons.loginButton}
        onClick={loggedIn ? handleLogout : onOpen}
      >
        { loggedIn ? "Logout" : "Login" }
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        returnFocusOnClose={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          borderWidth="3px"
          borderColor="blue.500"
          borderRadius="17px"
          width={450}
          pt={4}
        >
          <ModalHeader
            fontFamily="heading"
            fontWeight="400"
            fontSize="3xl"
            textAlign="center"
          >
            Credentials Please?
          </ModalHeader>
          <ModalBody px={12} py={6}>
            <form onSubmit={handleLogin}>
              <Stack spacing={5}>
                <Input
                  isRequired
                  ref={uRef}
                  placeholder="Username/Email"
                  fontFamily="heading"
                />
                <Input
                  isRequired
                  ref={pwdRef}
                  placeholder="Password"
                  type="password"
                  fontFamily="heading"
                />
              </Stack>
              <Button
                type="submit"
                {...theme.brand.buttons.loginButton}
                mt={8}
              >
                Log me in <Icon name="arrow-forward" fontSize="xl" color="blue.500" />
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginButton;
