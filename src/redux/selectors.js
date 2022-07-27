
import { createSelector } from "@reduxjs/toolkit"
const searchTextSelector = (state) => state.filters.search
const todoListSelector = (state) => state.todoList
const prioritiesSelector = (state) => state.filters.priority
const statusFilterSelector = (state) => state.filters.status

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusFilterSelector,
    prioritiesSelector,
    (todoList, searchText, status,priorities) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.length ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                :  todo.name.includes(searchText)
            }
            return (todo.name.includes(searchText)
             && (status === 'Completed' ? todo.completed : !todo.completed) && 
             (priorities.length ? priorities.includes(todo.priority): true))
        })

    })




// export const todoListSelector = (state) =>{
//     const todosRemaining = state.todoList.filter((todo) =>{
//         return todo.name.includes(state.filters.search)
//     })

//     return todosRemaining}
// ===========
// export const searchTextSelector = (state) => state.filters.search