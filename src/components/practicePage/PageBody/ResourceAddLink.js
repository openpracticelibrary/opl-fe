import React, { useState, useRef } from "react";
import {
  useTheme,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  Text,
  IconButton,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Icon,
  Button,
} from "@chakra-ui/core";
import isValidURL from "url-validation";
import Filter from "bad-words";
import { useMutation } from "@apollo/react-hooks";

import { UPDATE_PRACTICE_RESOURCES } from "../../../graphql";

export default function ResourceAddLink(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();
  const [updatePracticeResources] = useMutation(UPDATE_PRACTICE_RESOURCES);
  const [linkType, setLinkType] = useState('');
  const [urlValid, setUrlValid] = useState(true);
  const [textValid, setTextValid] = useState(true);
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const refLinkUrl = useRef();
  const refLinkDesc = useRef();

  const isURLValid = () => {
    const res = isValidURL(refLinkUrl.current.value);
    setUrlValid(res);
  };

  const isValidText = () => {
    const filter = new Filter();
    const hasBadWords = filter.isProfane(refLinkDesc.current.value);
    if (!refLinkDesc.current.value || hasBadWords) {
      setTextValid(false);
      return;
    }
    setTextValid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!refLinkUrl.current.value || !urlValid) {
      return;
    }

    if (!refLinkDesc.current.value || !textValid) {
      return;
    }

    const prevResourceList = props.prevResources.map(resource => {
      return {
        link: resource.link,
        linkType: resource.linkType,
        description: resource.description
      }
    });

    const additionalResource = [
      {
        link: refLinkUrl.current.value,
        linkType: linkType || "web",
        description: refLinkDesc.current.value,
      }
    ];
    const newResources = prevResourceList.concat(additionalResource);
    const { data } = await updatePracticeResources({
      variables: {
        practiceId: props.practiceId,
        newResources,
      },
    });
    if (data) {
      setThankYouOpen(true);
    }
  };

  const handleClickListItem = (event) => {
    setLinkType(event.target.value)
  };

  const handleClose = (event) => {
    onClose();
    setThankYouOpen(false);
    setLinkType('');
    if (refLinkUrl.current) {
      refLinkUrl.current.value = "";
    }
    if (refLinkDesc.current) {
      refLinkDesc.current.value = "";
    }
  };

  const handleThankYouSubmit = () => {
    setThankYouOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        leftIcon="addOutline"
        onClick={onOpen}
        data-testid="addResourcesButton"
        color="blue.500"
        w="fit-content"
        my={5}
      >
        <Text
          color="grey.500"
          fontSize="md"
          fontWeight="400"
        >
              Add a link
        </Text>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        isCentered
        closeOnOverlayClick={thankYouOpen}
      >
        <ModalOverlay />
        <ModalContent
          borderWidth="3px"
          borderColor="blue.500"
          borderRadius={17}
          minW={600}
          pt={4}
        >
          {thankYouOpen ?
            <ModalHeader
              fontFamily="heading"
              fontWeight="400"
              fontSize="3xl"
              textAlign="center"
            >
              Awesome! <br/> Thanks for the link!
            </ModalHeader>
            :
            <ModalHeader
              fontFamily="heading"
              fontWeight="400"
              fontSize="3xl"
              textAlign="center"
              data-testid="addResourceForm"
            >
              Add a link you love!
            </ModalHeader>
          }
          <ModalBody px={12}>
            {!thankYouOpen &&
              <>
                <Stack spacing={4}>
                  <Stack isInline spacing={2}>
                    <FormControl isRequired>
                      <FormLabel htmlFor="linkType">Link Type</FormLabel>
                      <Select
                        id="linkType"
                        onChange={handleClickListItem}
                      >
                        {props.linkTypes.map((option, index) => (
                          <option
                            key={index}
                            value={option}
                          >
                            {option}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl isRequired isInvalid={!urlValid} w="100%">
                      <FormLabel htmlFor="link">Link URL</FormLabel>
                      <Input
                        onChange={isURLValid}
                        id="link"
                        placeholder="Link URL"
                        type="url"
                        ref={refLinkUrl}
                      />
                      <FormErrorMessage>Link URL must be a valid URL</FormErrorMessage>
                    </FormControl>
                  </Stack>
                  <FormControl isRequired isInvalid={!textValid}>
                    <FormLabel htmlFor="linkDesc">Link Description</FormLabel>
                    <Input
                      onChange={isValidText}
                      id="linkDesc"
                      placeholder="Link Description"
                      type="text"
                      ref={refLinkDesc}
                    />
                    <FormErrorMessage>
                        Link Description cannot be blank, and cannot contain profanity
                    </FormErrorMessage>
                  </FormControl>
                </Stack>
                <Button
                  {...theme.brand.buttons.loginButton}
                  onClick={handleSubmit}
                  mt={5}
                >
                  Contribute this link <Icon name="arrow-forward" fontSize="xl" color="blue.500" />
                </Button>
              </>
            }
          </ModalBody>
          <ModalFooter>
            {thankYouOpen ?
              <Button
                {...theme.brand.buttons.loginButton}
                onClick={handleThankYouSubmit}
              >
                <Icon name="arrow-back" fontSize="xl" color="blue.500" /> Add another link
              </Button>
              :
              <>
                <Text color="grey.500" fontSize="sm">
                  *Required fields :)
                </Text>
                <IconButton
                  ml={4}
                  onClick={onClose}
                  variant="ghost"
                  icon="close"
                  size="0.75rem"
                  color="grey.500"
                />
              </>
            }
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
