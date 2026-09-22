import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/userContext"

export function Favorites() {
    const { user } = useContext(UserContext);

    const [favorites, setFavorites] = useState[{
        songs: [],
        albums: [],
        artists: [],
    }]
    const getFavorites = async () => {
        try {
            //add albums and artists later
            const songs = await axios.get("https:/localhost:5001/favorites/songs", user.id);
            setFavorites({ ...Favorites, songs: songs.data });
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <div className="text-white">
            <h1>Favorites</h1>
            <div>
                { }
            </div>
        </div>
    )
}