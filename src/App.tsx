// dependencies
import React from 'react';
import './App.css';
import GithubState from './context/GithubState';
import Routing from './Routing';
import AlertState from './context/AlertState';

export const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Routing />
			</AlertState>
		</GithubState>
	);
};

export default App;
