import { useState } from "react"
import { Link, useNavigate as navigate } from "react-router";


export function Register() {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: ""
    });

    const comparePw = (val) => {
        if (val == form.password) {
            return true 
        }
        return false
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userInfo = await axios.post("/auth/register", form);
            // later set user
            navigate("/");
        } catch (error) {
            console.error(error.message);
        }

    }

    return (
        <>
            <h1>login</h1>
            <form onSubmit={handleSubmit} className="fixed flex flex-col left-2/5 outline-solid outline-gray-900 rounded-sm shadow-2xl
            bg-gray-900 text-white p-8 gap-2">
                <label htmlFor="email"> Email: </label>
                <input type="email" id="email"
                    className="outline-solid rounded-sm outline-gray-5"
                    onChange={
                        (e) => {
                            setForm({ ...form, email: e.target.value })
                        }} />
                <label htmlFor="username"> Username: </label>
                <input type="text" name="username" id="username"
                    className="outline-solid rounded-sm outline-gray-5"
                    onChange={
                        (e) => {
                            setForm({ ...form, username: e.target.value })
                        }
                    } />
                <label htmlFor="password"> Password: </label>
                <input type="password" id="password"
                    className="outline-solid rounded-sm outline-gray-5"
                    onChange={
                        (e) => {
                            setForm({ ...form, password: e.target.value })
                        }} />
                <label htmlFor="confirmPassword"> Confirm password: </label>
                <input type="password" id="confirmPassword"
                    className="outline-solid rounded-sm outline-gray-5" />
                <button type="submit" className="pl-28  pr-28 bg-green-600 self-center rounded-sm hover:bg-green-700"> Register</button>
                <p>Have an account already? <Link to="/login" className="underline text-blue-400">Log in</Link></p>
            </form>
        </>
    )
}