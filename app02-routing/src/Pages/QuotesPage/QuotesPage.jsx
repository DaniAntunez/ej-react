import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../../Components/Gallery/Gallery";
import Search from "../../Components/Search/Search";

const url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=15`

export default function QuotesPage(){
    const [characters, setCharacters] = useState([]);

    //buscador de quotes por character
    const getQuotes = (characterText) => {
        console.log(characterText);

        // axios.get(url + "&character=" + characterText).then(res => {
        axios.get(`${url}&character=${characterText}`).then(res => {
            // console.log(res.data);
            setCharacters(res.data);
        })
    }
    
    useEffect(() => {
        // axios.get(url).then(res => {
        //     // console.log(res.data);
        //     setCharacters(res.data);
        // })
        // utilizamos el axios de getQuotes con characterText vacio
        getQuotes("")
    }, [])

    return (
        <div>
            <p>Estás en QuotesPage</p>

            <div className="cards">
                <Search onSearchQuote={getQuotes}></Search>
                <Gallery array={characters}></Gallery>
            </div>
        </div>
    )
}