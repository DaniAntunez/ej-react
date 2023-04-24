import { useState } from "react";

export default function TodoAddPro(){

    const todoList = [{name: "Aprender React", isDone: false}, {name:"Sacar al gato", isDone: false}, {name: "Ver la peli de Super Mario", isDone:true}];
    
    const [list, setList] = useState(todoList);
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addNew = () => {
        console.log("Prueba addTask");
        const copyList = [...list];
        copyList.push({name: newTask, isDone: false})
        setList(copyList)
    }

    return (
        <div>
            <p className="comp">Component TodoAddPro</p>

            <ul>
                {list.map((tarea, index) => <li key={index}>{tarea.name}</li>)}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="tarea" name="tarea" value={newTask} onChange={handleInputChange}/>
                <button onClick={addNew}>Añadir Tarea</button>
            </form>
        </div>
    );
}