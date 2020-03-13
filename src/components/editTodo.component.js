import React, { Component } from "react";
import axios from "axios";

export default class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.editTitle = this.editTitle.bind(this);
    this.editDescription = this.editDescription.bind(this);
    this.submitEdit = this.submitEdit.bind(this);

    this.state = {
      title: "",
      description: ""
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5500/todos/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          title: res.data.title,
          description: res.data.description
        });
      })
      .catch(err => console.log(err));
  }

  editTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  editDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  submitEdit(e) {
    e.preventDefault();

    const todoEdit = {
      title: this.state.title,
      description: this.state.description
    };

    console.log(todoEdit);

    axios
      .put(
        `http://localhost:5500/todos/editTodo/${this.props.match.params.id}`,
        todoEdit
      )
      .then(res => alert("Edit saved to Todo."))
      .catch(err => alert(err));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Edit Todo</legend>
          <form onSubmit={this.submitEdit}>
            <div>
              <label>Title: </label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.editTitle}
              />
            </div>
            <div>
              <label>Description: </label>
              <input
                type="text"
                value={this.state.description}
                onChange={this.editDescription}
              />
            </div>
            <div>
              <input type="submit" value="Submit Edit" />
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}
