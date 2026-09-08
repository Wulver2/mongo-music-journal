import express from "express"
import verifyToken from "../middleware/verifyToken";
import User from "../models/user";
import Song from "../models/song";

export const router = express.Router("express");

// add favorite songs/artists
router.post("/song", verifyToken, async (req, res) => {
    try {
        const { song, email } = req.params;
        const user = await User.findOne({ email: email });
        const songId = await Song.findOne(song)._id;

        user.favoriteSongs.push(songId);
        await user.save();
    }
    catch (error) {
        console.error(error.message);
    }

});

router.post("/artist", verifyToken, async (req, res) => {
    const { artist } = req.params;
});
router.post("/albums", verifyToken, async (req, res) => {
    const { albums } = req.params;
});

router.delete("/artist/:artist", verifyToken, async (req, res) => {

});

router.delete("/song/:song", verifyToken, async (req, res) => {

});

router.delete("/album/:album", verifyToken, async (req, res) => {

});

export default router;