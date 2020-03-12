import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todos from './components/todos.component'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Todos} />
    </Router>
  );
}

export default App;
