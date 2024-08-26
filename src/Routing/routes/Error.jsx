import { Link } from "react-router-dom";

export default function Error() {
    return(
        <div>
            <h1 style={{textAlign: 'center', padding: '20px 0'}}>
                <p style={{color: 'red'}}>404</p>
                page not found
                <p>go <Link to="/home">home</Link></p>
            </h1>
        </div>
    )
}