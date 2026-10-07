import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { UserContext } from "../../context/userContext"

export function Albums() {
    const [albums, setAlbums] = useState([])
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const getAlbums = async () => {
        try {
            const albumsInfo = await axios.get("http://localhost:5001/albums");
            setAlbums(albumsInfo.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getAlbums();
    }, []);

    const goToAlbum = (e, id) => {
        e.preventDefault();
        navigate(`/album/${id}`);
    }
    return (
        <>
            <h1 className="text-center">Albums</h1>
            <div className="flex justify-items-center gap-3 ml-24">
                {albums ?
                    albums.map(album => (
                        <div className="text-center flex flex-col">
                            {user ? <button className="hover:bg-gray-500">
                                ★
                            </button> : null}
                            <h2 onClick={(e) => { goToAlbum(e, album._id) }}>{album.title} by {album.artist.name}</h2>
                        </div>
                    ))
                    :
                    <p> no Albums loaded</p>}
            </div>
        </>
    )
}