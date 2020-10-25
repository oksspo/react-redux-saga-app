import React from "react";
import {connect} from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { withStyles } from '@material-ui/core/styles';
import { askConfirmation } from "../actions/rootActions";
import { signOut } from "../actions/authActions";

const styles = (theme) => ({
	comments: {
		margin: theme.spacing(1, 0)
	},
	actions: {
		display: 'flex',
		justifyContent: 'space-between'
	}
});

function renderComments(comments) {
	return (comments.map((comment) => (<ListItem alignItems="flex-start" key={comment.id}>
		<ListItemText primary={comment.name}
					  secondary={
						  <React.Fragment>
							  {comment.body}
						  </React.Fragment>
					  }
		/>
	</ListItem>)));
}

function Review(props) {
	const {classes} = props;
	return (<Container component="main" maxWidth="xs">
		<Card>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					Your post
				</Typography>
				<Typography gutterBottom variant="h3" component="h2">
					{props.post.title}
				</Typography>

				<Typography variant="body2" color="textSecondary" component="p">
					{props.post.body}
				</Typography>
			</CardContent>
		</Card>
		<Card className={classes.comments}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					Your comment
				</Typography>
				<List>
					{renderComments(props.post.comments)}
				</List>
			</CardContent>
		</Card>
		<Box className={classes.actions}>
			<Button color="secondary"
				variant="contained"
				onClick={props.askConfirmation}
				endIcon={<RotateLeftIcon/>}>
				Restart
			</Button>
			<Button color="primary"
				variant="contained"
				onClick={props.signOut}
				endIcon={<ExitToAppIcon/>}>
				Logout
			</Button>
		</Box>
	</Container>);
}

const mapDispatchToProps = {
	signOut,
	askConfirmation
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Review));