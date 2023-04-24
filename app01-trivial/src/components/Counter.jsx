import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0)
    const text = "Vamos a contar "

    console.log("Ejecutando Counter");
    
    return (
        <div>
            <p className="comp">Component Counter (variable de estado)</p>
            {/* se utilizan estas variables de estado, cuando queremos modificar una variable y mostrarla */}

            {text}
            {count}
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}