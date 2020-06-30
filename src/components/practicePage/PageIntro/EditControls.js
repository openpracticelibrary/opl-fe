import React from "react";
import { Stack, IconButton } from "@chakra-ui/core";

import Tooltip from "../../shared/Tooltip";

const StartEditingButton = (props) => (
  <Tooltip
    text="Edit Practice"
    placement="top"
    transform="uppercase"
    minH="30px"
    w="120px"
  >
    <IconButton
      data-testid="editButton"
      aria-label="Edit Content"
      rounded={20}
      variant="ghost"
      onClick={props.handleEdit}
      icon="edit"
    />
  </Tooltip>
);

const EditingButtons = (props) => (
  <Stack
    rounded={20}
    bg="white"
    shadow="0 1px 4px 0 rgba(16,16,16,0.29)"
  >
    <IconButton
      isDisabled
      data-testid="editButton"
      aria-label="Editing Content"
      icon="edit"
    />
    <Tooltip
      text="Save Edits"
      placement="left"
      transform="uppercase"
      minH="30px"
      w="120px"
    >
      <IconButton
        data-testid="saveEditButton"
        aria-label="Save Edits"
        onClick={props.handleSaveEdits}
        variant="ghost"
        rounded={20}
        icon="copy"
      />
    </Tooltip>
    <Tooltip
      text="Cancel Edits"
      placement="left"
      transform="uppercase"
      minH="30px"
      w="120px"
    >
      <IconButton
        data-testid="closeEditButton"
        aria-label="Cancel Edits"
        onClick={props.handleEdit}
        variant="ghost"
        icon="close"
        rounded={20}
      />
    </Tooltip>
  </Stack>
);

export { StartEditingButton, EditingButtons }
