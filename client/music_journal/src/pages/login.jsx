import { useState } from "react"
import { Link } from "react-router";

export function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <h1>login</h1>
            <form className="
            fixed flex flex-col left-2/5 outline-solid outline-gray-900 rounded-sm shadow-2xl
            bg-gray-900 text-white p-8 gap-2
            ">
                <label htmlFor="email"> Email: </label>
                <input type="email" id="email" placeholder="email"
                    className="outline-solid rounded-sm outline-gray-5"
                    onChange={
                        (e) => {
                            setForm({ ...form, email: e.target.value })
                        }} />
                <label htmlFor="password"> Password: </label>
                <input type="password" placeholder="password" id="password"
                    className="outline-solid rounded-sm outline-gray-50"
                    onChange={
                        (e) => {
                            setForm({ ...form, password: e.target.value })
                        }} />
                <button type="submit" className="pl-28  pr-28 bg-green-600 self-center rounded-sm hover:bg-green-700">Log in</button>
                <p>Don't have an account? <Link to="/register" className="underline text-blue-400">sign up now</Link></p>
            </form>
        </>
    )
}