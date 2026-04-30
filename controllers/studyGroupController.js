const StudyGroup = require("../models/StudyGroup");


const createGroup = async (req, res) => {
  try {
    const { title, subject, description } = req.body;

    const group = await StudyGroup.create({
      title,
      subject,
      description,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Study group created successfully",
      group,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getGroups = async (req, res) => {
  try {
    const groups = await StudyGroup.find().populate("createdBy", "name email");
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getGroupById = async (req, res) => {
  try {
    const group = await StudyGroup.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateGroup = async (req, res) => {
  try {
    const group = await StudyGroup.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    res.status(200).json({
      message: "Study group updated successfully",
      group,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteGroup = async (req, res) => {
  try {
    const group = await StudyGroup.findByIdAndDelete(req.params.id);

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    res.status(200).json({ message: "Study group deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createGroup,
  getGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
};