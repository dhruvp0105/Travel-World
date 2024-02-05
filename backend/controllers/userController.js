const User = require("../models/user.js")


// create User
const createUser = async (req, res) => {
    const newUser = new User(req.body)
    try {
        const savedUser = await newUser.save();
        res.status(200).json({ success: true, message: 'Successfully created', data: savedUser })
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed' })
    }
}

// update User
const updateUser = async (req, res) => {
    const { id } = req.params;

    try {
        const update = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: update })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to Update' })
    }
}

// delete User
const deleteUser = async (req, res) => {

    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully deleted' })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to Delete' })
    }
}

// get single User
const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        const singleuser = await User.findById(id);
        res.status(200).json({ success: true, message: 'Successfully fetch tour', data: singleuser })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch single user' })

    }
}

// get all Users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, message: 'Successfully fetch All tours', data: users })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch All Users' })
    }
}

module.exports = { createUser, updateUser, deleteUser, getSingleUser, getAllUsers }