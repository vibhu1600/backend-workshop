const Profile = require("../models/profile");

const createProfile = async (req, res) => {
  try {
    const {
      name,
      rollNumber,
      class: studentClass,
      department,
      
      phoneNumber,
    } = req.body;

    const profile = await Profile.create({
      name,
      rollNumber,
      class: studentClass,
      department,
    
      phoneNumber,
      userId: req.user.userId,
    });

    res.status(201).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      userId: req.user.userId,
    });

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const {
      name,
      rollNumber,
      class: studentClass,
      department,
      teacher,
      phoneNumber,
    } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (rollNumber) updateData.rollNumber = rollNumber;
    if (studentClass) updateData.class = studentClass;
    if (department) updateData.department = department;
    if (teacher) updateData.teacher = teacher;
    if (phoneNumber) updateData.phoneNumber = phoneNumber;

    const updatedProfile = await Profile.findOneAndUpdate(
      { userId: req.user.userId },
      updateData,
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedProfile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProfile,
  getProfile,
  updateProfile,
};