import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true, 
        unique: false, 
        trim: true, 
        minlength: 3 
    },
    email: {
        type: String, 
        required: true,
    }, 
    password: {
        type: String,
        required: true,
    },
});

// collection = 'User' 
// base it on userSchema
const User = mongoose.model('User', userSchema);

export default User;