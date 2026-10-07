import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { UserContext } from "../../context/userContext";

export function Artists() {
    const [artist, setArtist] = useState([])
    const {user} = useContext(UserContext)
    const navigate = useNavigate();

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

    const goToArtistsProf = (e, id) => {
        e.preventDefault();
        navigate(`/artist/${id}`);
    }

    return (
        <>
            <h1 className="text-center">Artists</h1>
            <div className="flex justify-items-center gap-3 ml-24">
                {artist ?
                    artist.map(artist => (
                        <div className="text-center flex flex-col">
                            {user ? <button className="hover:bg-gray-500">
                                ★
                            </button> : null}
                            <h2 onClick={(e) => { goToArtistsProf(e, artist._id) }}>{artist.name}</h2>
                        </div>
                    ))
                    :
                    <p>No artists loaded</p>
                }
            </div>
        </>
    )
}