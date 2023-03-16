//userController.js
const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
        .then(UserData => res.json(UserData))
        .catch((err) => res.status(400).json(err));
    },
    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .then ((UserData) =>  res.JSON(UserData))
        .catch((err) => res.status(400).json(err));
    },
    // createUser
    createUser({ body }, res) {
        User.create(body)
        .then((UserData) => res.json(UserData))
        .catch((err) => res.status(400).json(err));
    },
    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate( 
            { _id: params.id },
            { $set: body },
            { runValidators: true, new: true }
        )
        .then((UserData) => res.json(UserData))
        .catch((err) => res.status(400).json(err));
    },
    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then((UserData) => res.json(UserData))
        .catch((err) => res.status(400).json(err));
    },
    // add friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $addToSet: { friends: params.friendId } },
            { runValidators: true, new: true }
        )
        .then((UserData) => res.json(UserData))
        .catch((err) => res.status(400).json(err));
    },
    // delete friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { runValidators: true, new: true }
        )
        .then((UserData) => res.json(UserData))
        .catch((err) => res.status(400).json(err));
    }
};

