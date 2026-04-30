const express = require("express");
const router = express.Router();

const {
  createGroup,
  getGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
} = require("../controllers/studyGroupController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createGroup);
router.get("/", authMiddleware, getGroups);
router.get("/:id", authMiddleware, getGroupById);
router.put("/:id", authMiddleware, updateGroup);
router.delete("/:id", authMiddleware, deleteGroup);

module.exports = router;
