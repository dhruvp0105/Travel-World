const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    // const token = req.cookies.accessToken
    // const token = getCookie("accessToken");
    const token = localStorage.getItem("token");
    console.log("Token is ",token)
    if (!token) {
        return res.status(401).json({ success: false, message: "You are not authorized person" })
    }

    // if token is exist then verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "token is invalid" })
        }
        req.user = user
        // console.log("User is : ", req.user)
        next()
    })
}

const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.role === 'user') {
            next()
        }
        else {
            return res.status(401).json({ success: false, message: "You are not authenticated" })
        }
    })
}

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.role === 'admin') {
            next()
        }
        else {
            return res.status(401).json({ success: false, message: "You are not Authorize" })
        }
    })
}
module.exports = { verifyToken, verifyUser, verifyAdmin }