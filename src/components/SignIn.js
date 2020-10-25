import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {signIn} from "../redux/actions";

class SignInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	submitSignIn = event => {
		event.preventDefault();
		const userCredentials = {...this.state};
		this.props.signIn(userCredentials);
	};

	changeInputHandler = event => {
		this.setState(prev => ({
			...prev, ...{[event.target.name]: event.target.value}
		}));
	};

	render() {
		return (
			<Card>
				<CardContent>
					<form autoComplete="off"
						  onSubmit={this.submitSignIn}>
						<div>
							<TextField label="Email"
									   type="email"
									   name="email"
									   required
									   error={this.props.userNotExist}
									   helperText={this.props.userNotExist && "User with this email doesn't exist"}
									   onChange={this.changeInputHandler}/>
						</div>

						<div>
							<TextField label="Password"
									   type="password"
									   name="password"
									   required
									   onChange={this.changeInputHandler}/>
						</div>



						<Button type="submit"
							variant="contained"
							color="primary">
							Sign in
						</Button>
					</form>
				</CardContent>
			</Card>);
	}
}

const mapDispatchToProps = {
	signIn
};

const mapStateToProps = state => ({
	userNotExist: state.user.userNotExist
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);