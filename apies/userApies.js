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
router.get("/user/info/:email",auth,  userInfo);

module.exports = router;
