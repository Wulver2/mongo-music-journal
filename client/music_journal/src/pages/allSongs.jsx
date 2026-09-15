import axios from "axios"
import { useEffect, useState } from "react";

export function Song() {
    const [songs, setSongs] = useState([])

    const getSongs = async () => {
        try {
            const songsInfo = await axios.get("http://localhost:5001/songs");
            setSongs(songsInfo.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    const favoriteASong = async () => {
        try {
            //limited to logged in users
        } catch (error) {
            
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
                    <div className="text-center flex flex-col">
                    <button>Favorite</button>
                    <h2 className="text-white">{song.song.title}</h2>
                    <p className="text-white"> by {song.artist.name}</p>
                    {song.album ? <p className="text-white"> On {song.album.title}</p> : null}
                    </div>
                ))
                : <h2 className="text-white text-center">A problem has occured songs didn't load</h2>
            }
            </div>
        </>
    )
}