

import { useEffect, useState } from "react";
import AnimeHijo from "./AnimeHijo";
import axios from "axios";

export default function AnimePadre(){

    const [animes1,setAnimes1] = useState([]);
    const [animes2,setAnimes2] = useState([]);
    const [animes3,setAnimes3] = useState([]);

    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/trending/anime?limit=5").then(res => {
            setAnimes1(res.data.data)
        })

        axios.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count").then(res => {
            setAnimes2(res.data.data)
        })

        axios.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count").then(res => {
            setAnimes3(res.data.data)
        })

    }, [])

    return (
        <div>
            <p className="comp">Component AnimePadre</p>

            <p className="comp__gris">AnimeHijo-A</p>                        
            <AnimeHijo array={animes1}></AnimeHijo>

            <p className="comp__gris">AnimeHijo-B</p>                        
            <AnimeHijo array={animes2}></AnimeHijo>

            <p className="comp__gris">AnimeHijo-C</p>                        
            <AnimeHijo array={animes3}></AnimeHijo>
        </div>

    )
}