const express = require('express');
const { updateUser, deleteUser, getSingleUser, getAllUsers } = require('../controllers/userController');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');
const userRoute = express.Router();

userRoute.put("/:id",verifyUser,updateUser)

userRoute.delete("/:id",verifyUser,deleteUser)

userRoute.get("/:id",verifyUser,getSingleUser)

userRoute.get("/",verifyAdmin,getAllUsers)


module.exports = userRoute;