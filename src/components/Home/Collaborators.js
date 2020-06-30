import React from 'react';
import {
  Icon,
  Stack,
  Image,
} from "@chakra-ui/core";

import Tooltip from "../shared/Tooltip";

const Collaborators = (props) => {
  const [pop, setPop] = React.useState(false);

  return (
    <Stack align="center" spacing={8} px={45}>
      <Image src={props.logo} width={134} height={72} objectFit="contain" />
      <Tooltip
        open={setPop}
        header={props.name}
        text={props.text}
        placement="bottom"
      >
        { pop ?
          <Icon name="plus" color="blue.500" fontSize="2xl" />
          :
          <Icon name="plusOutline" color="blue.500" fontSize="2xl" />
        }
      </Tooltip>
    </Stack>
  )
};

export default Collaborators;
