import type { TodoFilter } from "@/entities/todo.types"
import { useTodoStore } from "@/store/use-todo.store"

interface ITodoFilter {
	f: TodoFilter
}

export default function FilterButton({ f }: ITodoFilter) {
	const { filter, setFilter } = useTodoStore()

	return (
		<button
			onClick={() => setFilter(f.value)}
			className={`
                flex-1 px-3 py-1.5 text-xs font-medium rounded-md transition-all
                ${
					filter === f.value
						? "bg-white text-neutral-900 shadow-sm"
						: "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/50"
				}
            `}
		>
			{f.label}
		</button>
	)
}
