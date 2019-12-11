
import React from 'react';

export default class BasicTodoList extends React.Component {

    /*
        This is a dumb component, we only know how to render data passed in via props.
        we also only know how to fire events via props, this component demonstrates rendering
        a list of todo items, and fireing an event via props to add a new todo item.
    */

    constructor(props) {
        super(props);
        this.state = {
            newTodoName: ''
        };
    }

    handleNewTodoChange = (e) => {
        this.setState({newTodoName: e.target.value});
    }

    onNewTodoClick() {
        this.props.onNewTodo(this.state.newTodoName);
    }


    render() {
        const todos = this.props.todos;


        return(<>
            <label htmlFor="newTodo"><b>New Todo</b></label>
            <input type="text" placeholder="New Todo Name" name="todo"
                 value={this.state.newTodoName} onChange={this.handleNewTodoChange}  />
            <button className="newTodoBtn" onClick={() => this.onNewTodoClick() }>New Todo</button>

            <ul>
                {todos.map(todo => <li key={'todo-'+todo.id}>{todo.name}</li>)}
            </ul>
        </>);
    }
}