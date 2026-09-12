//user login thakle token check kore, 
// na thakle error message return kore

const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
    const token = req.cookies.token;
    // cookie theke token ta niye asha hocche

    if (!token) {
        return res.status(401).json({
            message: "Not authenticated"
        });
    }//token thakle verify kore dekha hocche je token ta valid kina

    try {
        // token verify kora hocche jeta login er shomoybackend crreate korse
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        //token valid thakle user er info req.user e store kora hocche
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

module.exports = checkToken;