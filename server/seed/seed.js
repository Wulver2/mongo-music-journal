import mongoose from "mongoose";
import { connectDB } from "../db.js";
import Artist from "../models/artist.js";
import Album from "../models/album.js";
import Song from "../models/song.js";
import musicData from "./data.js";
import { json } from "express";


const seedDB = async () => {
    await connectDB();


    await Song.deleteMany();
    await Album.deleteMany();
    await Artist.deleteMany();

    // Insert artist and album data first, so that
    // album and songs can use there ids to refrence them
    for (var i = 0; i < musicData.length; i++) {
        const artist = await Artist.insertOne({
            name: musicData[i].name,
            tags: musicData[i].tags
        })

        for (var j = 0; j < musicData[i].albums.length; j++) {
            const album = await Album.insertOne({
                title: musicData[i].albums[j].title,
                releaseDate: musicData[i].albums[j].releaseDate,
                artist: artist
            });

            for (var k = 0; k < musicData[i].albums[j].songs.length; k++) {
                await Song.insertOne({
                    title: musicData[i].albums[j].songs[k].name,
                    artist: artist,
                    album: album
                });
            }
        }

    }

}

seedDB()