const PostComment = require("../models/Comments");

const createComment = async (req, res) => {
  try {
    console.log('comment api create')
    // const { comment } = req.body;
    // const { _id } = req.user;
    // if (comment && _id) {
    //   const post = await DevPostModel.create({ comment, devId: _id });
    //   res.json(post);
    // } else {
    //   res.status(204).json({ error: "missing title or body" });
    // }
  } catch (error) {
    console.log(error);
  }
};

const getPostComments = async (req, res) => {
  try {
    console.log('d')
//     const { postId } = req.body;
//     if (_id) {
//       const devPosts = await PostComment.find({ postId });
//       res.json(devPosts);
//     } else {
//       res.status(204).json({ error: "missing params" });
    // }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    createComment,
    getPostComments
};
