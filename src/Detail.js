import { Link, useParams } from "react-router-dom";
function Master() {
    let { id } = useParams();

    return (
        <div>
            <div><Link to="/">back</Link></div>
            <h1>Detail</h1>
            <div>This is ID {id}</div>
        </div>
    )
}

export default Master;