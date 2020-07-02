import React from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { EditIcon } from "../../../assets/icons";

import { IconButton, Box } from '@material-ui/core';

import OplTooltip from "../../shared/components/OplTooltip";

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
  <OplTooltip
    title="Edit Practice"
    placement="top"
  >
    <IconButton data-testid="editButton" onClick={props.handleEdit}>
      <EditIcon height="20" />
    </IconButton>
  </OplTooltip>
);

const EditingButtons = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.editingButtonCollection}>
      <IconButton>
        <EditIcon fill={theme.palette.primary.main} height="20" />
      </IconButton>
      <OplTooltip
        title="Save Edits"
        placement="left"
      >
        <IconButton data-testid="saveEditButton" onClick={props.handleSaveEdits}>
          <SaveOutlinedIcon />
        </IconButton>
      </OplTooltip>
      <OplTooltip
        title="Cancel Edits"
        placement="left"
      >
        <IconButton data-testid="closeEditButton" onClick={props.handleEdit}>
          <CloseIcon />
        </IconButton>
      </OplTooltip>
    </Box>
  );
};

export { StartEditingButton, EditingButtons }
