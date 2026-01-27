import type { Todo } from "../types/todo"
import Button from "./Button"

type Props = {
    todo: Todo,
    onToggle: () => void,
    onDelete: () => void
}

export default function TodoCard({ todo, onToggle, onDelete }: Props) {
    return (
        <div className="border rounded p-4 flex justify-between items-start">
            <div>
                <h3 className={`font-semibold
                ${todo.isCompleted ? "line-through text-gray-400" : ""}`}>
                    {todo.title}
                </h3>
                <p className="text-sm text-gray-600">
                    {todo.description}
                </p>
                <span className="text-xs text-blue-500">
                    {todo.category}
                </span>
            </div>
            <div className="flex gap-2">
                <Button onClick={onToggle}>{todo.isCompleted ? "Undo" : "Done"}</Button>
                <Button className="bg-red-500 hover:bg-red-600" onClick={onDelete}>Delete</Button>
            </div>
        </div>
    )
}
