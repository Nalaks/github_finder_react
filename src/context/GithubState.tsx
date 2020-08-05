import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './GithubContext';
import GithubReducer from '../reducers/GithubReducer';
import { State } from '../interfaces/types';

const types = {
	search: 'SEARCH_USERS',
	user: 'GET_USER',
	clear: 'CLEAR_USERS',
	repos: 'GET_REPOS',
	loading: 'SET_LOADING',
};

let githubClientID: any;
let githubClientSecret: any;

if (process.env.NODE_ENV !== 'production') {
	githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
	githubClientID = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props: any) => {
	const initialState: State = {
		users: [],
		loading: false,
		user: null,
		repos: [],
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// get users from github
	const getUsers = async (search: string) => {
		setLoading();
		await axios(
			`https://api.github.com/search/users?q=${search}&client_id=${githubClientID}&client_secret=${githubClientSecret}`
		).then((res) => dispatch({ type: types.search, payload: res.data.items }));
	};

	// get a single user from github
	const getUser = async (username: string) => {
		setLoading();
		await axios(
			`https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`
		).then((res) => dispatch({ type: types.user, payload: res.data }));
	};

	// get user repos
	const getRepos = async (username: string) => {
		await axios(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`
		).then((res) => dispatch({ type: types.repos, payload: res.data }));
	};

	// set loading
	const setLoading = () => dispatch({ type: types.loading });

	// clear users
	const clearUsers = () => dispatch({ type: types.clear });

	return (
		<githubContext.Provider
			value={{
				user: state.user,
				users: state.users,
				loading: state.loading,
				repos: state.repos,
				getUsers,
				clearUsers,
				getUser,
				getRepos,
			}}
		>
			{props.children}
		</githubContext.Provider>
	);
};

export default GithubState;
