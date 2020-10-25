import React from "react";
import {connect} from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import AppBar from "@material-ui/core/AppBar";
import Confirmation from './components/Confirmation';
import {getSteps, getActiveStep} from './utils';
import './App.css';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function App(props) {
	const steps = getSteps();
	return (
		<Box component="main" className="App">
			<AppBar position="static" elevation={0}>
				<Stepper activeStep={props.activeStep}>
					{steps.map((label) => {
						return (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
			</AppBar>

			<Container maxWidth="sm">
				{props.children}
			</Container>

			<Confirmation/>
		</Box>
	);
}

const mapStateToProps = state => ({
	activeStep: getActiveStep(state.router.location.pathname)
});

export default connect(mapStateToProps)(App);
