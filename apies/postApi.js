const express = require("express");
const { createPost,getDevPost } = require("../controllers/postController");

const auth = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/",auth, createPost);
router.get("/",auth, getDevPost);

module.exports = router;
