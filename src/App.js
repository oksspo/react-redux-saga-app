import React from "react";
import {connect} from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Confirmation from './components/Confirmation';
import { getSteps, getActiveStep } from './utils';
import './App.css';

function App(props) {
	const steps = getSteps();
	return (
		<Grid className="App"
			  container
			  justify="center"
			  spacing={2}>
			<Grid item xs={12}>
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
			</Grid>

			<Grid item xs={4}>
				{props.children}
			</Grid>

			<Confirmation/>
		</Grid>
	);
}

const mapStateToProps = state => ({
	activeStep: getActiveStep(state.router.location.pathname)
});

export default connect(mapStateToProps)(App);
