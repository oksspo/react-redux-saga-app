import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}
});

export default function NotFound() {
	const classes = useStyles();
	return (<Container component="main" maxWidth="xs" className={classes.root}>
		<Typography component="h1" variant="h1" color="error">
			404
		</Typography>
		<Typography component="h2" variant="h5" color="textSecondary">
			Sorry! Page not found
		</Typography>
	</Container>);
}