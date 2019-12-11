import React from 'react';
import BasicTodoList from '../Components/basicTodoList';
import { navigate } from '@reach/router';
import Axios from 'axios';

export default class DashboardPage extends React.Component {

    /*
        Pages like this, the Dashboard, should be considered a "Smart" component.
        logic for fetching data via axios should live in this component, and can be passed down to the "dumb" components.
        it also means, that if your not ready to fetch data via axios, you can provided mocked data to your "dubm" components
        instead, allowing you to continue to develop and test your frontend in the absence of a backend.
    */

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        // navigate the user to the login page if they dont have permision to be here!
        // yes, ther are "smarter" ways to do this, but this will be the easiest for now!
        if(this.props.user.isLoggedIn === false) {
            navigate('/login');
        }

        this.getTodos();
    }

    getTodos(){
        const todos = [
            {id: 10, name: 'buy milk'},
            {id: 232, name: 'buy eggs'},
            {id: 17, name: 'buy bread'}
        ];

        this.setState({todos: todos});

        /*
            // if you connected this to an api instead of mocking, this method might look something like
            axios.get(`http://localhost:3000/api/todos`).then(response => {
                this.setState({todos: response.data});
            });


            // if you required auth via jwt like discussed, we may use something like
            let auth = JSON.parse(sessionStorage.getItem('auth'));
            if(!auth)  return;
            axios.get(`http://localhost:3000/api/todos`,{ 
			    headers: {"Authorization" : `Bearer ${auth.token}`} 
		    }).then(response => {
                this.setState({todos: response.data});
            });
        
        */
    }

    createNewTodo = (name) => {
        const randomId = Math.floor(Math.random() * 1000000);
        const newTodo = { id: randomId, name: name };
        const todos = [...this.state.todos, newTodo];
        this.setState({todos: todos});

        // if saving todos to the server,
        // this is where you'd make the axios post request to create the todo
    }


    render() {
        return (<>
            <div className="container">

                <BasicTodoList 
                    todos={this.state.todos} 
                    onNewTodo={this.createNewTodo} />
            
            </div>
        </>)
    }
}