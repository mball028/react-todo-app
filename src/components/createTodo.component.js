import React, { Component } from "react";
import axios from "axios";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);

    this.formSubmit = this.formSubmit.bind(this);

    this.state = {
      title: "",
      description: ""
    };
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }
  onDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  formSubmit(e) {
    e.preventDefault();

    const newTodo = {
      title: this.state.title,
      description: this.state.description
    };
    axios
      .post("http://localhost:5500/todos/addTodo/", newTodo)
      .then(() => alert("New Todo Added!"));
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Add a New Todo</legend>
          <form onSubmit={this.formSubmit}>
            <div>
              <label>Title: </label>
              <input
                type="text"
                required
                value={this.state.title}
                onChange={this.onTitleChange}
              />
            </div>
            <div>
              <label>Description: </label>
              <input
                type="text"
                required
                value={this.state.description}
                onChange={this.onDescriptionChange}
              />
            </div>
            <div>
              <input type="submit" value="Add Todo" />
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}
