import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDropzone } from 'react-dropzone';

import AddImage from "../../../assets/images/add.png";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  cardImg: {
    verticalAlign: "middle",
    height: "69px",
    width: "92px",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: "2px",
    borderRadius: "2px",
    borderColor: theme.palette.common.brown_grey,
    borderStyle: "dashed",
    backgroundColor: theme.palette.common.white,
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  },
}));

const AddImageCard = (props) => {
  const [open, setOpen] = React.useState();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <img src={AddImage} alt="Add new media" className={classes.cardImg} onClick={handleClickOpen} />
      <Dialog maxWidth="lg" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <Typography variant={"body2"}>Add a new link to the media gallery!</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <section className="container">
              <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <Typography variant={"h6"}>Drag 'n' drop some images here, or click to select images</Typography>
                <Typography variant={"h6"}><em>Or Paste a link to an image or YouTube video</em></Typography>
              </div>
              <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
              </aside>
            </section>
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
