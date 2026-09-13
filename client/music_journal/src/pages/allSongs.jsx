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

    useEffect(() => {
        getSongs();
    }, []);

    return (
        <>
            <h1 className="text-white text-center">Songs</h1>
            <div className="flex">
            {songs ?
                songs.map(song => (
                    <h2 className="text-white">{song.title}</h2>
                ))
                : <h2 className="text-white text-center">A problem has occured songs didn't load</h2>
            }
            </div>
        </>
    )
}