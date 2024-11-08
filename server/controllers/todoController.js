import Todo from "../models/todo.js";

const createTodo = async (req, res) => {
  try {
    console.log("req.user:", req.user);
    const newTodo = new Todo({
      userId: req.user.id,
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
    });
    const todo = await newTodo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { createTodo, getTodos };
