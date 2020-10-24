import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// temporary workaround for issue
window.React = React;

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);