import { useContext } from "react";
import { MemeContext } from "../Contexts/MemeContext";
import "./MemeGallery.scss";
import domtoimage from 'dom-to-image'; 

export default function MemeGallery(props){

    const list = props.array;
    console.log(list);

    const { memeConfig } = useContext(MemeContext)

    const downloadMeme = (index) => {
        domtoimage
            .toJpeg(document.querySelectorAll("[data-fn='download']")[index], {queality: 0.95})
            .then(function (dataUrl) {
                var link = document.createElement("a");
                link.download = "my-meme.jpeg";
                link.href = dataUrl;
                link.click();
            });
    };

    return <div className="gallery">
        <div className="row">
            {list && list.map((meme, index) => 
            <div key={index} className="col-3">
                <div className="gallery__panel">
                    <div data-fn="download" className="gallery__content">
                        <h2 className="gallery__text" style={{left: memeConfig.topX + "%", top: memeConfig.topY + "%"}}>{memeConfig.topText}</h2>
                        <h2 className="gallery__text" style={{right: memeConfig.bottomX + "%", bottom: memeConfig.bottomY + "%"}}>{memeConfig.bottomText}</h2>
                        <img src={meme.url} alt={meme.name} className="meme_img" />
                    </div>
                    <div className="gallery__boton">
                        <button className="meme_btn" onClick={() => downloadMeme(index)}>Download</button>
                    </div>
                </div>
            </div>)}
        </div> 
    </div>
}