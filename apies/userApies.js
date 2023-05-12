const express = require("express");
const {
  registerUser,
  loginUser,
  userInfo,
} = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/user/info",  userInfo);

module.exports = router;
