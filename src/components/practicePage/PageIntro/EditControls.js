import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { EditIcon } from "../../../assets/icons";

import { Tooltip, IconButton, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  editingButtonCollection: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.common.true_white,
    borderRadius: "20px",
    boxShadow: "0 1px 4px 0 rgba(16,16,16,0.29)",
  },
}));

const StartEditingButton = (props) => (
  <Tooltip
    title="Edit Practice"
    placement="top"
  >
    <IconButton data-testid="editButton" onClick={props.handleEdit}>
      <EditIcon height="20" />
    </IconButton>
  </Tooltip>
);

const EditingButtons = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.editingButtonCollection}>
      <IconButton>
        <EditIcon fill="#1975ff" height="20" />
      </IconButton>
      <Tooltip
        title="Save Edits"
        placement="left"
      >
        <IconButton data-testid="saveEditButton" onClick={props.handleSaveEdits}>
          <SaveOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Cancel Edits"
        placement="left"
      >
        <IconButton data-testid="closeEditButton" onClick={props.handleEdit}>
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export { StartEditingButton, EditingButtons }
