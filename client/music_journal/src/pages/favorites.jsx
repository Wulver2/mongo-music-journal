import axios from "axios"
import { useState } from "react"

export function Favorites() {
    const [favorites, setFavorites] = useState[{
        songs: [],
        albums: [],
        artists: []
    }]
    const getFavorites = async() => {
        const songs = await axios.get("https:/localhost:5001/favorites/songs")
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