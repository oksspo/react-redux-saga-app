import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import { withStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import { signIn } from "../actions/authActions";

const styles = (theme) => ({
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	title: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	submit: {
		margin: theme.spacing(1, 0, 2)
	}
});

class SignInForm extends React.PureComponent {
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
		const { classes } = this.props;
		return (
			<Container component="main" maxWidth="xs">
				<Box m={3} className={classes.title}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
				</Box>
				<Card>
					<form noValidate
						  onSubmit={this.submitSignIn}>
						<CardContent>
							<div>
								<TextField label="Email"
										   type="email"
										   name="email"
										   margin="normal"
										   required
										   variant="outlined"
										   fullWidth
										   autoFocus
										   error={this.props.userNotExist}
										   helperText={this.props.userNotExist && "User with this email doesn't exist"}
										   onChange={this.changeInputHandler}/>
							</div>

							<div>
								<TextField label="Password"
										   type="password"
										   name="password"
										   variant="outlined"
										   margin="normal"
										   fullWidth
										   required
										   onChange={this.changeInputHandler}/>
							</div>
						</CardContent>
						<CardActions>
							<Button
								fullWidth
								type="submit"
								variant="contained"
								color="primary"
								className={classes.submit}>
								Sign in
							</Button>
						</CardActions>
					</form>
				</Card>
			</Container>);
	}
}

const mapDispatchToProps = {
	signIn
};

const mapStateToProps = state => ({
	userNotExist: state.user.userNotExist
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignInForm));