const express = require("express");
const {
  registerUser,
  loginUser,
  userInfo,
} = require("../controllers/userController");
const { refreshToken} = require('../controllers/refreshTokenController')
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/refresh/token", refreshToken);
router.get("/user/info/:email",auth,  userInfo);

module.exports = router;
