// dependencies
import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// utils
import './App.css';
import { AlertProp } from './interfaces/types';

// components
import NavBar from './components/nav-bar/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/alert/Alert';
import About from './components/about/About';
import User from './components/users/User';

// state
import GithubState from './context/GithubState';

export const App = () => {
	// state
	const [alertState, setAlertState] = useState<AlertProp | null>(null);

	// set alert message
	const setAlert = (msg: string, type: string) => {
		setAlertState({ msg, type });
		setTimeout(() => {
			setAlertState(null);
		}, 5000);
	};

	return (
		<GithubState>
			<Router>
				<div className='App'>
					<NavBar />
					<div className='container'>
						{alertState !== null && <Alert alertState={alertState} />}
						<Switch>
							<Route
								exact
								path='/'
								render={() => (
									<Fragment>
										<Search setAlert={setAlert} />
										<Users />
									</Fragment>
								)}
							/>
							<Route exact path='/about' component={About} />
							<Route exact path='/user/:login' render={(props) => <User props={props} />} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
