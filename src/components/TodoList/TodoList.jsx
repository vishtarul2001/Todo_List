import Todo from "../Todo/Todo"
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";
function TodoList() {
    const{list} = useContext(TodoContext);
    const{dispatch} = useContext(TodoDispatchContext);

    function onFinished(isFinished,todo) {
        dispatch({type:'Fiished_todo',payload : {isFinished,todo}});
    }

    function onDelete(todo) {
        dispatch({type:'delete_todo',payload : {todo}});
    }

    function onEdit(todo,todoText) {
        dispatch({type:'edit_todo',payload : {todo,todoText}});
}

return(
    <div>
        {list.length > 0 && 
        list.map((todo) => <Todo 
        key={todo.id} 
         isFinished={todo.Finished} 
         todoData={todo.todoData}
         id={todo.id}
         changeFinished = {(isFinished) => {onFinished(isFinished,todo)}}
         onDelete = {() => {onDelete(todo)}}
         onEdit = {(todoText) =>{onEdit(todo,todoText)}}
         /> )}
    </div>
)
}
export default TodoList;