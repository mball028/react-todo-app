import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todos from "./components/todos.component";
import EditTodo from "./components/editTodo.component";

import "./styles/app.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/" exact component={Todos} />
        <Route path="/editTodo/:id" component={EditTodo} />
      </Router>
    </div>
  );
}

export default App;
