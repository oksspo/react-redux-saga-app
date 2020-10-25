import React from "react";
import { connect } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card/Card";
import CardActions from "@material-ui/core/CardActions/CardActions";
import { addComment } from "../actions/postActions";

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			comment: ''
		};
	}

	submitComment = event => {
		event.preventDefault();
		this.props.addComment({...this.state, userId: this.props.userId, postId: this.props.postId});
	};

	changeInputHandler = event => {
		this.setState(prev => ({
			...prev, ...{[event.target.name]: event.target.value}
		}));
	};

	render() {
		return (<Card>
			<form autoComplete="off"
				  onSubmit={this.submitComment}>
				<CardContent>
					<div>
						<TextField label="Name"
								   name="name"
								   required
								   fullWidth
								   onChange={this.changeInputHandler}/>
					</div>

					<div>
						<TextField label="Comment"
								   name="comment"
								   required
								   multiline
								   fullWidth
								   rows={4}
								   onChange={this.changeInputHandler}/>
					</div>
				</CardContent>
				<CardActions>
					<Button type="submit"
						variant="contained"
						color="primary">
						Next
					</Button>
				</CardActions>
			</form>
		</Card>);
	}
}

const mapDispatchToProps = {
	addComment
};

const mapStateToProps = state => ({
	userId: state.user.id,
	postId: state.post.id
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);