import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyToken = (req, res, next) => {
    try {
        const sessionToken = req.cookies.sessionToken;
        jwt.verify(sessionToken, process.env.JWT_SECRET, function(err, decoded) {
            if (err) {
                res.status(401).json({message: "Not a valid token"});
                // Frontend should send them back to login
            }
            else {
                res.json(decoded)
                next()
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default verifyToken;