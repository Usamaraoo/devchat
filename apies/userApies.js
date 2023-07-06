const express = require("express");
const {
  registerUser,
  loginUser,
  userInfo,
  logoutUser,
  setUserAvatar,
  getFriendDevs,
} = require("../controllers/userController");
const { refreshToken } = require("../controllers/refreshTokenController");
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/refresh/token", refreshToken);
router.get("/user/info/:email", auth, userInfo);
router.patch("/user/set-avatar", auth, setUserAvatar);
router.get("/user/friends", auth, getFriendDevs);

module.exports = router;
