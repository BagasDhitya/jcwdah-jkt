import { useMemo, useState } from "react";
import type { Todo } from "../types/todo";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>();
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  function addTodo(data: Omit<Todo, "id" | "createdAt">) {
    setTodos((prev: any) => [
      ...prev,
      {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      },
    ]);
  }

  function updateTodo(id: string, updated: Partial<Todo>) {
    setTodos((prev: any) =>
      prev.map((todo: Todo) =>
        todo.id === id ? { ...todo, ...updated } : todo,
      ),
    );
  }

  function deleteTodo(id: string) {
    setTodos((prev: any) => prev.filter((todo: Todo) => todo.id !== id));
  }

  const filteredTodos = useMemo(() => {
    // fitur search:
    // - keyword akan menangkap hasil pencarian user
    // - keyword akan dicocokkan dengan title atau description
    // - kalau sesuai, return hasil pencariannya

    return (
      todos
        ?.filter((todo: Todo) => {
          const keyword = search.toLowerCase();

          return (
            todo.title.toLowerCase().includes(keyword) ||
            todo.description.toLowerCase().includes(keyword)
          );
        })

        // fitur category:
        // - jika user trigger button category, maka akan mentrigger fungsi ini
        // - kalau categorynya terpilih, maka akan menampilkan daftar todo yang sesuai
        .filter((todo: Todo) =>
          category === "all" ? true : todo.category === category,
        )

        // fitur sort :
        // - jika user trigger button "asc" / "desc", maka akan mentrigger fungsi ini
        // - kalau tipe sortnya terpilih, maka akan menampilkan daftar todo yang sesuai
        .sort((a, b) =>
          sort === "asc"
            ? a.createdAt.getTime() - b.createdAt.getTime()
            : b.createdAt.getTime() - a.createdAt.getTime(),
        )
    );
  }, [todos, search, category, sort]);

  return {
    todos: filteredTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
  };
}
