import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router";

export function SongProfile() {
    const [song, setSong] = useState([]);
    const { id } = useParams

    const getSong = async () => {
        try {
            songInfo = await axios.get(`http://localhost:5001/songs/${id}`);
            setSong(songInfo.data)
        } catch (error) {

        }
    };
    useEffect(() => {
        getSong();
    }, []);
    return (
        <div className="ml-28">
            {song ?
                <h1>{ song.title }</h1>
                :
                <p> Song information did not load</p>}
        </div>
    )
}