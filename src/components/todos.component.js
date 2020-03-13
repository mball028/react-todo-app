import React, { Component } from "react";
import axios from "axios";

import Todo from "./todo.component";
import CreateTodo from "./createTodo.component";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);

    this.state = { todos: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5500/todos/")
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => console.log(err));
  }

  deleteTodo(id) {
    axios
      .delete(`http://localhost:5500/todos/${id}`)
      .then(res => console.log(res.data));
    this.setState({
      todos: this.state.todos.filter(todo => todo._id !== id)
    });
  }

  todos() {
    return this.state.todos.map(todo => {
      return <Todo todo={todo} deleteTodo={this.deleteTodo} key={todo._id} />;
    });
  }

  render() {
    return (
      <div>
        <h1>TODOS</h1>
        <CreateTodo />
        {this.todos()}
      </div>
    );
  }
}
