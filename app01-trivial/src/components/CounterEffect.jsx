import { useEffect, useState } from "react"

export default function CounterEffect(){

    const [contador, setContador] = useState(0)
    const [contador2, setContador2] = useState(0)
    console.log("Ejecutando Contador");

    // useEffect(funcion, [cuando]);
    
    useEffect(() => {
        console.log('me inicio una sola vez');
    }, []);

    useEffect(() => {
        console.log('me muestro cuando cambia contador');
    }, [contador]);

    useEffect(() => {
        console.log('me muestro cuando cambia contador o contador2');
    }, [contador, contador2]);

    useEffect(() => {
        return () => {
            console.log('me muestro cuando se destruye el componente');
        }
    }, []);

    return (
        <div>
            <p className="comp">Component CounterEffect</p>

            {contador}
            <button onClick={() => setContador(contador + 1)}>+1</button>
        </div>
    );
}