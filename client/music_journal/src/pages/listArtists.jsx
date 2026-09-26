import { useState, useEffect } from "react";
import axios from "axios";

export function Artists() {
    const [artist, setArtist] = useState([])

    const getArtists = async () => {
        try {
            const artistInfo = await axios.get("http://localhost:5001/artists");

            setArtist(artistInfo.data);
        } catch (error) {
            console.error(error.message);
        }

    }
    useEffect(() => {
        getArtists();
    }, []);

    return (
        <>
            <h1 className="text-center">Artists</h1>
            <div className="flex justify-items-center gap-3 ml-24">
                {artist ?
                    artist.map(artist => (
                        <div className="text-center flex flex-col">
                            <h2>{artist.name}</h2>
                        </div>
                    ))
                    :
                    <p>No artists loaded</p>
                }
            </div>
        </>
    )
}