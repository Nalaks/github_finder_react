// dependencies
import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// utils
import './App.css';
import { UserProp, AlertProp, GitUser, Repos } from './interfaces/types';

// components
import NavBar from './components/nav-bar/NavBar';
import Users from './components/users/Users';
import Spinner from './components/spinner/Spinner'
import Search from './components/users/Search';
import Alert from './components/alert/Alert';
import About from './components/about/About';
import User from './components/users/User';

export const App = () => {
	// state
	const [userState, setUserState] = useState<UserProp[]>([]);
	const [loading, setLoading] = useState(false);
	const [alertState, setAlertState] = useState<AlertProp | null>(null);
	const [user, setUser] = useState<GitUser | null>(null);
	const [repos, setRepos] = useState<Repos[]>([]);

	// get users from github api
	const getUsers = async (search: string) => {
		setLoading(true);
		await axios(
			`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		).then((res) => setUserState(res.data.items));
		setLoading(false);
	};

	// get a single user
	const getUser = async (username: string) => {
		setLoading(true);
		await axios(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		).then((res) => setUser(res.data));
		setLoading(false);
	};

	// get user repos
	const getRepos = async (username: string) => {
		await axios(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		).then((res) => setRepos(res.data));
	};

	// clear user search
	const clearUsers = () => setUserState([]);

	// set alert message
	const setAlert = (msg: string, type: string) => {
		setAlertState({ msg, type });
		setTimeout(() => {
			setAlertState(null);
		}, 5000);
	};

	return (
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
									<Search
										getUsers={getUsers}
										clearUsers={clearUsers}
										userState={userState}
										setAlert={setAlert}
									/>
									{loading ? <Spinner /> : null}
									<Users users={userState} />
								</Fragment>
							)}
						/>
						<Route exact path='/about' component={About} />
						<Route
							exact
							path='/user/:login'
							render={(props) => (
								<User
									user={user}
									getUser={getUser}
									loading={loading}
									props={props}
									getRepos={getRepos}
									repos={repos}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
