
class SignUpModal extends Component {
    handleSignup(data) {
        axios
            .post(`http://localhost:3005/api/users`, {
                user: {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation
                }
            })
            .then(response => {
                // TODO: use a toast service, or modal or something
                // better than an allert.
                alert("user successfully created, please login");
                // Navigate to the home page.
                navigate("/");
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
        this.props.onHide();
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className="container">
                        <RegisterForm
                            onSignup={data => this.handleSignup(data)}
                        ></RegisterForm>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}








-------------


import React from 'react';

export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
    }

    onSignupClick() {
        // TODO: validate inputs
        this.props.onSignup(this.state);
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    render() {
        return (
            <div className="container">

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter your Name" name="name" required
                    value={this.state.name} onChange={this.handleNameChange} />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required
                    value={this.state.email} onChange={this.handleEmailChange} />

                <div className="clearfix">
                    <button type="submit" className="signupbtn" onClick={() => this.onSignupClick()}>Sign Up</button>
                </div>
            </div>);
    }
}

