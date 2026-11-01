import FilterButton from "./FilterButton"
import TodoItem from "./TodoItem"
import { FILTERS } from "@/constants/filter.constant"
import { useTodoStore } from "@/store/use-todo.store"

export default function TodoList() {
	const { todos, filter } = useTodoStore()

	const filteredTodos = todos.filter(todo => {
		if (filter === "all") return true

		return todo.status === filter
	})

	if (!todos.length) {
		return (
			<p className="text-center text-sm text-neutral-500 py-4">
				Список пуст
			</p>
		)
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex p-1 bg-neutral-100 rounded-lg">
				{FILTERS.map(f => (
					<FilterButton key={f.value} f={f} />
				))}
			</div>

			{filteredTodos.length === 0 ? (
				<p className="text-center text-sm text-neutral-500 py-4">
					По этому фильтру ничего нет
				</p>
			) : (
				<ul className="space-y-2">
					{filteredTodos.map(todo => (
						<TodoItem key={todo.id} todo={todo} />
					))}
				</ul>
			)}
		</div>
	)
}
