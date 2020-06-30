import React from "react";
import { useDropzone } from 'react-dropzone';
import {
  useTheme,
  useDisclosure,
  CircularProgress,
  Box,
  Flex,
  Image,
  Stack,
  Text,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Icon,
  Button
} from "@chakra-ui/core";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";
import { createUploadLink } from "apollo-upload-client";

import { UPLOAD_FILE, UPDATE_MEDIA_GALLERY } from "../../../graphql";
import AddImage from "../../../assets/images/add.png";

const MEDIA_ENDPOINT = process.env.REACT_APP_MEDIA_SERVICE_ENDPOINT || "/image-upload";

const AddImageCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();
  const [files, setFiles] = React.useState([]);
  const linkInputRef = React.useRef();
  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      acceptedFiles.forEach(async (file) => {
        const { data } = await uploadFile({ variables: { file } });

        if (data) {
          file.url = data.singleUpload.url;
          setFiles([...files, Object.assign(file)]);
        }
      });
    }
  });

  const [updateMediaGallery] = useMutation(UPDATE_MEDIA_GALLERY);

  const [uploadFile, { loading: uploadLoading }] = useMutation(
    UPLOAD_FILE,
    {
      client: new ApolloClient({
        cache: new InMemoryCache(),
        link: createUploadLink({
          uri: MEDIA_ENDPOINT,
        }),
      })
    }
  );

  const handleSubmit = async () => {
    const prevMediaGallery = props.currentMediaGallery.map(file => { return { link: file.link } });
    const additionsGallery = files.map(file => { return { link: file.url } });
    const newGallery = prevMediaGallery.concat(additionsGallery);
    const { data } = await updateMediaGallery({
      variables: {
        practiceId: props.practiceId,
        newGallery,
      },
    });

    if (data) console.log('Updated!');
  };

  const handleAddLink = () => {
    if (linkInputRef.current.value.includes(",")) {
      const multiFiles = linkInputRef.current.value.split(",").map(link => {
        return {
          url: link.trim(),
          direct: true
        }
      });
      setFiles([...files, ...multiFiles]);
    } else {
      const newFile = { url: linkInputRef.current.value, direct: true };
      setFiles([...files, newFile]);
    }

    linkInputRef.current.value = "";
  };

  const accepted = files.map((file, i) => {
    return (
      <Box
        key={i}
        p={2}
        my={1}
        bg="grey.50"
        fontFamily="heading"
        color="black"
        display="inline-block"
        borderRadius={17}
      >
        {file.url}
      </Box>
    );
  });

  return (
    <>
      <Image
        src={AddImage}
        alt="Add new media"
        onClick={onOpen}
      />
      <Modal
        maxWidth="sm"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          borderWidth="3px"
          borderColor="blue.500"
          borderRadius={17}
          minW={600}
          pt={4}
        >
          <ModalHeader
            fontFamily="heading"
            fontWeight="400"
            fontSize="3xl"
            textAlign="center"
          >
            Add an image or video to this gallery!
          </ModalHeader>
          <ModalBody px={12}>
            <Stack spacing={2}>
              <Flex
                direction="column"
                align="center"
                justify="center"
                minH="9.375rem"
                p={2}
                m={1}
                border="2px"
                borderRadius="2px"
                borderStyle="dashed"
                borderColor="grey.500"
                outline="none"
                fontFamily="heading"
                {...getRootProps()}
              >
                <Input {...getInputProps()} />
                    Drop some images here, or click to select images
                <em>Or Paste a link to an image or YouTube video</em>
              </Flex>
              <InputGroup>
                <Input
                  rounded={6.5}
                  placeholder="Image or YouTube Web Link"
                  ref={linkInputRef}
                  fontFamily="heading"
                  focusBorderColor="blue.500"
                  isFullWidth
                />
                <InputRightElement
                  children={
                    <IconButton fontSize="lg" variant="ghost" icon="addCircle" color="blue.500" />
                  }
                  onClick={handleAddLink}
                />
              </InputGroup>
              <Text fontFamily="heading" textTransform="uppercase">Uploaded Files</Text>
              <Box>
                {uploadLoading ? <CircularProgress isIndeterminate color="blue.500" /> : accepted}
              </Box>
            </Stack>
            <Button
              {...theme.brand.buttons.loginButton}
              onClick={handleSubmit}
            >
                Submit Links <Icon name="arrow-forward" fontSize="xl" color="blue.500" />
            </Button>
          </ModalBody>
          <ModalFooter>
            <IconButton variant="ghost" icon="close" onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddImageCard;
