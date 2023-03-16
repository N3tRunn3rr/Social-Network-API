//thoughtController.js
const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .then(ThoughtData => res.json(ThoughtData))
        .catch((err) => res.status(400).json(err));
    },
    // get one thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then ((ThoughtData) =>  res.JSON(ThoughtData))
        .catch((err) => res.status(400).json(err));
    },
    // createThought
    createThought({ body }, res) {
        Thought.create(body)
        .then((ThoughtData) => res.json(ThoughtData))
        .catch((err) => res.status(400).json(err));
    },
    // update thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            { $set: body },
            { runValidators: true, new: true }
        )
        .then((ThoughtData) => res.json(ThoughtData))
        .catch((err) => res.status(400).json(err));
    },
    // delete thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then((ThoughtData) => res.json(ThoughtData))
        .catch((err) => res.status(400).json(err));
    },
    // add reaction
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $addToSet: { reactions: body } },
            { runValidators: true, new: true }
        )
        .then((ThoughtData) => res.json(ThoughtData))
        .catch((err) => res.status(400).json(err));
    },
    // delete reaction
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { runValidators: true, new: true }
        )
        .then((ThoughtData) => res.json(ThoughtData))
        .catch((err) => res.status(400).json(err));
    }
};

