import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router";
import axios from "axios";


export function DeleteAcc() {
    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    const handleDelete = async() => {
        try {
            console.log(user)
            await axios.delete("http://localhost:5001/auth/deleteAcc", {data: {id: user.id}});
            setUser(null)
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    }
    // Add second check for deletion

    return (
        <button className="bg-red-700" data-cy="deleteAcc" onClick={handleDelete}>Delete Account</button>
    )
}