import { useState } from "react"

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
            fixed flex flex-col left-2/5 outline-solid rounded-sm shadow-2xl
            bg-gray-900 text-white p-8
            ">
                <label htmlFor="email"> Email: </label>
                <input type="email" id="email" placeholder="email" onChange={
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
                <button type="submit">Log in</button>
            </form>
        </>
    )
}