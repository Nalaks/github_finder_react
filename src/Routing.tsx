// dependencies
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

// components
import NavBar from './components/nav-bar/NavBar';
import Alert from './components/alert/Alert';
import About from './components/about/About';
import User from './components/users/User';
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';

const Routing = () => {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<div className='container'>
					<Alert />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
						<Route exact path='/user/:login' component={User} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default Routing;
