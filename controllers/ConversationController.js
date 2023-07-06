const ConversationModel = require("../models/Conversation");

// new conversation
const createConversation = async (req, res) => {
  try {
    // const { _id } = req.user;
    const { senderId, receiverId } = req.body;
    const newConversation = await ConversationModel.create({
      members: [receiverId, senderId],
    });
    res.json(newConversation);
  } catch (error) {
    console.log(error);
  }
};

// get conversation of a current user
const getConversation = async (req, res) => {
  try {
    const { _id } = req.user;
    const conversations = await ConversationModel.find({
      members: { $in: [_id] },
    });
    res.json(conversations);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createConversation,
  getConversation,
};
