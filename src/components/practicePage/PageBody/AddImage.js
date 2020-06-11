import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddImage from "../../../assets/images/add.png";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  cardImg: {
    verticalAlign: "middle",
    height: "69px",
    width: "92px",
  },
}));

const AddImageCard = () => {
  const [open, setOpen] = React.useState();
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <img src={AddImage} alt="Add new media" className={classes.cardImg} onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <Typography variant={"body2"}>Add a new link to the media gallery!</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant={"h6"}>Paste a link to an image or YouTube video</Typography>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Link"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddImageCard;
