import React from "react";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import './App.css';
import {connect} from "react-redux";

function getSteps() {
	return ['Sign in', 'Write a post', 'Write a comment', 'Publications'];
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const steps = getSteps();
		return (
			<div className="App">
				<AppBar position="static" elevation={0}>
					<Stepper activeStep={this.props.activeStep}>
						{steps.map((label) => {
							const stepProps = {};
							const labelProps = {};

							return (
								<Step key={label} {...stepProps}>
									<StepLabel {...labelProps}>{label}</StepLabel>
								</Step>
							);
						})}
					</Stepper>
				</AppBar>
				<Container maxWidth="sm">
					{this.props.children}
				</Container>
			</div>
		);
	};
}

const mapStateToProps = state => ({
	activeStep: state.app.activeStep
});

export default connect(mapStateToProps, null)(App);
