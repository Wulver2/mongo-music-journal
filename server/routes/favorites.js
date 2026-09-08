import express from "express"
import verifyToken from "../middleware/verifyToken";

export const router = express.Router("express");

// add favorite songs/artists
router.post("/song/:song", verifyToken,(req, res) => {
    const { song } = req.params;
});

router.post("/artist/:artist", verifyToken,(req, res) => {
    const { artist } = req.params;
});
router.post("/albums/:albums", verifyToken,(req, res) => {
    const { albums } = req.params;
});

router.delete("/artist/:artist", verifyToken,(req, res) => {

});

router.delete("/song/:song", verifyToken,(req, res) => {

});

router.delete("/album/:album", verifyToken,(req, res) => {

});

export default router;