import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../context/userContext";


export function Navbar({ isLoggedIn = false }) {
    const { user } = useContext(UserContext)

    return (
        <>
            <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-gray-800 shadow-lg text-white">
                <Link to="/"> Home </Link>
                <Link to="/settings"> Settings </Link>
                <Link to="/songs"> Songs </Link>
                {!user ?
                <>
                <Link to="/login"> Login </Link>
                <Link to="/register"> Register </Link>
                </> : null}
                <button className="bg-slate-900 hover:bg-slate-600">dark mode</button>
            </div>
        </>
    )
}