import { Link } from "react-router";


export function Navbar({ isLoggedIn = false }) {
    return (
        <>
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
            <button class="bg-slate-900 text-white hover:bg-slate-600">dark mode</button>
        </>
    )
}