import { useContext } from "react"
import { UserContext } from "../../context/userContext"

export function Settings() {
    const { user } = useContext(UserContext)
    return (
        <div>
            {user ? <p>User logged in</p> : <p>Need to login in to use this feature</p>}
        </div>
    )
}
