import { createContext, useContext } from "react";

export const ToDoConText = createContext({
    Todos: [
        {
          id: 1,
          todo: "Todo msg",
          Completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo:(id) => {},
    toggleComplete: (id) => {}

})


export const useTodo = () => {
    return useContext(ToDoConText)
}
export const TodoProvider = ToDoConText.Provider
