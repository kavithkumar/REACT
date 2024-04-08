import { useDispatch, useSelector } from "react-redux";
import { addToDos, removeToDos } from "./ToDosSlice";
import { useState } from "react";

function ToDos() {
    let toDos = useSelector((store) => store.ToDos.ToDo)
    let dispatch = useDispatch()
    let [task, setTask] = useState('')
    return (
        <>
            <input type="text" name="name" value={task} onChange={(e) => setTask(e.target.value)}></input>
            <button onClick={() => { dispatch(addToDos(task)); setTask('') }}>Add</button>
            <ol>
                {toDos.map((todos, index) => <><li key={index}>{todos}<button onClick={() => dispatch(removeToDos(todos))}>Delete</button></li></>)}
            </ol>
        </>
    )
}
export default ToDos