const mongoose = require('mongoose');
const User = require('./user');
const Post = require('./post');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        maxLength: 400
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
    },
    {
    timestamps: true
    }
);

// commentSchema.pre('remove', async function(next) {
//     try{
//         let user = await User.findById(this.user);
//         await user.comments.remove(this.id);
//         let post = await Post.findById(this.post);
//         post.remove(this.id);
//         user.save();
//         post.save();
//         return next();
//     }catch (e) {
//         return next(e);
//     }
// });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;