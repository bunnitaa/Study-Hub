const Message = require("../models/Message");


const createMessage = async (req, res) => {
  try {
    const { text, groupId } = req.body;

    const message = await Message.create({
      text,
      groupId,
      sender: req.user.id,
    });

    res.status(201).json({
      message: "Message created successfully",
      data: message,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find()
      .populate("sender", "name email")
      .populate("groupId", "title subject");

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id)
      .populate("sender", "name email")
      .populate("groupId", "title subject");

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json({
      message: "Message updated successfully",
      data: message,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMessagesByGroup = async (req, res) => {
  try {
    const messages = await Message.find({ groupId: req.params.groupId })
      .populate("sender", "name email");

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMessage,
  getMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
  getMessagesByGroup,
};