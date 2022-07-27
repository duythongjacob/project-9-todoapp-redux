

import filtersReducer from "../components/Filters/filtersSlice"
import todosListReducer from "../components/TodoList/TodosSlice"
import {combineReducers} from 'redux'

// const rootReducer = (state={ } , action) => {


//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todosListReducer(state.todoList, action)
//     }
    
// }


const rootReducer = combineReducers({
        filters: filtersReducer,
        todoList: todosListReducer
})
export default rootReducer






// =====================================================

// const initState = {
//     filters: {
//         search: '',
//         status: 'All',
//         priority: []
//     },
//     todoList: [
//         {
//             id: 1, name:'Learn Yoga', completed: false, priority: 'Medium'
//         },
//         {
//             id: 2, name:'Learn Redux', completed: false, priority: 'Hight'
//         },
//         {
//             id: 3, name:'Learn js', completed: false, priority: 'Low'
//         }
//     ]

// }



// const rootReducer = (state = initState, action) => {

//     // console.log({state, action});
//     switch(action.type) {
//        case 'todoList/addTodo':
//         return {
//             ...state,
//             todoList: [
//                 ...state.todoList,
//                 action.payload
//             ]
//         }
//         case 'filter/searchFilterChange':
//             return {
//                 ...state,
//                 filters:{
//                     ...state.filters,
//                     search: action.payload
//                 }
//             }
//         default: 
//             return state;
//     }
    
// }
// export default rootReducer