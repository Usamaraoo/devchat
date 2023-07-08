const ConversationModel = require("../models/Conversation");
const UserModel = require("../models/User");

// new conversation
const createConversation = async (req, res) => {
  try {
    const { receiver } = req.body;
    // querying both user by their name
    const convoUsers = await UserModel.find(
      { name: { $in: [receiver, req.user.name] } },
      "name avatarUrl"
    );
    // filtering their name array
    const usersName = convoUsers.map((u) => {
      return u.name;
    });
    // find convo between these two users
    const conv = await ConversationModel.findOne({
      "members.name": { $all: usersName },
    });
    // if no convo create new one
    if (!conv) {
      const newConversation = await ConversationModel.create({
        members: convoUsers,
      });
      res.json(newConversation);
    } else {
      res.json(conv);
    }
  } catch (error) {
    console.log(error);
  }
};

// get conversation of a current user
const getConversation = async (req, res) => {
  try {
    const { name } = req.user;
    const conversations = await ConversationModel.find({
      "members.name": { $all: [name] },
    });
    // here we are filtering only the other user in conversation not the current user
    const filteredConv = conversations.map((conv)=>{
      const mem = conv.members.filter((member)=> member.name !== req.user.name)
      conv.members = mem
      return conv
    })
    res.json(filteredConv);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createConversation,
  getConversation,
};
