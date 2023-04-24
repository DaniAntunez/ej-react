export default function Search({onSearchQuote}) {
    return <div>
        <label for="search">Busca citas de un personaje </label>
        <input id="search" type="text" onChange={(event) => onSearchQuote(event.target.value)}/>
        {/* <button onClick={onSearch}>Search</button> */}
    </div>
}
