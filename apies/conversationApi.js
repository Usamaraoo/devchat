const express = require("express");
const { createConversation,getConversation } = require("../controllers/ConversationController");

const auth = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/",auth, createConversation);
router.get("/",auth, getConversation);

module.exports = router;
