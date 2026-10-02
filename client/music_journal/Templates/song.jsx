import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router";

export function SongProfile() {
    const [song, setSong] = useState([]);
    const { id } = useParams

    const getSong = async() => {
        try {
            
        } catch (error) {
            
        }
    };
    useEffect(() => {
        getSong();
    }, []);
    return(
        <div className="ml-28">
            
        </div>
    )
}