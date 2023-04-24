export default function ErrorsMessage({error}){

    return <div>
        {error && <div>
            {error.type === "required" && <p>campo requerido</p>}
            {error.type === "minLenght" && <p>poco texto</p>}
            {error.type === "min" && <p>numero pequeño</p>}
        </div>}
    </div>

}
