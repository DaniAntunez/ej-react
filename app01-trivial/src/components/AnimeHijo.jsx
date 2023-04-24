export default function AnimeHijo(props){

    const arrayAnime = props.array;
    console.log(arrayAnime);

    return (
        <div className="flexH">
            {arrayAnime.map((object, index) => <div key={index}>
                <img width="100" src={object.attributes.posterImage.original} alt={object.attributes.canonicalTitle} />
                <p>{object.attributes.canonicalTitle}</p>
            </div> )}
        </div>
    )
}
