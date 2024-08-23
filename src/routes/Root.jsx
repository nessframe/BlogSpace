import { Link } from "react-router-dom";

export default function Root() {
    return(
        <div>
            <h1>Welcome to posts app!</h1>
            <p>start use app: <Link to="/posts">GO</Link></p>
        </div>
    )
}