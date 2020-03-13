import React, { Component } from "react";
import axios from "axios";
import Tilt from "react-tilt";

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
    if (this.state.todos.length > 1) {
      axios
        .delete(`http://localhost:5500/todos/${id}`)
        .then(res => console.log(res.data));
      this.setState({
        todos: this.state.todos.filter(todo => todo._id !== id)
      });
    } else {
      alert('Your todos cannot be empty. Never cease to set goals!')
    }
  }

  todos() {
    return this.state.todos.map(todo => {
      return (
        <Tilt className="Tilt" options={{ max: 15 }} key={todo._id}>
          <Todo todo={todo} deleteTodo={this.deleteTodo} />
        </Tilt>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <hr />
        <div className="todo-list">{this.todos()}</div>
        <hr />
        <CreateTodo />
      </div>
    );
  }
}
