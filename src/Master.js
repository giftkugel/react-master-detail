import { Link } from "react-router-dom";

function Master() {
    return (
        <div>
            <h1>Master</h1>
            <div><Link to="/detail/1">Detail 1</Link></div>
            <div><Link to="/detail/2">Detail 2</Link></div>
        </div>
    )
}

export default Master;