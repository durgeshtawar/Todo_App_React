import React, { useState } from "react";
import { useTodo } from "../Context";

function TodoForm(){
    const {Todo, setTodo} = useState("")
   const {addTodo}= useTodo()

   const add = (e) => {
    e.preventDefult()
    if (!Todo) return 
        addTodo({Todo, completed: false})
      setTodo("";)
   }
   
    return (
        <form  onClick={add} className="Flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={Todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;