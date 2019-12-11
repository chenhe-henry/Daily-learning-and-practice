import React from 'react';
import LoginForm from '../Components/loginForm';

export default class LoginPage extends React.Component {

    
    handleLoginClick(email, password) {
        this.props.user.login(email, password);
    }

    render() {
        return (<>
            <LoginForm login={(email, pass)=>this.handleLoginClick(email, pass)}></LoginForm>
        </>)
    }
}