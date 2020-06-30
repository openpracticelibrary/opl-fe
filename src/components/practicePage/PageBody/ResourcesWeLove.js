import React from "react";
import {
  Text,
  Heading,
  Link,
  Icon,
  Stack,
} from "@chakra-ui/core";

import ResourceAddLink from "./ResourceAddLink";
import ResourceListItem from "./ResourceListItem";

//todo: (@Darcie) icons for video, purchase, books
//todo: review the structure of the resource.description

const LinkIcon = {
  web: <Icon name="webLink" />,
  download: <Icon name="nounDownload" size="1.25rem" ml={-1} />,
  podcast: <Icon name="podcast" size="1.25rem" ml={-1} />,
  video: <Icon name="video" size="1.15rem" ml={-1} />,
  purchase: <Icon name="webLink" />,
  book: <Icon name="webLink" />,
};

export default function ResourcesWeLove(props) {
  const [expanded, setExpanded] = React.useState(false);
  const linkTypes = Object.keys(LinkIcon);

  const resourceLinkList = () => {
    const resourceList = props.links.filter(resource => resource.link.length > 0);
    const listLength = resourceList.length;
    let initialLinkList = [];
    let expandedLinkList = [];
    let expandedListLength = 0;
    if (listLength > 5) {
      initialLinkList = resourceList.slice(0, 5);
      expandedLinkList = resourceList;
      expandedListLength = listLength - 5;
    } else {
      initialLinkList = resourceList;
    }

    if (expanded) {
      return (
        <React.Fragment>
          {expandedLinkList.map((resource, i) => (
            <ResourceListItem
              key={i}
              listItemKey={i}
              url={resource.link}
              description={resource.description}
              linkType={resource.linkType}
            >
              {LinkIcon[resource.linkType]}
            </ResourceListItem>
          ))}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {initialLinkList.map((resource, i) => (
          <ResourceListItem
            key={i}
            listItemKey={i}
            url={resource.link}
            description={resource.description}
            linkType={resource.linkType}
          >
            {LinkIcon[resource.linkType]}
          </ResourceListItem>
        ))}
        {(resourceList.length > 5 && !expanded) &&
          <Link
            fontSize="sm"
            fontFamily="heading"
            textTransform="uppercase"
            onClick={handleExpand}
          >
            See {expandedListLength} more links
          </Link>
        }
      </React.Fragment>
    );
  };


  const handleExpand = () => {
    setExpanded(true);
  };

  return (
    <>
      <Heading fontSize="section" ref={props.resourceRef} py={4}>
        Links we love
      </Heading>
      <Text fontSize="md">
        Check out these great links which can help you dive a little deeper into running an event storming workshop with your team, customers or stakeholders.
      </Text>

      <Stack ml={8}>
        {resourceLinkList()}
        <ResourceAddLink practiceId={props.practiceId} prevResources={props.links} linkTypes={linkTypes} />
      </Stack>
    </>
  );
}
