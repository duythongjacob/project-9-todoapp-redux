import { createSlice } from "@reduxjs/toolkit";

export default createSlice ( {
    name: 'todoList',
    initialState: [
     {
        id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'
    },
    {
        id: 2, name: 'Learn Redux', completed: true, priority: 'Hight'
    },
    {
        id: 3, name: 'Learn js', completed: false, priority: 'Low'
    }
    ],
    reducers : {
        addTodo : (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo =  state.find(todo => todo.id ===action.payload)
            if(currentTodo){

                currentTodo.completed = !currentTodo.completed
            }
        }

    }
})

// const initState = [
//     {
//         id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'
//     },
//     {
//         id: 2, name: 'Learn Redux', completed: true, priority: 'Hight'
//     },
//     {
//         id: 3, name: 'Learn js', completed: false, priority: 'Low'
//     }

// ]



// const todosListReducer = (state = initState, action) => {

//     console.log({state, action});
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
//         default:
//             return state;

//     }
// }

// export default todosListReducer