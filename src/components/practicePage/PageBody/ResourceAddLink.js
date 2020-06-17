import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles/index";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import { AddIcon, ArrowRightIcon } from "../../../assets/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  space: {
    paddingRight: theme.spacing(2),
  },
  color: {
    color: theme.palette.common.black,
  },
}));

const handleSubmit = async () => {
  // const prevMediaGallery = props.currentMediaGallery.map(file => { return { link: file.link } });
  // const additionsGallery = files.map(file => { return { link: file.url } });
  // const newGallery = prevMediaGallery.concat(additionsGallery);
  // const { data } = await updateMediaGallery({
  //   variables: {
  //     practiceId: props.practiceId,
  //     newGallery,
  //   },
  // });

  // if (data) console.log('Updated!');
};

const handleAddLink = () => {
  // if (linkInputRef.current.value.includes(",")) {
  //   const multiFiles = linkInputRef.current.value.split(",").map(link => {
  //     return {
  //       url: link.trim(),
  //       direct: true
  //     }
  //   });
  //   setFiles([...files, ...multiFiles]);
  // } else {
  //   const newFile = { url: linkInputRef.current.value, direct: true };
  //   setFiles([...files, newFile]);
  // }

  // linkInputRef.current.value = "";
};

export default function ResourceAddLink(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedLinkTypeIndex, setSelectedLinkTypeIndex] = React.useState(null);
  const [linkType, setLinkType] = React.useState(false);
  const refLinkUrl = React.useRef();
  const refLinkDesc = React.useRef();

  const linkTypes = [
    'Choose Link Type',
    'web',
    'shopping list',
    'book',
  ];

  const handleClickListItem = (event) => {
    console.log(`handleClickListItem: event.currentTarget=${event.currentTarget}`);
    setAnchorEl(event.currentTarget);
  };

  const handleLinkTypeSelect = (event, index) => {
    console.log(`handleLinkTypeSelect: selectedIndex=${index} selected=${linkTypes[index]}`);
    setSelectedLinkTypeIndex(index);
    setLinkType(linkTypes[index]);
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
    setAnchorEl(null);
    
    console.log(`handleClose: linkType=${linkType}`);
    console.log(`handleClose: refLinkUrl=${refLinkUrl.current ? refLinkUrl.current.value : false}`);
    console.log(`handleClose: refLinkDesc=${refLinkDesc.current ? refLinkDesc.current.value : false}`);
  };

  return (
    <>
      <Box className={classes.root}>
        <Box>{props.children}</Box>
        <Box>
          <Button
            variant="text"
            color="secondary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
          Add a reference link
          </Button>
          <Dialog 
            open={open} 
            onClose={handleClose} 
            aria-labelledby="link-type-dialog-title"
          >
            <DialogTitle id="link-type-dialog-title">Add a link you love!</DialogTitle>
            <DialogContent>
              <List 
                component="nav" 
                aria-label="Link Type*"
                variant="outlined"
              >
                <ListItem
                  button
                  aria-haspopup="true"
                  aria-controls="link-type-menu"
                  aria-label="Link Type*"
                  onClick={handleClickListItem}
                >
                  <ListItemText primary="Link Type*" secondary={linkTypes[selectedLinkTypeIndex]} />
                </ListItem>
              </List>
              <Menu
                id="link-type-menu"
                data-link-type={"none-selected"}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                variant="menu"
                onClose={handleClose}
              >
                {linkTypes.map((option, index) => (
                  <MenuItem
                    key={option}
                    disabled={index === 0}
                    selected={index === selectedLinkTypeIndex}
                    onClick={(event) => handleLinkTypeSelect(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
              <TextField
                margin="dense"
                id="link-url"
                label="Link URL*"
                type="url"
                variant="outlined"
                inputRef={refLinkUrl}
                fullWidth
              />
              <TextField
                margin="dense"
                id="link-description"
                label="Link Description*"
                type="text"
                variant="outlined"
                inputRef={refLinkDesc}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button 
                variant="contained"
                onClick={handleClose} 
                color="none"
                endIcon={<ArrowRightIcon />}
              >
              Contribute this link
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}
