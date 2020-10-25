import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {hideConfirmation, restart} from "../actions/rootActions";

function Confirmation(props) {
	return (<Dialog
		open={props.showDialog}
		onClose={props.hideConfirmation}
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
			<Button onClick={props.hideConfirmation} color="secondary">
				No
			</Button>
			<Button onClick={props.restart} color="primary">
				Yes
			</Button>
		</DialogActions>
	</Dialog>);
}

const mapDispatchToProps = {
	hideConfirmation,
	restart
};

const mapStateToProps = state => ({
	showDialog: state.post.showConfirmation
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);