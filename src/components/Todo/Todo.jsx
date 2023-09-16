import { useState } from "react";
function Todo({todoData , isFinished,changeFinished,onDelete,onEdit}){
const [Finished,setFinished] = useState(isFinished);
const [isEditing,setIsEditing] = useState(false);
const [editText,setEditText] = useState(todoData);
    return(
        <div>
            <input type="checkbox" checked ={Finished} onChange={(e) => {
                setFinished(e.target.checked);
                changeFinished(e.target.checked);
                }} />
            {(isEditing)?<input type="text" onChange={e => setEditText(e.target.value)}/> :<span>{todoData}</span>}
            <button onClick={() => {
                setIsEditing(!isEditing);
                onEdit(editText);
                }}>{(isEditing)?'Save':'Edit'}</button>
            <button  onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Todo;