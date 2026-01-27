import { useState } from "react"
import Button from "../../components/Button"
import TodoCard from "../../components/TodoCard"
import { useTodos } from "../../hooks/useTodos"
import type { Todo } from "../../types/todo"

export default function Todos() {

    const { todos,
        addTodo,
        updateTodo,
        deleteTodo,
        search,
        setSearch,
        category,
        setCategory,
        sort,
        setSort } = useTodos()

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [todoCategory, setTodoCategory] = useState<string>("")

    function handleAdd() {
        if (!title) return

        addTodo({ title, description, category: todoCategory, isCompleted: false })
        setTitle("")
        setDescription("")
        setTodoCategory("")
    }

    console.log("todos : ", todos)

    return (
        <div className="max-w-xl mx-auto p-6 space-y-4">
            <h1 className="text-2xl font-bold">My Todo</h1>

            {/* FORM */}
            <div className="space-y-2">
                <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder="Title ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder="Description ..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder="Category ..."
                    value={todoCategory}
                    onChange={(e) => setTodoCategory(e.target.value)}
                />
                <Button onClick={handleAdd}>Add Todo</Button>
            </div>

            {/* SEARCH & FILTER */}
            <div className="flex gap-2">
                <input
                    className="border p-2 flex-1"
                    type="text"
                    placeholder="Search ..."
                    value={category}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="border p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
                <select
                    className="border p-2"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as "asc" | "desc")}
                >
                    <option value="desc">Newest</option>
                    <option value="asc">Oldes</option>
                </select>
            </div>

            {/* LIST */}
            <div className="space-y-3">
                {todos?.map((todo: Todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        onToggle={() => updateTodo(
                            todo.id,
                            { isCompleted: !todo.isCompleted }
                        )}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </div>
        </div>
    )
}