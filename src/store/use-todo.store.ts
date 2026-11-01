import { create } from "zustand"
import { persist } from "zustand/middleware"

import type { FilterType, Todo, TodoStatus } from "@/entities/todo.types"

interface TodoStore {
	todos: Todo[]
	filter: FilterType
	addTodo: (text: string) => void
	changeStatus: (id: string, status: TodoStatus) => void
	deleteTodo: (id: string) => void
	setFilter: (filter: FilterType) => void
}

export const useTodoStore = create<TodoStore>()(
	persist(
		set => ({
			todos: [],
			filter: "all",
			addTodo: text =>
				set(state => ({
					todos: [
						...state.todos,
						{ id: crypto.randomUUID(), text, status: "todo" }
					]
				})),
			changeStatus: (id, status) =>
				set(state => ({
					todos: state.todos.map(todo =>
						todo.id === id ? { ...todo, status } : todo
					)
				})),
			deleteTodo: id =>
				set(state => ({
					todos: state.todos.filter(todo => todo.id !== id)
				})),
			setFilter: filter => set({ filter })
		}),
		{
			name: "todo-storage"
		}
	)
)
