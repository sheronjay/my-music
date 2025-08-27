import album from "../assets/left-control-album-cover.jpeg";
import "./Card.css";

export default function Card(){
    return(
        <div className="card">
            <img src={album} alt="Album Cover" className="card-image" />
            <div className="card-content">
                <h3 className="card-title">Goodbye & Good Riddance</h3>
                <h3 className="card-artist">Juice WRLD</h3>
            </div>

        </div>
    )
}