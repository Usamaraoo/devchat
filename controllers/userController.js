const UserModel = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(500).json({ error: "user with this email already exists" });
    }
    const newUser = await UserModel.create({ name, email, password });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(200).json({ err: "something went wrong" });
  }
};
const loginUser = async (req, res) => {
  try {
    console.log('body',req.body);
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email, password });
    if (user) {
      res.status(200).json(user);
    }else{
      res.status(500).json({ error: "email or password incorrect" });
    }
  } catch (error) {
    res.status(500).json({ err: "something went wrong" });
  }
};
module.exports = {
  registerUser,
  loginUser
};
