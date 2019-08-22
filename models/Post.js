const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comment: [Comment.schema],
    post_date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('post', postSchema)
module.exports =  Post;