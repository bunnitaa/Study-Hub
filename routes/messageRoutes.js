const express = require("express");
const router = express.Router();

const {
  createMessage,
  getMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
  getMessagesByGroup,
} = require("../controllers/messageController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createMessage);
router.get("/", authMiddleware, getMessages);
router.get("/group/:groupId", authMiddleware, getMessagesByGroup);
router.get("/:id", authMiddleware, getMessageById);
router.put("/:id", authMiddleware, updateMessage);
router.delete("/:id", authMiddleware, deleteMessage);

module.exports = router;