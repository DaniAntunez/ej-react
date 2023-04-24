import { useEffect, useState } from "react";
import axios from "axios";
import MemeGallery from "../../Components/MemeGallery/MemeGallery";
import MemeForm from "../../Components/MemeForm/MemeForm"

export default function MemePage(){
    const [memes, setMemes] = useState();
    
    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes").then(res => {
            console.log(res.data.data.memes);
            setMemes(res.data.data.memes)
        })
        
    }, [])

    return <div>
        <p className="comp">Estás en MemePage</p>

        <div className="meme_page">
            <div className="meme_page__form">
                <MemeForm></MemeForm>      
            </div>
            <MemeGallery array={memes}></MemeGallery> 
        </div>
    </div>
}