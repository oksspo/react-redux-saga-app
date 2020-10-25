import React from "react";
import { connect } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { askConfirmation, restart } from "../redux/rootActions";
import { signOut } from "../redux/authActions";

class Review extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderComments() {
		return (this.props.post.comments.map((comment) => (<ListItem alignItems="flex-start" key={comment.id}>
			<ListItemText primary={comment.name}
						  secondary={
							  <React.Fragment>
								  {comment.body}
							  </React.Fragment>
						  }
			/>
		</ListItem>)));
	};

	render() {
		return (<Card>
			<CardContent>
				<Typography gutterBottom variant="h3" component="h2">
					{this.props.post.title}
				</Typography>

				<Typography variant="body2" color="textSecondary" component="p">
					{this.props.post.body}
				</Typography>

				<Typography component="span"
					variant="body2">
					Recent comment
				</Typography>

				<List>
					{this.renderComments()}
				</List>
			</CardContent>
			<CardActions>
				<Button color="primary"
					onClick={this.props.askConfirmation}>
					Restart
				</Button>
				<Button color="primary"
					onClick={this.props.signOut}>
					Logout
				</Button>
			</CardActions>
		</Card>);
	}
}

const mapDispatchToProps = {
	signOut,
	restart,
	askConfirmation
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);