import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/userContext"

export function Favorites() {
    const { user } = useContext(UserContext);

    /*const [favorites, setFavorites] = useState[{
        songs: [],
        albums: [],
        artists: [],
    }]*/

    const [favortieSongs, setFavoriteSongs] = useState([]);
    const [favoriteArtists, setFavoriteArtists] = useState([]);
    const [favoriteAlbums, setFavoritesAlbums] = useState([])

    const getFavorites = async () => {
        try {
            //add albums and artists later
            const id = user.id;
            const songs = await axios.get(`http://localhost:5001/favorites/songs/${id}`);
            const artists = await axios.get(`http://localhost:5001/favorites/artists/${id}`);
            const albums = await axios.get(`http://localhost:5001/favorties/albums/${id}`)

            setFavoriteSongs(songs.data);
            setFavoriteArtists(artists.data);
            setFavoritesAlbums(albums.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getFavorites();
        
    }, []);

    return (
        <div className="ml-24">
            <h1>Favorites</h1>
            <div>
                {favortieSongs ? 
                favortieSongs.map(song => (
                    <p>{song.title}</p>
                ))
                :
                <p>Favorite Songs did not load</p>}
            </div>
        </div>
    )
}