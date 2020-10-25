import {render, screen} from '@testing-library/react';
import App from './App';

test('a place for future tests and developer tears', () => {
	render(<App/>);
	const linkElement = screen.getByText(/Sign in/i);
	expect(linkElement).toBeInTheDocument();
});
