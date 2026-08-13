import express from "express";
import { connectDB } from "./db.js";

const app = express()

await connectDB();
// Routes for music
//create
// add favorite songs/artists
app.post("/favorites/song", (req, res) => {
    const {song} = req.body
})

app.post("/favorites/artist", (req, res) => {
    const { artist } = req.body
})
//get
// get songs, artist with list of songs and albums, genres also shows related artists,
// album with list of songs from album, get a song (with lyrics?)

app.get("/songs{/:song_title}", (req, res) => {

});

app.get("/artist", (req, res) => {

});

app.get("/album", (req, res) => {

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

