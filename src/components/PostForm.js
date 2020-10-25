import React from "react";
import {connect} from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card/Card";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import { addPost } from "../redux/actions";

class PostForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			text: ''
		};
	}

	submitPost = event => {
		event.preventDefault();
		console.log({...this.state, userId: this.props.userId});
		this.props.addPost({...this.state, userId: this.props.userId});
	};

	changeInputHandler = event => {
		this.setState(prev => ({
			...prev, ...{[event.target.name]: event.target.value}
		}));
	};

	render() {
		return (<Card>
			<CardContent>
				<form autoComplete="off"
					  onSubmit={this.submitPost}>

					<div>
						<TextField label="Title"
								   name="title"
								   required
								   fullWidth
								   onChange={this.changeInputHandler}/>
					</div>

					<div>
						<TextField label="Post"
								   name="text"
								   required
								   multiline
								   fullWidth
								   rows={4}
								   onChange={this.changeInputHandler}/>
					</div>

					<Button type="submit"
						variant="contained"
						color="primary">
						Next
					</Button>
				</form>
			</CardContent>
		</Card>);
	}
}

const mapDispatchToProps = {
	addPost
};

const mapStateToProps = state => ({
	userId: state.user.id
});


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);