import { Link } from "react-router";


export function Navbar({ isLoggedIn = false }) {
    return (
        <>
            <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-gray-800 shadow-lg text-white">
                <Link to="/"> Home </Link>
                <Link to="/login"> Login </Link>
                <Link to="/register"> Register </Link>
                <button className="bg-slate-900 hover:bg-slate-600">dark mode</button>
            </div>
        </>
    )
}