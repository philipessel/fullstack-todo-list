import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteConfirmationDialog = ({
  openCancelDialog,
  isDeletingTodo,
  todoToDeleteTitle,
  handleCancelDeleteTodo,
  handleDeleteTodo,
  handleClose,
}) => {
  return (
    <React.Fragment>
      <Dialog
        open={openCancelDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete Todo!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`Are you sure you want to delete your ${todoToDeleteTitle} Todo?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDeleteTodo}>Cancel</Button>
          <LoadingButton
            size="medium"
            variant="contained"
            color="error"
            loading={isDeletingTodo}
            onClick={handleDeleteTodo}
          >
            Yes, Sure!
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteConfirmationDialog;
