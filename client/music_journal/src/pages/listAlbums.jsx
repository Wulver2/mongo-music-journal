import { useState, useEffect } from "react"
import axios from "axios"

export function Albums() {
    const [albums, setAlbums] = useState([])
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

    return (
        <>
            <h1 className="text-center">Albums</h1>
            <div className="flex justify-items-center gap-3">
                {albums ?
                    albums.map(album => (
                        <div className="text-center flex flex-col">
                            <h2>{album.title} by {album.artist.name}</h2>
                        </div>
                    ))
                    :
                    <p> no Albums loaded</p>}
            </div>
        </>
    )
}