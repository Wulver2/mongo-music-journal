// dynamically render artists info 

import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"

export function ArtistProfile() {
    const [artist, setArtist] = useState([])
    const { id } = useParams()

    const getArtist = async () => {
        try {
            const artistInfo = await axios.get(`http://localhost:5001/artists/${id}`)
            setArtist(artistInfo.data)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getArtist();
    }, [])
    return (
        <div className="ml-24">
            {artist ?
                <h1 className="text-center">{artist.name}</h1>
                :
                null
            }

        </div>
    )
}