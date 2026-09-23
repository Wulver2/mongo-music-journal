import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";

export function Song() {
    const [songs, setSongs] = useState([])
    const { user } = useContext(UserContext);

    const getSongs = async () => {
        try {
            const songsInfo = await axios.get("http://localhost:5001/songs");
            setSongs(songsInfo.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    const favoriteASong = async (e, songId) => {
        e.preventDefault()
        try {
            //limited to logged in users
            await axios.post("http://localhost:5001/favorites/song", {song: songId, id: user.id})
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getSongs();
    }, []);

    return (
        <>
            <h1 className="text-white text-center">Songs</h1>
            <div className="flex justify-items-center gap-3">
                {songs ?
                    songs.map(song => (
                        <div className="text-white text-center flex flex-col">
                            {user ? <button className="hover:bg-gray-500" onClick={(e) => favoriteASong(e, song.song._id)}>
                                ★
                            </button> : null}
                            <h2 className="e">{song.song.title}</h2>
                            <p className=""> by {song.artist.name}</p>
                            {song.album ? <p className=""> On {song.album.title}</p> : null}
                        </div>
                    ))
                    : <h2 className="text-white text-center">A problem has occured songs didn't load</h2>
                }
            </div>
        </>
    )
}