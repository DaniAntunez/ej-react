import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchAnimeGallery(){
    const [animes, setAnimes] = useState();

    useEffect(() => {
        // fetch("https://kitsu.io/api/edge/trending/anime?limit=5").then(res => res.json()).then(res => {
        //     console.log(res);
        //     setAnimes(res.data)
        // })

        axios.get("https://kitsu.io/api/edge/trending/anime?limit=5").then(res => {
            setAnimes(res.data.data)
        })
        
    }, [])

    return <div>
        <p className="comp">Component FetchAnimeGallery</p>

        <div className="flexH">
        
            {animes && animes.map((anime, index) => 
            <div key={index}>
                <img width="100" src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle} />
                <h3>{anime.attributes.canonicalTitle}</h3>
            </div>)}

        </div>
    </div>
}