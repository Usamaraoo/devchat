const express = require("express");
const { createComment,getPostComments } = require("../controllers/CommentController");

const auth = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createComment);
router.get("/",auth, getPostComments);

module.exports = router;
