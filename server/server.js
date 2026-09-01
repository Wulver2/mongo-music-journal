import express from "express";
import { connectDB } from "./db.js";
import Artist from "./models/artist.js";
import Album from "./models/album.js";
import Song from "./models/song.js";
import {router as authRouter} from "./routes/auth.js"
import verifyToken from "./middleware/verifyToken.js";
import cookieParser from "cookie-parser";


const app = express()
app.use('/auth', authRouter);
// needed to get request cookies when verifying token
app.use(cookieParser())

await connectDB();
// Routes for music
//create
// add favorite songs/artists
app.post("/favorites/:song", (req, res) => {
    const { song } = req.body
})

app.post("/favorites/:artist", (req, res) => {
    const { artist } = req.body
})
//get
// get songs, artist with list of songs and albums, genres also shows related artists,
// album with list of songs from album, get a song (with lyrics?)

app.get("/songs{/:song_title}", async (req, res) => {
    try {
        const { song_title } = req.params;
        let song;

        if (!song_title) {
            song = await Song.find();
        }
        else {
            song = await Song.find({title: song_title});
        }
        res.json(song);
    } catch (error) {
        console.error(error.message);
    }
});

app.get("/artist{/:artist_name}", async (req, res) => {
    try {
        const { artist_name } = req.params;
        let artist;

        if (!artist_name) {
            artist = await Artist.find();
        }
        else {
            artist = await Artist.find({name: artist_name});
        }

        res.json(artist);
    } catch (error) {
        console.error(error.message);
    }
});

app.get("/album{/:album_name}", async (req, res) => {
    try {
        const { album_name } = req.params;
        let album;

        if (!album_name) {
            album = await Album.find();
        }
        else {
            album = await Album.find({name: album_name});
        }

        res.json(album);
    } catch (error) {
        console.error(error.message);
    }
});



// update
// can update rating of a song/album
app.put("/rating", (req, res) => {

});

// delete
// remove artists/songs from favorites
app.delete("/favorites/:artist", (req, res) => {

});

app.delete("/favorites/:song", (req, res) => {

});

app.listen(5001, () => {
    console.log("Server on")
});

