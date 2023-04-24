import React from "react";
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { MemeContext } from "../Contexts/MemeContext";


// FORMULARIO CON BOTON ENVIAR
// export default const MemeForm = () => {
//     const {setMemeConfig} = useContext(MemeContext);
//     const {register, handleSubmit} = useForm();

//     const onSubmit = (data) => {
//         setMemeConfig(data)
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input type="text" {...register("topText")} />
//             <input type="number" {...register("topX")} />
//             <input type="number" {...register("topY")} />
//             <input type="text" {...register("bottomText")} />
//             <input type="number" {...register("bottomX")} />
//             <input type="number" {...register("bottomY")} />
//             <button>Enviar</button>
//         </form>
//     )
// }


// FORMULARIO CON CAMBIOS AUTOMATICOS, SIN BOTON ENVIAR
export default function MemeForm() {
    const {memeConfig, setMemeConfig} = useContext(MemeContext);
    const {register, watch} = useForm({
        defaultValues: memeConfig
    });

    const onChange = (e) => {
        setMemeConfig({...watch(), [e.target.name]: e.target.value});
    }

    return <form className="meme_form">
            <label form="topText">topText</label>
            <input type="text" {...register("topText")} onChange={onChange} id="topText" />

            <label form="topX">topX</label>
            <input type="number" {...register("topX")} onChange={onChange} id="topX" />

            <label form="topY">topY</label>
            <input type="number" {...register("topY")} onChange={onChange} id="topY" />

            <label form="bottomText">bottomText</label>
            <input type="text" {...register("bottomText")} onChange={onChange} id="bottomText" />

            <label form="bottomX">bottomX</label>
            <input type="number" {...register("bottomX")} onChange={onChange} id="bottomX" />

            <label form="bottomY">bottomY</label>
            <input type="number" {...register("bottomY")} onChange={onChange} id="bottomY" />
        </form>
}