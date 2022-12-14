
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch,useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions';
import { useState } from 'react';
import {v4 as uuidv4 } from 'uuid'
import { todosRemainingSelector } from '../../redux/selectors';
import todoListSlice from './todosSlice'

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')
  const dispatch = useDispatch()
  const todoList = useSelector(todosRemainingSelector)




  const handleAddButtonClick = () =>{
    //dispatch()
    dispatch(todoListSlice.actions.addTodo({

      id : uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
     
    }))
    setTodoName('')
    setPriority('')
  }
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setTodoName(e.target.value)
  } 
  const handlePriority = (value) =>{
    console.log(value);
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map( todo =>  <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={ handleInputChange}  />
          <Select defaultValue="Medium" onChange={handlePriority} value={priority} >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button disabled={!todoName} type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}










// import { Col, Row, Input, Button, Select, Tag } from 'antd';
// import Todo from '../Todo';
// import { useDispatch,useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions';
// import { useState } from 'react';
// import {v4 as uuidv4 } from 'uuid'
// import { todosRemainingSelector } from '../../redux/selectors';


// export default function TodoList() {
//   const [todoName, setTodoName] = useState('')
//   const [priority, setPriority] = useState('Medium')
//   const dispatch = useDispatch()
//   const todoList = useSelector(todosRemainingSelector)




//   const handleAddButtonClick = () =>{
//     //dispatch()
//     dispatch(addTodo({

//       id : uuidv4(),
//       name: todoName,
//       priority: priority,
//       completed: false
     
//     }))
//     setTodoName('')
//     setPriority('')
//   }
//   const handleInputChange = (e) => {
//     console.log(e.target.value);
//     setTodoName(e.target.value)
//   } 
//   const handlePriority = (value) =>{
//     console.log(value);
//     setPriority(value)
//   }

//   return (
//     <Row style={{ height: 'calc(100% - 40px)' }}>
//       <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
//         {/* <Todo name='Learn React' prioriry='High' />
//         <Todo name='Learn Redux' prioriry='Medium' />
//         <Todo name='Learn JavaScript' prioriry='Low' /> */}
//         {todoList.map( todo =>  <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />)}
//       </Col>
//       <Col span={24}>
//         <Input.Group style={{ display: 'flex' }} compact>
//           <Input value={todoName} onChange={ handleInputChange}  />
//           <Select defaultValue="Medium" onChange={handlePriority} value={priority} >
//             <Select.Option value='High' label='High'>
//               <Tag color='red'>High</Tag>
//             </Select.Option>
//             <Select.Option value='Medium' label='Medium'>
//               <Tag color='blue'>Medium</Tag>
//             </Select.Option>
//             <Select.Option value='Low' label='Low'>
//               <Tag color='gray'>Low</Tag>
//             </Select.Option>
//           </Select>
//           <Button disabled={!todoName} type='primary' onClick={handleAddButtonClick}>
//             Add
//           </Button>
//         </Input.Group>
//       </Col>
//     </Row>
//   );
// }
