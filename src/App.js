import React from "react";
import {connect} from "react-redux";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import './App.css';


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const steps = getSteps();
		return (
			<Grid className="App"
				  container
				  justify="center"
				  spacing={2}>
				<Grid item xs={12}>
					<AppBar position="static" elevation={0}>
						<Stepper activeStep={this.props.activeStep}>
							{steps.map((label) => {
								return (
									<Step key={label}>
										<StepLabel>{label}</StepLabel>
									</Step>
								);
							})}
						</Stepper>
					</AppBar>
				</Grid>

				<Grid item xs={6} >
					{this.props.children}
				</Grid>
			</Grid>
		);
	};
}

function getSteps() {
	return ['Sign in', 'Write a post', 'Write a comment', 'Review'];
}

function getActiveStep(path) {
	return ['/', '/add-post', '/add-comment', '/review'].indexOf(path);
}

const mapStateToProps = state => ({
	activeStep: getActiveStep(state.router.location.pathname)
});

export default connect(mapStateToProps, null)(App);
