import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router";
import axios from "axios";


export function DeleteAcc() {
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleDelete = () => {
        try {
            axios.delete("http://localhost:5001/auth/deleteAcc");
            setUser(null)
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    }
    // Add second check for deletion

    return (
        <button className="bg-red-700">Delete Account</button>
    )
}