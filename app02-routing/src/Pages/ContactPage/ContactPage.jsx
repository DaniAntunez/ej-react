import { useForm } from "react-hook-form"
import ErrorsMessage from "../../Components/ErrorsMessage/ErrorsMessage";

export default function ContactPage(){
        const {register, handleSubmit, formState: {errors}} = useForm();

        const onSubmit = (dataF) => {
            console.log(dataF);
        }

        console.log(errors);

    return <form onSubmit={handleSubmit(onSubmit)}>
        <p>Estás en ContactPage</p>

        <div>
            <input type="text" placeholder="name" {...register("name")} />

            <input type="text" placeholder="surname" {...register("surname")} />

            <input type="number" placeholder="age" {...register("age")} />

            <input type="email" placeholder="email" {...register("email", {required:true, min:3})} />
            <ErrorsMessage error={errors.email} />

            <textarea placeholder="descripcion" {...register("descripcion")}></textarea>

            <select name="genero" {...register("genero")}>
                <option value="genero">genero</option>
                <option value="el">el</option>
                <option value="ella">ella</option>
                <option value="elle">elle</option>
                <option value="ello">ello</option>
            </select>

            <button>Enviar</button>
        </div>

    </form>
}