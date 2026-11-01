import { Pause, Play, Trash2 } from "lucide-react"

import type { Todo } from "@/entities/todo.types"
import { useTodoStore } from "@/store/use-todo.store"

export default function TodoItem({ todo }: { todo: Todo }) {
	const changeStatus = useTodoStore(state => state.changeStatus)
	const deleteTodo = useTodoStore(state => state.deleteTodo)

	const isCompleted = todo.status === "completed"
	const isActive = todo.status === "active"

	return (
		<li
			className={`flex items-start gap-3 p-3 rounded-lg transition-colors group border ${
				isActive
					? "border-blue-200 bg-blue-50/50 hover:bg-blue-50"
					: "border-transparent hover:bg-neutral-50"
			}`}
		>
			<input
				type="checkbox"
				checked={isCompleted}
				onChange={() =>
					changeStatus(todo.id, isCompleted ? "todo" : "completed")
				}
				className="w-4 h-4 text-neutral-900 rounded border-neutral-300 cursor-pointer mt-1.5 shrink-0"
			/>

			<span
				className={`text-sm flex-1 min-w-0 wrap-break-word transition-colors mt-1 ${
					isCompleted
						? "text-neutral-400 line-through"
						: isActive
							? "text-blue-900 font-medium"
							: "text-neutral-700"
				}`}
			>
				{todo.text}
			</span>

			<div className="flex items-center gap-1 shrink-0">
				{!isCompleted && (
					<button
						type="button"
						onClick={() =>
							changeStatus(todo.id, isActive ? "todo" : "active")
						}
						title={isActive ? "Приостановить" : "Взять в работу"}
						className={`p-1.5 rounded-md transition-all ${
							isActive
								? "text-blue-600 bg-blue-100 hover:bg-blue-200 opacity-100"
								: "text-neutral-400 hover:text-blue-500 opacity-0 group-hover:opacity-100"
						}`}
					>
						{isActive ? <Pause size={16} /> : <Play size={16} />}
					</button>
				)}

				<button
					type="button"
					onClick={() => deleteTodo(todo.id)}
					className="text-neutral-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1.5"
				>
					<Trash2 size={16} />
				</button>
			</div>
		</li>
	)
}
