import axios from "axios"
import { useContext } from "react";
import { useNavigate } from "react-router"
import { UserContext } from "../../context/userContext";

export function Logout() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleClick = async() => {
        try {
            await axios.post("http://localhost:5001/auth/logout");
            setUser(null)
            navigate("/");
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <button onClick={handleClick}>Log out</button>
    )
}