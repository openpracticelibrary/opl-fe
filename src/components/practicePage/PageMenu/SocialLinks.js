import React from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  Stack,
  Text,
  IconButton,
  Icon,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/core";

import {
  EmailShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  FacebookShareButton
} from "react-share";

import { FacebookIcon, RedditIcon, PinterestIcon, NounLoveIcon } from "../../../assets/icons";
import { LIKE_PRACTICE } from "../../../graphql/";

export default function SocialLinks(props) {
  const [liked, setLiked] = React.useState();
  const [likePractice] = useMutation(LIKE_PRACTICE);
  const handleLike = () => {
    const originalLikes = props.upvotes;
    const newUpvotes = originalLikes + 1;
    likePractice({
      variables: {practiceId: props.practiceId, upvotes: newUpvotes},
    });
    setLiked(true);
  };

  return (
    <Stack isInline spacing={4} align="center">
      <Text
        fontFamily="heading"
        fontWeight="500"
        fontSize="sm"
        textTransform="uppercase"
        color="grey.500"
      >
        Like
      </Text>
      {liked ?
        <IconButton isRound variant="ghost" icon="like" color="blue.500" />
        :
        <IconButton
          isRound
          variant="ghost"
          icon={NounLoveIcon}
          onClick={handleLike}
          data-testid={"heartIcon"}
        />
      }
      <Text
        fontFamily="heading"
        fontWeight="500"
        fontSize="sm"
        textTransform="uppercase"
        color="grey.500"
      >
        Share
      </Text>
      <EmailShareButton url={window.location.href}>
        <Icon name="email" fontSize="lg" mr={1} />
      </EmailShareButton>
      <TwitterShareButton url={window.location.href}>
        <Icon name="twitter" fontSize="lg" mx={1} />
      </TwitterShareButton>
      <LinkedinShareButton url={window.location.href}>
        <Icon name="linkedIn" fontSize="md" ml={1} />
      </LinkedinShareButton>
      <Menu>
        <MenuButton as={IconButton} variant="ghost" icon="moreItems" isRound />
        <MenuList minW="50px">
          <Stack justify="center" align="center" spacing={2}>
            <PinterestShareButton url={window.location.href} media={props.coverImage}>
              <PinterestIcon/>
            </PinterestShareButton>
            <br />
            <RedditShareButton url={window.location.href}>
              <RedditIcon/>
            </RedditShareButton>
            <br />
            <FacebookShareButton url={window.location.href}>
              <FacebookIcon/>
            </FacebookShareButton>
          </Stack>
        </MenuList>
      </Menu>
    </Stack>
  );
}
