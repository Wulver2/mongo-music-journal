import express from "express"

const app = express()
// Routes for music
//create
// add favorite songs/artists

//get
// get songs, artist with list of songs and albums, genres also shows related artists,
// albums with list of songs from album, get a song (with lyrics?)

// update
// can update rating of a song/album

// delete
// remove artists/songs from favorites

app.listen(5001, () => {
    console.log("Server on")
})