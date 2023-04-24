export default function BtnClick(){

    const handleClick = (name) => {
        console.log(name);
    }

    return (
        <div>
            <p className="comp">Component BtnClick</p>

            {/* Asi no pasas parametros por lo que los valores que recibiras en la funcion son los que te envie el onClick. "name" = evento del click  */}
            <button onClick={handleClick}>Click</button>

            {/* Asi ejecutas una funcion pasandole tus propios parametros. El valor del parametro "name" = Parametro */}
            <button onClick={() => handleClick("Parametro")}>Click</button>
        </div>
    );
}