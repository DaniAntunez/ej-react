import { useEffect, useState } from "react";
import axios from "axios";

export default function Trivial(){
    const [trivial, setTrivial] = useState();

    const [contador, setContador] = useState(0);

    const handleSelect = (answer, data) => {
        if (answer === data.correct_answer) {
          alert("¡Respuesta correcta! sumas 1 punto");
          setContador(prevContador => prevContador + 1);
        } else {
        alert("Respuesta incorrecta. La respuesta correcta es: " + data.correct_answer);
        }
    };

    const [cantidad, setCantidad] = useState(0);

    const handleAmoutChange = (e) => {
        setCantidad(e.target.value)
    }

    const reset = () => {
        setContador(0);
        setCantidad(0);
        setTrivial();
      };

    useEffect(() => {
        if(cantidad > 0) {
            // fetch("https://opentdb.com/api.php?amount=10&type=multiple").then(res => res.json()).then(res => {
            // fetch(`https://opentdb.com/api.php?amount=${cantidad}`).then(res => res.json()).then(res => {
            //     console.log(res.results);
            //     setTrivial(res.results);
            // })
    
            // axios.get("https://opentdb.com/api.php?amount=10&type=multiple").then(res => {
            axios.get(`https://opentdb.com/api.php?amount=${cantidad}`).then(res => {
                console.log(res.data.results);
                setTrivial(res.data.results);
            })
        }
    }, [cantidad])

    return ( 
        <div>
            <p className="comp">Component Trivial</p>

            <div className="flexH__trivial">
                <label for="cantidad">Número de preguntas: </label>
                <input className="inputCantidad" type="number" name="amount" value={cantidad} onChange={handleAmoutChange} min="1" id="cantidad"/>
                <p>Respuestas correctas: {contador}</p>
                <button className="trivialButton" onClick={() => reset()}>Reset</button>
            </div>

            <div className="flexH">
                {/* {trivial && trivial.map((data, index) => 
                <div className="card" key={index}>
                    <p className="question">{data.question}</p>

                    <div>
                        <button onClick={() => handleSelect(data.correct_answer, data)} className="answer" id="answer">{data.correct_answer}</button>
                    </div>

                    {data.incorrect_answers.map((incAns, index2) => 
                        <div>
                            <button onClick={() => handleSelect(incAns, data)} className="answer" key={index2} id="answer">{incAns}</button>
                        </div>
                    )}
                </div>)} */}

                {trivial && trivial.map((data, index) => {
                    
                    const correctAnswer = data.correct_answer;
                    const incorrectAnswer = data.incorrect_answers;
                    const answers = [ ...incorrectAnswer, correctAnswer];
                    const mixedAnswers = [...answers].sort(() => Math.random() - 0.5);
                
                    return (
                        
                        <div key={index} className="card">
                            <p>{data.question}</p>
                            <p className="flexV">
                                {mixedAnswers && mixedAnswers.map((answer, i) => (
                                    <button onClick={() => handleSelect(answer, data)} className="respuestas">{answer}</button>
                                ))}
                            </p>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}