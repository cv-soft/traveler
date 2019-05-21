const express = require('express');
const router = express.Router({mergeParams: true});
const { createComment, getComments, removeComment, updateComment, getComment } = require('../handlers/comment');

router.route('/')
    .get(getComments)
    .post(createComment);
router.route('/:commentId')
    .delete(removeComment)
    .get(getComment)
    .put(updateComment);


module.exports = router;