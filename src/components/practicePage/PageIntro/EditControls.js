import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { EditIcon } from "../../../assets/icons";

const StartEditingButton = (props) => (
  <Tooltip
    title="Edit Page"
    placement="top"
    arrow
  >
    <IconButton data-testid="editButton" onClick={props.handleEdit}>
      <EditIcon height="25" />
    </IconButton>
  </Tooltip>
);

const EditingButtons = (props) => (
  <>
    <Tooltip
      title="Cancel Edits"
      placement="top"
      arrow
    >
      <IconButton data-testid="closeEditButton" onClick={props.handleEdit}>
        <CloseIcon />
      </IconButton>
    </Tooltip>
    <Tooltip
      title="Save Edits"
      placement="top"
      arrow
    >
      <IconButton data-testid="saveEditButton" onClick={props.handleSaveEdits}>
        <SaveOutlinedIcon />
      </IconButton>
    </Tooltip>
  </>
);

export { StartEditingButton, EditingButtons }
