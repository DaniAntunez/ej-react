export default function List(){

    const singers = ["singer1", "singer2", "singer3"]

    return (
        <div>
            <p className="comp">Component List</p>

            <ul>
                {singers.map((singer, index) => <li key={index}>{singer}</li>)}
                {/* {singers.map((singer) => <li key={singer}>{singer}</li>)} */}
            </ul>
        </div>
    );
}

