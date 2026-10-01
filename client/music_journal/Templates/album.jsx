import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export function AlbumProfile() {
    const [album, setAlbum] = useState([])
    const { id } = useParams()

    const getAlbum = async () => {
        try {
            const albumInfo = await axios.get(`http://localhost:5001/albums/${id}`)
            setAlbum(albumInfo.data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getAlbum();
    },[])

    return (
        <div className="ml-48">
            {album.album ?
                <>
                <h1 className="text-center">{album.album.title}</h1>
                <h2>{album.album.artist.name}</h2>
                {album.songs.map(song => (
                    <li>{song.title}</li>
                ))}
                </>
                :
                <p>Problem loading album info</p>
            }
        </div>
    )

}