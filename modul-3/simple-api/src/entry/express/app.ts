import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const dataPath = path.join(__dirname, "../../dummy/todos.json");

interface Todo {
  id?: number;
  title: string;
  category: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

function readTodos() {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
}

function writeTodos(todos: Todo[]) {
  fs.writeFileSync(dataPath, JSON.stringify(todos, null, 2));
}

const app = express();
const PORT = 5500;

// middleware untuk parse JSON
app.use(express.json());

// CRUD todos

// GET /api/todos -> ambil semua todos
app.get("/api/todos", (_: Request, res: Response) => {
  const todos = readTodos();
  res.status(200).send({
    status: res.statusCode,
    data: todos,
  });
});

// GET /api/todos/:id -> ambil todo tertentu
app.get("/api/todos/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const todos = readTodos();
  const todo = todos.find((item: Todo) => item.id === Number(id));

  if (!todo) {
    res.status(404).send({
      error: "Todo not found",
    });
  }

  res.status(200).send({
    status: res.statusCode,
    data: todo,
  });
});

// POST /api/todos -> membuat todo baru
app.post("/api/todos", (req: Request, res: Response) => {
  const todos = readTodos();
  const { title, category, description }: Todo = req.body;

  const newTodo: Todo = {
    id: todos.length + 1,
    title: title,
    category: category,
    description: description,
    createdAt: String(Date.now()),
    updatedAt: String(Date.now()),
    deletedAt: null,
  };

  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).send({
    message: "Success create todo",
  });
});

// UPDATE /api/todos/:id -> mengupdate todo
app.put("/api/todos/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, category, description }: Todo = req.body;

  const todos = readTodos();

  const index = todos.findIndex((item: Todo) => item.id === Number(id));
  if (index === -1) {
    res.status(404).send({
      error: "Todo not found",
    });
  }

  const existingTodo = todos[index];

  // ?? nullable operator -> kalau kiri kosong pake yang kanan, dan sebaliknya
  const updatedTodo: Todo = {
    id: existingTodo.id,
    title: title ?? existingTodo.title,
    description: description ?? existingTodo.description,
    category: category ?? existingTodo.category,
  };

  todos[index] = updatedTodo;
  writeTodos(todos);

  res.status(200).send({
    message: "Success update todo",
  });
});

// routing hanya memanggil methodnya : get, post, put, delete
app.get("/api/welcoming", (_: Request, res: Response) => {
  res.status(200).send({
    message: "Welcome to simple api",
  });
});
app.get("/api/hello", (_: Request, res: Response) => {
  res.status(200).send({
    message: "Hello World",
  });
});

// routing 404
app.use((_: Request, res: Response) => {
  res.status(404).send({
    error: "Endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
