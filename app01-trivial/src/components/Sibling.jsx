export default function Sibling(){
    const msg = "Click me";

    return (
       <>
            <p className="comp">Component Sibling</p>

            <button>{msg}</button>
            <button>Mejor a mi</button>
        </>
    );
}