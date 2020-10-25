import React from "react";
import { connect } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card/Card";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CardActions from "@material-ui/core/CardActions/CardActions";
import { withStyles } from '@material-ui/core/styles';
import { addPost } from "../actions/postActions";

const styles = (theme) => ({
	next: {
		justifyContent: 'flex-end',
		marginRight: theme.spacing(1)
	}
});

class PostForm extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			text: ''
		};
	}

	submitPost = event => {
		event.preventDefault();
		this.props.addPost({...this.state, userId: this.props.userId});
	};

	changeInputHandler = event => {
		this.setState(prev => ({
			...prev, ...{[event.target.name]: event.target.value}
		}));
	};

	render() {
		const { classes } = this.props;
		return (<Card>
			<form autoComplete="off"
				  onSubmit={this.submitPost}>
				<CardContent>
					<div>
						<TextField label="Title"
								   name="title"
								   margin="normal"
								   required
								   autoFocus
								   fullWidth
								   onChange={this.changeInputHandler}/>
					</div>

					<div>
						<TextField label="Post"
								   name="text"
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
	addPost
};

const mapStateToProps = state => ({
	userId: state.user.id
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostForm));