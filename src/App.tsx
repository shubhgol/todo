import React, {useState, useEffect} from "react";
import './App';
import AddToDo from './components/addToDo'
import TodoList from './components/toDoList'

import {TodoInterface} from './interface'

import * as shortid from 'shortid';

function App() {

const [todo, updateTodo] = useState<TodoInterface[]>((JSON.parse(localStorage.getItem('todoInLocalStorage')||"[]")))
const [count, setCount] = useState<number>((JSON.parse(localStorage.getItem('todoCount')||"0")))

useEffect(() => {
  localStorage.setItem('todoInLocalStorage', JSON.stringify(todo));
  localStorage.setItem('todoCount', JSON.stringify(count));
}, [todo, count]);

function todoHandler(action:any):void {
     switch(action.type) {
       case 'ADD_TODO':
        updateTodo([...todo, {text:action.text, id:shortid.generate(), isCompleted: false}])
        setCount((newCount:number)=>++newCount)
        break;
       case 'COMPLETED':
         updateTodo((prevState:TodoInterface[])=>{
           return prevState.map(todo=>{
             if(todo.id===action.id){
               const newCount = !todo.isCompleted?count-1:count+1;
              setCount(newCount)
             return {...todo, isCompleted:!todo.isCompleted}
             }
             return todo
           })
         })
         break;
     }
}

        return(
            <>
            <AddToDo todoHandler={todoHandler} />
            <h4>Total todos remaining: {count} out of {todo.length}.</h4>
            <TodoList todos={todo} todoHandler={todoHandler}/> 
            </>
        ) 
}

export default App;
