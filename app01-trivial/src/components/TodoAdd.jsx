import { useState } from "react"

export default function TodoAdd(){

    const todoList = [{name: "Aprender React", isDone: false}, {name:"Sacar al gato", isDone: false}, {name: "Ver la peli de Super Mario", isDone:true}]
    
    const [list, setList] = useState(todoList)

    const addNew = () => {
        console.log("Prueba addNew");
        const copyList = [...list];
        copyList.push({name: "Nueva tarea", isDone: false})
        setList(copyList)
    }

    return (
        <div>
            <p className="comp">Component TodoAdd</p>

            <ul>
                {list.map((tarea, index) => <li key={index}>{tarea.name}</li>)}
            </ul>
            <button onClick={addNew}>Añadir Tarea</button>
        </div>
    );
}