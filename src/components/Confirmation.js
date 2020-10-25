import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { hideConfirmation, restart } from "../redux/rootActions";

export default ({}) => {
	const dispatch = useDispatch();
	const showDialog = useSelector(state => state.post.showConfirmation);

	return (<Dialog
		open={showDialog}
		onClose={() => dispatch(hideConfirmation())}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
	>
		<DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
		<DialogContent>
			<DialogContentText id="alert-dialog-description">
				Post with comments will be cleared
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={() => dispatch(hideConfirmation())} color="secondary">
				No
			</Button>
			<Button onClick={() => dispatch(restart())} color="primary">
				Yes
			</Button>
		</DialogActions>
	</Dialog>);
}