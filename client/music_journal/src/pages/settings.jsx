import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { DeleteAcc } from "../components/deleteAcc"

export function Settings() {
    const { user } = useContext(UserContext)
    return (
        <div className="text-white ml-18">
            {user ? <DeleteAcc></DeleteAcc> : <p>Need to login in to use this feature</p>}
        </div>
    )
}
