import albumcover from "../assets/left-control-album-cover.jpeg";

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
          <button>🔁</button>
          <button>⏮️</button>
          <button className="play">▶️</button>
          <button>⏭️</button>
          <button>🔀</button>
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
