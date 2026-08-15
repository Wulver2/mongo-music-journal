import mongoose from "mongoose";
import { connectDB } from "../db";
import Artist from "../models/artist";
import Album from "../models/album";
import Song from "../models/song";
import musicData from "./data";


const seedDB = async () => {
    connectDB();


    await Song.deleteMany();
    await Album.deleteMany();
    await Artist.deleteMany();

    // Insert artist and album data first, so that
    // album and songs can use there ids to refrence them
    for (var i = 0; i < musicData.length(); i++) {
        await Artist.insertOne({name: musicData[i].name, tags: musicData[i].tags})
    }

}