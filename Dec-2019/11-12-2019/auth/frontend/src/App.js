import './App.css';

import React from 'react';
import { Router, navigate } from "@reach/router"

import HomePage from './Pages/homePage';
import LoginPage from './Pages/loginPage';
import RegisterPage from './Pages/registerPage';
import DashboardPage from './Pages/dashboardPage';

import AppNavBar from './Components/appNavbar';
import { SERVER_URL } from './config';
import axios from 'axios';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		let auth = JSON.parse(sessionStorage.getItem('auth'));
		this.state = {
			isLoggedIn: !!auth ? true : false,
			currentUser: null,
		}
	}

	componentDidMount() {
		this.getUser();
	}

	getUser() {
		let auth = JSON.parse(sessionStorage.getItem('auth'));
		if(!auth) return;

		axios.get(`${SERVER_URL}/api/users/${auth.userId}`,{ 
			headers: {"Authorization" : `Bearer ${auth.token}`} 
		}).then(response => {
			this.setState({
				currentUser: response.data, 
				isLoggedIn: true
			});

			// now that login has occured, navigate to the home page
			navigate('/');

		});
	}

	handleLogin(email, password) {
		axios.post(`${SERVER_URL}/api/auth/get_token`, {
			email: email,
			password: password
		}).then(response => {
			sessionStorage.setItem('auth', JSON.stringify(response.data));
			this.getUser();
		}).catch(err => {
			// todo some error
		});
	}

	handleLogout() {
		sessionStorage.setItem('auth', null);
		this.setState({currentUser: null, isLoggedIn: false});
	}

	render() {

		const userProps = {
			isLoggedIn: this.state.isLoggedIn,
			currentUser: this.state.currentUser,
			logout: () => this.handleLogout(),
			login: (email, pass) => this.handleLogin(email, pass)
		};

		return (<>

			<AppNavBar user={userProps}></AppNavBar>
			
			<Router>
				<HomePage path="/" />
				<LoginPage path="/login" user={userProps}/>
				<RegisterPage path="/register" user={userProps}/>
				<DashboardPage path="/dashboard" user={userProps}/>
			</Router>

		</>);
	}
}
