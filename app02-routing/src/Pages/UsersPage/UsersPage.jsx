import { Link } from "react-router-dom";

export default function UsersPage(){
    return <div>
        <p>Estás en UsersPage</p>

        <Link to="/users/10">User 10</Link>
    </div>
}