const router = require("express").Router();
const Todo = require("../models/todo.model");

router.get("/", (req, res) => {
  Todo.find()
    .then(todos => {
      todos.length < 1 ? res.send("No todos in Db") : res.json(todos);
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.post("/addTodo", (req, res) => {
  const description = req.body.description;

  const newTodo = new Todo({
    description
  });

  newTodo
    .save()
    .then(() => {
      res.json(`${newTodo.description} added to Todo list.`);
      console.log("New todo created successfully.");
    })
    .catch(err => {
      res.status(400).res.json(`Error: ${err}`);
      console.log("Error creating new todo.");
    });
});

router.get("/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.put("/edit/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      todo.description = req.body.description;

      todo
        .save()
        .then(() => res.json("Todo successfully updated."))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.delete("/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json("Todo was deleted."))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
