const UserModel = require("../models/User");

const registerUser = async (req, res) => {
  try {
    res.status(200).json("create new user");
  } catch (error) {
    res.status(200).json({ err: "something went wrong" });
  }
};
module.exports = {
    registerUser
}