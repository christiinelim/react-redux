import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../stores/todoSlice";

function TodoItem({ todo }) {
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteTodo({ id: todo.id }))
    }

    const onUpdate = () => {
        const newTodo = prompt("What todo do you want to change to", todo.task)
        dispatch(updateTodo({ id: todo.id, task: newTodo}))
    }

    return (
        <div>
            <p>{todo.task}</p>
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default function TodoList(props) {
    const dispatch = useDispatch();
    // const todos = useSelector((state) => state.todos);
    const todos = useSelector(getAllTodos);
    const onClick = () => {
        const newTodo = prompt("What todo do you want to create")
        dispatch(createTodo({task: newTodo}))
    }

    return (
        <>
            <div>
                {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            </div>
            <div>
                <button onClick={onClick}>New Todo</button>
            </div>
        </>
    )
}