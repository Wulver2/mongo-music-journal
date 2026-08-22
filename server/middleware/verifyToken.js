export const verifyToken = (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error.message);
    }
    next();
}

export default verifyToken;