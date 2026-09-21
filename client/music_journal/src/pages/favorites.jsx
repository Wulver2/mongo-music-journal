import axios from "axios"
import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext"

export function Favorites() {
    const {user} = useContext(UserContext);

    const [favorites, setFavorites] = useState[{
        songs: [],
        albums: [],
        artists: []
    }]
    const getFavorites = async() => {
        const songs = await axios.get("https:/localhost:5001/favorites/songs", user.id)
        setFavorites({...Favorites, songs: songs.data});
    }
    return (
        <div className="text-white">
            <h1>Favorites</h1>
            <div>
                {}
            </div>
        </div>
    )
}