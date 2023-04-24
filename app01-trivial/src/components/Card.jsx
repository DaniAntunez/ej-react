export default function Card({datos}){

    return (
        <div>
            <p className="comp">Component Card</p>

            <h3>{datos.title}</h3>
            <img width="100px" src={datos.img} alt={datos.title}/>
            <p>{datos.description}</p>
        </div>
    );
}

