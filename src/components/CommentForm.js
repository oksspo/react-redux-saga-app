import React from "react";
import { connect } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card/Card";
import CardActions from "@material-ui/core/CardActions/CardActions";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { withStyles } from '@material-ui/core/styles';
import { addComment } from "../actions/postActions";

const styles = (theme) => ({
	root: {
		marginTop: theme.spacing(10)
	},
	next: {
		justifyContent: 'flex-end',
		marginRight: theme.spacing(1)
	}
});

class CommentForm extends React.PureComponent {
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
		const { classes } = this.props;
		return (<Card className={classes.root}>
			<form autoComplete="off"
				  onSubmit={this.submitComment}>
				<CardContent>
					<div>
						<TextField label="Name"
								   name="name"
								   margin="normal"
								   required
								   fullWidth
								   autoFocus
								   onChange={this.changeInputHandler}/>
					</div>

					<div>
						<TextField label="Comment"
								   name="comment"
								   variant="outlined"
								   margin="normal"
								   required
								   multiline
								   fullWidth
								   rows={4}
								   onChange={this.changeInputHandler}/>
					</div>
				</CardContent>
				<CardActions className={classes.next}>
					<Button type="submit"
						variant="contained"
						color="primary"
						endIcon={<NavigateNextIcon />}>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CommentForm));