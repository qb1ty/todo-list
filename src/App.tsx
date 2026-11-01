import { useState } from "react"

import TodoList from "@/components/TodoList"
import { useTodoStore } from "@/store/use-todo.store"

export default function App() {
	const addTodo = useTodoStore(state => state.addTodo)

	const [text, setText] = useState<string>("")
	const [isEmpty, setIsEmpty] = useState<boolean>(false)

	const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!text.trim().length) {
			setIsEmpty(true)
			return
		}

		addTodo(text.trim())
		setIsEmpty(false)
		setText("")
	}

	return (
		<div className="w-full min-h-screen flex items-center justify-center bg-neutral-50/50 p-4">
			<div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
				<h1 className="text-xl font-semibold text-neutral-900 mb-6">
					Мои задачи
				</h1>

				<form
					onSubmit={handleSubmit}
					className="flex items-end gap-3 mb-6"
				>
					<div className="flex flex-col items-start gap-1 w-full">
						{isEmpty && (
							<p className="text-red-500 text-xs">
								Поле не может быть пустым
							</p>
						)}
						<input
							type="text"
							placeholder="Что нужно сделать?"
							value={text}
							onChange={event => setText(event.target.value)}
							className={`
								flex-1
								w-full px-4 py-2
								bg-transparent
								border border-neutral-300
								rounded-lg shadow-sm
								text-sm text-neutral-900 placeholder:text-neutral-400
								outline-none
								transition-all duration-200
								focus:border-neutral-400 focus:ring-4 focus:ring-neutral-100/70
							`}
						/>
					</div>

					<button
						type="submit"
						className="
                            px-5 py-2
                            bg-neutral-900 text-white
                            text-sm font-medium
                            rounded-lg shadow-sm
                            hover:bg-neutral-800 active:scale-95
                            transition-all duration-200
                        "
					>
						Добавить
					</button>
				</form>

				<TodoList />
			</div>
		</div>
	)
}
