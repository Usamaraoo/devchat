const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(500).json({ error: "user with this email already exists" });
    }
    const newUser = await UserModel.create({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();
    //  return jwt
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(200).json({ err: "something went wrong" });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Email or password incorrect" });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '30 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } else {
      res.status(500).json({ error: "email or password incorrect" });
    }
  } catch (error) {
    res.status(500).json({ err: "something went wrong" });
  }
};
module.exports = {
  registerUser,
  loginUser,
};
