// import { Link, useNavigate, useParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export default function UsersDetailPage(){
    const {id} = useParams(); //coge el parametro
    const navigate = useNavigate();

    const onBack = () => {
        navigate("/users")
    }

    return <div>
        <p>Estás en UsersDetailPage</p>


        <button onClick={onBack}>Back</button>
        {/* <Link to="/users">Back</Link> */}

        Users Detail {id}
    </div>
}