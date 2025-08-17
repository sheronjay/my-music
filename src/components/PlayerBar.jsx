import albumcover from "../assets/left-control-album-cover.jpeg";
import Repeat from "../assets/Repeat.png";
import Left from "../assets/Left.png";
import Play from "../assets/Play.png";
import Right from "../assets/Right.png";
import Shuffle from "../assets/Shuffle.png";


export default function PlayerBar() {
  return (
    <footer className="player-bar">


      <div className="left">
        <img src={albumcover} alt="Album Cover" className="cover" style={{ borderRadius: "8px", width: "64px", height: "64px" }} />
        <div className="track-info">
          <div className="title">Long Gone</div>
          <div className="artist">Juice WRLD</div>
        </div>
        <button className="like">♡</button>
      </div>


      <div className="center">
        <div className="controls">
          <button><img src={Shuffle} alt='Shuffle' className="control" /></button>
          <button><img src={Left} alt='Left' className="control" /></button>
          <button><img src={Play} alt='Play' className="control" /></button>
          <button><img src={Right} alt='Right' className="control" /></button>
          <button><img src={Repeat} alt='Repeat' className="control" /></button>
        </div>

        <div className="progress-bar">
          <span>2:49</span>
          <div className="bar-bg">
            <div className="bar-fill"></div>
          </div>
          <span>3:37</span>
        </div>
      </div>


      <div className="right">
        <button>🖥️</button>
        <button>🔊</button>
        <input type="range" className="volume" />
      </div>
    </footer>
  )
}
