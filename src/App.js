import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import './App.css';
import AppBar from "@material-ui/core/AppBar";
import SignInForm from "./components/SignIn";
import React from "react";
import PostForm from "./components/PostForm";
import CommentForm from "./components/CommentForm";
import Posts from "./components/Posts";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	button: {
		marginRight: theme.spacing(1)
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	}
}));

function getSteps() {
	return ['Sign in', 'Write a post', 'Write a comment'];
}

function App() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());
	const steps = getSteps();

	const handleNext = () => {
		let newSkipped = skipped;
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const renderStep = (activeStep) => {
		switch (activeStep) {
			case 0:
				return <SignInForm />;
			case 1:
				return <PostForm />;
			case 2:
				return <CommentForm />;
			case 3:
				return <Posts />;
		}
	};

	return (
		<div className="App">
			<AppBar position="static" elevation={0}>
				<Stepper activeStep={activeStep}>
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
				{renderStep(activeStep)}

				{activeStep === steps.length ? (
					<div>
						<Button onClick={handleReset} className={classes.button}>
							Restart
						</Button>
						<Button className={classes.button}>
							Logout
						</Button>
					</div>
				) : (
					<div>
						<Button
							variant="contained"
							color="primary"
							onClick={handleNext}
							className={classes.button}
						>
							Next
						</Button>
					</div>
				)}
			</Container>
		</div>
	);
}

export default App;
