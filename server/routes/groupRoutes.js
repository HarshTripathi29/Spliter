const express = require('express');
const { createGroup, addMember } = require('../controllers/groupController');
const router = express.Router();

// @route   POST api/groups
// @desc    Create a new group
// @access  Private
router.post('/', createGroup);

// @route   PUT api/groups/member
// @desc    Add a member to a group
// @access  Private
router.put('/member', addMember);

module.exports = router;
