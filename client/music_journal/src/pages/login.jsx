import { useState } from "react"


export function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
    }

    return (
        <>
            <h1>login</h1>
            <form action="">
                <label htmlFor="email"> Email: </label>
                <input type="email" id="email" onChange={
                    (e) => {
                        setForm({ ...form, email: e.target.value })
                    }} />
                <label htmlFor="password"> Password: </label>
                <input type="password" id="password" onChange={
                    (e) => {
                        setForm({ ...form, password: e.target.value })
                    }} />
                <button type="submit">Log in</button>
            </form>
        </>
    )
}