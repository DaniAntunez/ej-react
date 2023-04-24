import { useState } from "react";

export default function SimpleForm(){

    const [state, setState] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <p className="comp">Component SimpleForm</p>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="name" onChange={handleChange}/>
                <input type="text" placeholder="surname" name="surname" onChange={handleChange}/>
                <input type="text" placeholder="age" name="age" onChange={handleChange}/>
                <input type="text" placeholder="tlf" name="tlf" onChange={handleChange}/>
                <textarea name="descripcion" placeholder="descripcion" onChange={handleChange}/>

                <button>Enviar</button>
            </form>
        </div>
    );
}