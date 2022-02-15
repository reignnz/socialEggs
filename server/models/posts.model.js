import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    body: {
        type: String,
        required: true, 
        unique: false, 
    },
    user: {
        type: String, 
        required: true,
    }
});

// collection = 'Posts' 
// base it on postSchema
const Post = mongoose.model('Post', postSchema);

export default Post;