
import './Library.css';

export default function Library(){
    return(
        <><div className="Recent">
            <h3>Recently Added</h3>
            <div className="cards">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
        <div className="Library">
            <h3>Your Library</h3>
            <div className="cards">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div></>
    );
}