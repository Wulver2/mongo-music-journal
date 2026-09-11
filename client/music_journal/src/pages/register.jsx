import { useState } from "react"
import { Link, useNavigate} from "react-router";
import axios from "axios";


export function Register() {
    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPw: "",
    });

    const [isMatch, setIsMatch] = useState(true);

    const comparePw = (val) => {
        if (val == form.password) {
            return true 
        }
        return false
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (comparePw(form.confirmPw)) {
                const userInfo = await axios.post("http://localhost:5001/auth/register", form);
                // later set user
                setIsMatch(true)
                navigate("/");
            }
            else {
                setIsMatch(false)
            }
        } catch (error) {
            console.error(error.message);
        }

    }

    return (
        <>
            <h1>login</h1>
            <form className="fixed flex flex-col left-2/5 outline-solid outline-gray-900 rounded-sm shadow-2xl
            bg-gray-900 text-white p-8 gap-2">
                <label htmlFor="email"> Email: </label>
                <input required type="email" id="email"
                    className="outline-solid rounded-sm outline-gray-5"
                    onChange={
                        (e) => {
                            setForm({ ...form, email: e.target.value })
                        }} />
                <label htmlFor="username"> Username: </label>
                <input required type="text" name="username" id="username"
                    className="outline-solid rounded-sm outline-gray-5"
                    onChange={
                        (e) => {
                            setForm({ ...form, username: e.target.value })
                        }
                    } />
                <label htmlFor="password"> Password: </label>
                <input required type="password" id="password"
                    className={`outline-solid rounded-sm ${isMatch ? 'outline-gray-300' : 'outline-red-600 text-red-600'}`}
                    onChange={
                        (e) => {
                            setForm({ ...form, password: e.target.value })
                        }} />
                <label htmlFor="confirmPassword"> Confirm password: </label>
                <input required type="password" id="confirmPassword"
                    className={`outline-solid rounded-sm ${isMatch ? 'outline-gray-300' : 'outline-red-600 text-red-600'}`} 
                    onChange={(e) => {setForm({...form, confirmPw: e.target.value})}}/>
                <button id="regiButton" type="submit" onClick={handleSubmit} className="pl-28  pr-28 bg-green-600 self-center rounded-sm hover:bg-green-700"> Register</button>
                {!isMatch && <p id="matchError" className="text-red-600">Passwords do not match</p>}
                <p>Have an account already? <Link to="/login" className="underline text-blue-400">Log in</Link></p>
            </form>
        </>
    )
}