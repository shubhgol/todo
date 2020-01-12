import React from "react";
import { AddTodoInterface} from '../interface'

function AddToDo({todoHandler}:AddTodoInterface) {

  let input: any ;
        return(
            <>
            <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=> {
                e.preventDefault()
                if(input.value)
               todoHandler({type:'ADD_TODO', text:input.value})
               input.value=''
            }}>
            <input ref={node=>input= node}
            style={{backgroundColor:'cyan', height:'23px', marginLeft:'0.2%'}}
            placeholder='Enter your todo here'
            />
            <button type="submit" style={{backgroundColor:'cyan', marginLeft:'5px', cursor:'pointer'}}>Add</button>
            </form>
            </>
        )
}

export default AddToDo;