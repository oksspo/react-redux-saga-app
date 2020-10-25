import React from "react";
import {connect} from "react-redux";

class PostForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (<h1> Step 2 - Write post</h1>);
	}
}

export default connect(null, null)(PostForm);