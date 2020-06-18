import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles/index";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { AddIcon } from "../../../assets/icons";
import Grid from '@material-ui/core/Grid';
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_PRACTICE_RESOURCES } from "../../../graphql";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  container: {
    flexShrink: 0,
  },
  space: {
    paddingRight: theme.spacing(2),
  },
  drawerPaper: {
    borderRadius: "17px",
    borderWidth: "3px",
    borderStyle: "solid",
    display: "flex",
    textAlign: "center",
    padding: theme.spacing(3),
  },
  dialogText: {
    margin: theme.spacing(1),
  },
  submitButton: {
    margin: theme.spacing(1),
    borderRadius: "32px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#596562",
  },
  arrowForward: {
    top: ".25em",
    position: "relative",
  },
  btnText: {
    padding: theme.spacing(1),
    color: theme.palette.common.black,
  },
  color: {
    color: theme.palette.common.black,
  },
}));

export default function ResourceAddLink(props) {
  const classes = useStyles();

  const [updatePracticeResources] = useMutation(UPDATE_PRACTICE_RESOURCES);

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedLinkTypeIndex, setSelectedLinkTypeIndex] = React.useState(null);
  const [linkType, setLinkType] = React.useState(false);
  const refLinkUrl = React.useRef();
  const refLinkDesc = React.useRef();

  const linkTypes = [
    'podcast',
    'web',
    'download',
    'book',
    'video',
    'purchase',
  ];

  const handleSubmit = async () => {
    const newResources = [{
      link: refLinkUrl.current.value,
      linkType: linkTypes[selectedLinkTypeIndex],
      description: refLinkDesc.current.value,
    }];
    const { data } = await updatePracticeResources({
      variables: {
        practiceId: props.practiceId,
        newResources,
      },
    });
    if (data) console.log('Updated!');
  };

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
            PaperProps={{
              className: classes.drawerPaper,
            }}
          >
            <DialogTitle disableTypography={true} id="link-type-dialog-title">
              <Typography
                variant="subtitle2"
                className={classes.dialogText}
              >
                Add a link you love!
              </Typography>
            </DialogTitle>
            <DialogContent className={classes.container}>
              <Grid container>
{/*                <Grid item xs={12}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Link Type *"                
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  >
                    
                    {linkTypes.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedLinkTypeIndex}
                        onClick={(event) => handleLinkTypeSelect(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
*/}               <Grid item xs={12} sm={5}>
                  <List 
                    component="nav" 
                    aria-label="Link Type *"
                    variant="outlined"
                  >
                    <ListItem
                      button
                      aria-haspopup="true"
                      aria-controls="llinkType"
                      aria-label="Link Type *"
                      onClick={handleClickListItem}
                    >
                      <ListItemText primary="Link Type *" secondary={linkTypes[selectedLinkTypeIndex]} />
                    </ListItem>
                  </List>
                  <Menu
                    id="linkType"
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
                        selected={index === selectedLinkTypeIndex}
                        onClick={(event) => handleLinkTypeSelect(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <TextField
                    margin="dense"
                    id="link"
                    label="Link URL*"
                    type="url"
                    variant="outlined"
                    inputRef={refLinkUrl}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    id="description"
                    label="Link Description*"
                    type="text"
                    variant="outlined"
                    inputRef={refLinkDesc}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
              >
                <Grid item>
                  <Button
                    onClick={handleSubmit} 
                    variant="contained"
                    className={classes.submitButton}
                  >
                    <Typography 
                      variant="button"
                      className={classes.btnText}
                    >
                      Contribute this link <ArrowForwardIcon className={classes.arrowForward} />
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Typography variant={"overline"}>
                    *Required fields :)
                  </Typography>
                </Grid>
              </Grid>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}
