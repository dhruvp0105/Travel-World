const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require("../models/user.js")


const register = async (req, res) => {
    try {

        //hashing password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })

        await newUser.save()
        res.status(200).json({ success: true, message: "Successfully created" })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Failed" })
    }
}

const login = async (req, res) => {

    const email = req.body.email
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        if (!checkCorrectPassword) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" })
        }

        const { password, role, ...rest } = user._doc;
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
        // console.log("Login Token is",token)

        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({ token, success: true, role, message: "Succesfully Login", data: { ...rest } })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Failed to login" })
    }
}

module.exports = { register, login }