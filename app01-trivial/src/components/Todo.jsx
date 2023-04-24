export default function Todo(){

    const todoList = [{name: "Aprender React", isDone: false}, {name:"Sacar al gato", isDone: false}, {name: "Ver la peli de Super Mario", isDone:true}]

    return (
        <div>
            <p className="comp">Component Todo</p>

            <ul>
                {todoList.map(tarea => <li key={tarea.name}>{tarea.name}</li>)}
            </ul>
        </div>
    );
}