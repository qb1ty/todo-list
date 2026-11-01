export type TodoStatus = "todo" | "active" | "completed"
export type FilterType = "all" | TodoStatus

export type Todo = {
	id: string
	text: string
	status: TodoStatus
}

export type TodoFilter = {
	value: FilterType
	label: string
}
