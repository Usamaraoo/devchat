const DevPostModel = require("../models/DevPosts");

const createPost = async (req, res) => {
  try {
    const { body } = req.body;
    const { _id } = req.user;
    if (body && _id) {
      const post = await DevPostModel.create({ body, devId: _id });
      res.json(post);
    } else {
      res.status(204).json({ error: "missing title or body" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getDevPost = async (req, res) => {
  try {
    const { _id } = req.user;
    if (_id) {
      const devPosts = await DevPostModel.find().populate({
        path: "devId",
        select: "name avatarUrl",
      }).sort({ createdAt: -1 });
      res.json(devPosts);
    } else {
      res.status(204).json({ error: "missing title or body" });
    }
  } catch (error) {
    console.log(error);
  }
};

const currentUserPosts = async (req, res) => {
  try {
    const { _id } = req.user;
    if (_id) {
      const devPosts = await DevPostModel.find({devId:_id}).populate({
        path: "devId",
        select: "name avatarUrl",
      }).sort({ createdAt: -1 });
      res.json(devPosts);
    } else {
      res.status(204).json({ error: "missing title or body" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPost,
  getDevPost,
  currentUserPosts,
};
