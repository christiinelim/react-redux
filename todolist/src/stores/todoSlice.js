import { createSlice, nanoid } from '@reduxjs/toolkit';

function findTodoIndexById(todos, id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index < 0) {
        // need to surface the error
        throw new Error("Cannot find todo with id" + id);
    }

    return index
}

const todoSlice = createSlice({
    name: 'todos',
    initialState:[
        {
            id: nanoid(),
            task: "Do the laundry"
        },
        {
            id: nanoid(),
            task: "Water the plants"
        }
    ],
    reducers: {
        createTodo: {
            prepare: function (payload) {
                return {
                    payload: {
                        id: nanoid(),
                        task: payload.task
                    }
                }
            },
            reducer: function (state, action) { // need to ultimately be a pure function
                state.push({
                    id: action.payload.id,
                    task: action.payload.task
                })
            },
        },
        // createTodo: function (state, action) {
        //     state.push({
        //         // id: nanoid(), this will not be pure function
        //         id: action.payload.id,
        //         task: action.payload.task
        //     })
        // },
        deleteTodo: function (state, action) {
            const index = findTodoIndexById(state, action.payload.id);
            state.splice(index, 1);
        },
        updateTodo: function (state, action) {
            const index = findTodoIndexById(state, action.payload.id);
            state[index].task = action.payload.task;
        }
    },
    selectors: {
        getAllTodos: function (state) {
            return state;
        },
        getTodoById: function (state, id) {
            const index = findTodoIndexById(state, id);
            return state[index];
        }
    }
});

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions;
export const { getAllTodos, getTodoById } = todoSlice.selectors;

export default todoSlice.reducer;