import type { TodoFilter } from "@/entities/todo.types"

export const FILTERS: TodoFilter[] = [
	{ value: "all", label: "Все" },
	{ value: "todo", label: "Ожидают" },
	{ value: "active", label: "В работе" },
	{ value: "completed", label: "Готовы" }
]
