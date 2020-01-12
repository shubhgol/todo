import * as React from 'react'

import { TodoInterface } from './../interface'

const TodoList = ({todos, todoHandler}:any) => {
  return (
    <ul>
           {todos.map((todo:TodoInterface)=><li 
           onClick={()=>todoHandler({type:'COMPLETED', id:todo.id})}
           style={todo.isCompleted?{textDecoration:'line-through', cursor:'pointer'}:{cursor:'pointer'}} 
           key={todo.id} >{todo.text}</li>)}
       </ul>
  )
}


export default TodoList