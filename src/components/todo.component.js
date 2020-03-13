import React from "react";

const Todo = props => (
  <div className="todo-box">
    <section>
      <h3>{props.todo.title}</h3>
      <p>{props.todo.description}</p>
    </section>
    <section>
      <a href={`/editTodo/${props.todo._id}/`}>edit</a> |
      <button onClick={() => props.deleteTodo(props.todo._id)}>delete</button>
    </section>
  </div>
);

export default Todo;
