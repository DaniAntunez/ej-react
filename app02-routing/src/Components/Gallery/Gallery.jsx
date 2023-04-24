export default function Gallery(props){

    const arrayList = props.array;
    console.log(arrayList);

    return <div>
        <div className="cards">
            {arrayList.map((item, index) => <div className="card" key={index}>
                <div className="card_div_img" >
                    <img className="card_img" src={item.image} alt={item.character} />
                </div>
                <h3>{item.character}</h3>
                <p>{item.quote}</p>
            </div> 
            )}
        </div> 
    </div>
}
